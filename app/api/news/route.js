import db from "@/database/models";
import { NextResponse } from "next/server";
import { Op } from "sequelize";

// GET: Obtener todas las noticias o una por ID con sus contenidos
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const title = searchParams.get("title");

    let whereCondition = {};

    if (id) {
      const noticia = await db.News.findOne({
        where: { id },
        include: {
          model: db.Content,
          as: 'NewsContent',  // Asociación definida en el modelo Procedure
        },
      });
      if (!noticia) return NextResponse.json({ message: "Noticia no encontrada" }, { status: 404 });
      return NextResponse.json(noticia);
    }

    if (title) {
      whereCondition = {
        [Op.or]: [
          { title: { [Op.like]: `%${title}%` } },
        ]
      };
    }

    const noticias = await db.News.findAll({
      where: whereCondition,
      include: {
        model: db.Content,
        as: 'NewsContent',  // Incluir contenidos relacionados con la noticia.
      },
    });

    return NextResponse.json(noticias);
  } catch (error) {
    return NextResponse.json({ error: true, message: error.message }, { status: 400 });
  }
}



// POST: Crear una nueva noticia con contenidos
export async function POST(req) {
  try {
    const body = await req.json();
    const { title, category, author, date, content, image } = body;

    if (!title || !category || !content || !image) {
      return NextResponse.json({ message: "El titulo, categoria, autor, fecha e imagen son obligatorios" }, { status: 400 });
    }

    // Crear la noticia
    const newsAdd = await db.News.create({
      title,
      category,
      author,
      date,
      image
    });

    // Si hay contenidos, crear los contenidos asociados a la noticia
    if (Array.isArray(content) && content.length > 0) {
      const contents = await db.Content.bulkCreate(
        content.map(proc => ({
          subtitle: proc.subtitle,
          text: proc.text,
          newsId: newsAdd.id,  // Asociar el contenido a la noticia creada
        }))
      );
      newsAdd.contents = contents;
    }

    return NextResponse.json({ message: "Noticia creada", newsAdd });
  } catch (error) {
    return NextResponse.json({ error: true, message: error.message }, { status: 400 });
  }
}



// PUT: Actualizar noticia con contenidos por ID
export async function PUT(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const body = await req.json();

    if (!id) {
      return NextResponse.json({ message: "ID de la noticia requerida" }, { status: 400 });
    }

    // Actualizar la noticia 
    await db.News.update(body, { where: { id } });

    // Si se proporcionan contenidos, actualizarlos
    if (body.content && Array.isArray(body.content)) {
      // Eliminar contenidos existentes
      await db.Content.destroy({ where: { newsId: id } });

      // Crear nuevos contenidos
      const contents = await db.Content.bulkCreate(
        body.content.map(proc => ({
          subtitle: proc.subtitle,
          text: proc.text,
          newsId: id,  // Asociar los nuevos contenidos a la Noticia
        }))
      );
    }

    return NextResponse.json({ message: "Noticia actualizada" });
  } catch (error) {
    return NextResponse.json({ error: true, message: error.message }, { status: 400 });
  }
}


// export async function PUT(req) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const serviceId = searchParams.get("id"); // ID del Service
//     const body = await req.json();

//     if (!serviceId) {
//       return NextResponse.json({ message: "ID del servicio requerido" }, { status: 400 });
//     }

//     // Verificar si el servicio existe
//     const service = await db.News.findOne({ where: { id: serviceId }, include: { model: db.Content, as: "ServiceProcedure" } });

//     if (!service) {
//       return NextResponse.json({ message: "Servicio no encontrado" }, { status: 404 });
//     }

//     // Si el cuerpo incluye un procedimiento, buscarlo y actualizarlo
//     if (body.procedureId) {
//       const procedure = await db.Content.findOne({ where: { id: body.procedureId, serviceId } });

//       if (!procedure) {
//         return NextResponse.json({ message: "Procedimiento no encontrado en este servicio" }, { status: 404 });
//       }

//       await procedure.update({ name: body.name }); // Solo actualiza el campo necesario
//       return NextResponse.json({ message: "Procedimiento actualizado correctamente", procedure });
//     }

//     // Si solo se quiere actualizar el servicio
//     await service.update(body);
//     return NextResponse.json({ message: "Servicio actualizado correctamente", service });
//   } catch (error) {
//     return NextResponse.json({ error: true, message: error.message }, { status: 400 });
//   }
// }




// DELETE: Eliminar servicio por ID y sus procedimientos asociados

export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ message: "ID de la noticia requerido" }, { status: 400 });
    }

    const content = await db.News.findOne({
      where: { id },
      include: {
        model: db.Content,
        as: 'NewsContent',  // Incluir contenidos asociados
      },
    });

    if (!content) return NextResponse.json({ message: "Noticia no encontrada" }, { status: 404 });

    // Eliminar los contenidos asociados primero
    await db.Content.destroy({ where: { newsId: id } });

    // Eliminar el servicio
    await db.News.destroy({ where: { id } });

    return NextResponse.json({ message: "Noticia y sus contenidos eliminados" });
  } catch (error) {
    return NextResponse.json({ error: true, message: error.message }, { status: 400 });
  }
}

