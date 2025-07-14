import db from "@/database/models";
import { NextResponse } from "next/server";
import { Op } from "sequelize";

// GET: Obtener todos los procedimientos o filtrados por ID, nombre o serviceId
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const name = searchParams.get("name");
    const serviceId = searchParams.get("serviceId");

    let whereCondition = {};

    if (id) {
      const procedure = await db.Procedure.findOne({ where: { id } });
      if (!procedure) return NextResponse.json({ message: "Procedimiento no encontrado" }, { status: 404 });
      return NextResponse.json(procedure);
    }

    if (name) {
      whereCondition.name = { [Op.like]: `%${name}%` };
    }

    if (serviceId) {
      whereCondition.serviceId = serviceId;
    }

    const procedures = await db.Procedure.findAll({ where: whereCondition });
    return NextResponse.json(procedures);
  } catch (error) {
    return NextResponse.json({ error: true, message: error.message }, { status: 400 });
  }
}

// POST: Crear un nuevo procedimiento
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, serviceId } = body;

    if (!name || !serviceId) {
      return NextResponse.json({ message: "El nombre y el serviceId son obligatorios" }, { status: 400 });
    }

    // Verificar si el servicio existe
    const service = await db.Service.findOne({ where: { id: serviceId } });
    if (!service) return NextResponse.json({ message: "El servicio asociado no existe" }, { status: 404 });

    const newProcedure = await db.Procedure.create({ name, serviceId });

    return NextResponse.json({ message: "Procedimiento creado", procedure: newProcedure });
  } catch (error) {
    return NextResponse.json({ error: true, message: error.message }, { status: 400 });
  }
}

// PUT: Actualizar un procedimiento por ID
export async function PUT(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const body = await req.json();

    if (!id) {
      return NextResponse.json({ message: "ID del procedimiento requerido" }, { status: 400 });
    }

    const procedure = await db.Procedure.findOne({ where: { id } });
    if (!procedure) return NextResponse.json({ message: "Procedimiento no encontrado" }, { status: 404 });

    await procedure.update(body);
    return NextResponse.json({ message: "Procedimiento actualizado", procedure });
  } catch (error) {
    return NextResponse.json({ error: true, message: error.message }, { status: 400 });
  }
}

// DELETE: Eliminar un procedimiento por ID
export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ message: "ID del procedimiento requerido" }, { status: 400 });
    }

    const procedure = await db.Procedure.findOne({ where: { id } });
    if (!procedure) return NextResponse.json({ message: "Procedimiento no encontrado" }, { status: 404 });

    await db.Procedure.destroy({ where: { id } });
    return NextResponse.json({ message: "Procedimiento eliminado" });
  } catch (error) {
    return NextResponse.json({ error: true, message: error.message }, { status: 400 });
  }
}
