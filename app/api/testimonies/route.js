import db from "@/database/models";
import { NextResponse } from "next/server";
import { Op } from "sequelize";

// GET: Obtener todos los testimonios o uno por ID o nombre de cliente o fecha
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const date = searchParams.get("date");

    let whereCondition = {};

    if (id) {
      const testimony = await db.Testimony.findOne({ where: { id: id } });
      if (!testimony) return NextResponse.json({ message: "Testimonio no encontrado" }, { status: 404 });
      return NextResponse.json(testimony);
    }

    if (name) {
      whereCondition = {
        [Op.or]: [
          { name: { [Op.like]: `%${name}%` } },
          { lastName: { [Op.like]: `%${name}%` } }
        ]
      };
    }

    if (date) {
      whereCondition.date = date; // Si hay filtro por fecha
    }

    const testimonies = await db.Testimony.findAll({ where: whereCondition });
    return NextResponse.json(testimonies);
  } catch (error) {
    return NextResponse.json({ error: true, message: error.message }, { status: 400 });
  }
}


// POST: Crear un nuevo testimonio
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, lastName, testimony, date, image } = body;

    if (!name || !testimony) {
      return NextResponse.json({ message: "El nombre y el testimonio son obligatorios" }, { status: 400 });
    }

    const testimonyAdd = await db.Testimony.create({
      name,
      lastName,
      testimony,
      date,
      image
    });

    return NextResponse.json({ message: "Testimonio creado", testimonyAdd });
  } catch (error) {
    return NextResponse.json({ error: true, message: error.message }, { status: 400 });
  }
}

// PUT: Actualizar testimonio por ID
export async function PUT(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const body = await req.json();

    if (!id) {
      return NextResponse.json({ message: "ID de testimonio requerido" }, { status: 400 });
    }

    await db.Testimony.update(body, { where: { id } });
    return NextResponse.json({ message: "Testimonio actualizado" });
  } catch (error) {
    return NextResponse.json({ error: true, message: error.message }, { status: 400 });
  }
}

// DELETE: Eliminar equipo por ID
export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ message: "ID del testimonio requerido" }, { status: 400 });
    }

    const testimonio = await db.Testimony.findOne({ where: { id } });

    if (!testimonio) return NextResponse.json({ message: "Testimonio no encontrado" }, { status: 404 });

    await db.Testimony.destroy({ where: { id } });
    return NextResponse.json({ message: "Tsetimonio eliminado" });
  } catch (error) {
    return NextResponse.json({ error: true, message: error.message }, { status: 400 });
  }
}
