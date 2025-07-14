import db from "@/database/models";
import { NextResponse } from "next/server";

// GET: Obtener todos los equipos o uno por ID
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const teamId = searchParams.get("id");
    console.log("ID recibido en el backend:", teamId);

    if (teamId) {
      const team = await db.Team.findOne({ where: { id: teamId } });
      if (!team) return NextResponse.json({ message: "Integrante del equipo no encontrado" }, { status: 404 });
      return NextResponse.json(team);
    }

    const teams = await db.Team.findAll();
    return NextResponse.json(teams);
  } catch (error) {
    return NextResponse.json({ error: true, message: error.message }, { status: 400 });
  }
}

// POST: Crear un nuevo Integrante del e
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, lastName, email, career, specialty, education, experience, phone, languages, image } = body;

    if (!name || !email) {
      return NextResponse.json({ message: "El nombre y el email son obligatorios" }, { status: 400 });
    }

    const team = await db.Team.create({
      name,
      lastName,
      email,
      career,
      specialty,
      education,
      experience,
      phone,
      languages,
      image
    });

    return NextResponse.json({ message: "Integrante del equipo creado", team });
  } catch (error) {
    return NextResponse.json({ error: true, message: error.message }, { status: 400 });
  }
}

// PUT: Actualizar equipo por ID
export async function PUT(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const body = await req.json();

    if (!id) {
      return NextResponse.json({ message: "ID de Integrante del equipo requerido" }, { status: 400 });
    }

    await db.Team.update(body, { where: { id } });
    return NextResponse.json({ message: "Integrante del equipo actualizado" });
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
      return NextResponse.json({ message: "ID de Integrante del equipo requerido" }, { status: 400 });
    }

    const team = await db.Team.findOne({ where: { id } });

    if (!team) return NextResponse.json({ message: "Integrante del equipo no encontrado" }, { status: 404 });

    await db.Team.destroy({ where: { id } });
    return NextResponse.json({ message: "Integrante del equipo eliminado" });
  } catch (error) {
    return NextResponse.json({ error: true, message: error.message }, { status: 400 });
  }
}
