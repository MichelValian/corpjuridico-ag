import db from "@/database/models";
import { NextResponse } from "next/server";
import { Op } from "sequelize";

// GET: Obtener todos los servicios o uno por ID con sus procedimientos
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const name = searchParams.get("name");

    let whereCondition = {};

    if (id) {
      const service = await db.Service.findOne({
        where: { id },
        include: {
          model: db.Procedure,
          as: 'ServiceProcedure',  // Asociación definida en el modelo Procedure
        },
      });
      if (!service) return NextResponse.json({ message: "Servicio no encontrado" }, { status: 404 });
      return NextResponse.json(service);
    }

    if (name) {
      whereCondition = {
        [Op.or]: [
          { name: { [Op.like]: `%${name}%` } },
          { description: { [Op.like]: `%${name}%` } }
        ]
      };
    }

    const services = await db.Service.findAll({
      where: whereCondition,
      include: {
        model: db.Procedure,
        as: 'ServiceProcedure',  // Incluir procedimientos relacionados con el servicio
      },
    });

    return NextResponse.json(services);
  } catch (error) {
    return NextResponse.json({ error: true, message: error.message }, { status: 400 });
  }
}



// POST: Crear un nuevo servicio con procedimientos
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, description, procedure, image } = body;

    if (!name || !description || !image || !Array.isArray(procedure)) {
      return NextResponse.json({ message: "El nombre, descripción, imagen y la lista de tramites son obligatorios" }, { status: 400 });
    }

    // Crear el servicio
    const serviceAdd = await db.Service.create({
      name,
      description,
      image
    });

    // Si hay procedimientos, crear los procedimientos asociados al servicio
    if (Array.isArray(procedure) && procedure.length > 0) {
      const procedures = await db.Procedure.bulkCreate(
        procedure.map(proc => ({
          name: proc.name,
          serviceId: serviceAdd.id,  // Asociar el procedimiento al servicio creado
        }))
      );
      serviceAdd.procedures = procedures;
    }

    return NextResponse.json({ message: "Servicio creado", serviceAdd });
  } catch (error) {
    return NextResponse.json({ error: true, message: error.message }, { status: 400 });
  }
}



// PUT: Actualizar servicio con procedimientos por ID
export async function PUT(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const body = await req.json();

    if (!id) {
      return NextResponse.json({ message: "ID de servicio requerido" }, { status: 400 });
    }

    // Actualizar el servicio
    await db.Service.update(body, { where: { id } });

    // Si se proporcionan procedimientos, actualizarlos
    if (body.procedure && Array.isArray(body.procedure)) {
      // Eliminar procedimientos existentes
      await db.Procedure.destroy({ where: { serviceId: id } });

      // Crear nuevos procedimientos
      const procedures = await db.Procedure.bulkCreate(
        body.procedure.map(proc => ({
          name: proc.name,
          serviceId: id,  // Asociar los nuevos procedimientos al servicio
        }))
      );
    }

    return NextResponse.json({ message: "Servicio actualizado" });
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
//     const service = await db.Service.findOne({ where: { id: serviceId }, include: { model: db.Procedure, as: "ServiceProcedure" } });

//     if (!service) {
//       return NextResponse.json({ message: "Servicio no encontrado" }, { status: 404 });
//     }

//     // Si el cuerpo incluye un procedimiento, buscarlo y actualizarlo
//     if (body.procedureId) {
//       const procedure = await db.Procedure.findOne({ where: { id: body.procedureId, serviceId } });

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
      return NextResponse.json({ message: "ID del servicio requerido" }, { status: 400 });
    }

    const service = await db.Service.findOne({
      where: { id },
      include: {
        model: db.Procedure,
        as: 'ServiceProcedure',  // Incluir procedimientos asociados
      },
    });

    if (!service) return NextResponse.json({ message: "Servicio no encontrado" }, { status: 404 });

    // Eliminar los procedimientos asociados primero
    await db.Procedure.destroy({ where: { serviceId: id } });

    // Eliminar el servicio
    await db.Service.destroy({ where: { id } });

    return NextResponse.json({ message: "Servicio y sus procedimientos eliminados" });
  } catch (error) {
    return NextResponse.json({ error: true, message: error.message }, { status: 400 });
  }
}

