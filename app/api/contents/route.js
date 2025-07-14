import db from "@/database/models";
import { NextResponse } from "next/server";
import { Op } from "sequelize";

// GET: Obtener todos los contenidos o filtrados por ID, o newsId
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const newsId = searchParams.get("newsId");

    let whereCondition = {};

    if (id) {
      const content = await db.Content.findOne({ where: { id } });
      if (!content) return NextResponse.json({ message: "Contenido no encontrado" }, { status: 404 });
      return NextResponse.json(content);
    }

    if (newsId) {
      whereCondition.newsId = newsId;
    }

    const contents = await db.Content.findAll({ where: whereCondition });
    return NextResponse.json(contents);
  } catch (error) {
    return NextResponse.json({ error: true, message: error.message }, { status: 400 });
  }
}

// POST: Crear un nuevo Contenido
export async function POST(req) {
  try {
    const body = await req.json();
    const { subtitle, text, newsId } = body;

    if (!subtitle || !text || !newsId) {
      return NextResponse.json({ message: "El subtitulo, el texto y el newsId son obligatorios" }, { status: 400 });
    }

    // Verificar si la notica existe
    const news = await db.News.findOne({ where: { id: newsId } });
    if (!news) return NextResponse.json({ message: "La noticia asociada no existe" }, { status: 404 });

    const newContent = await db.Content.create({ subtitle, text, newsId });

    return NextResponse.json({ message: "Contenido creado", news: newContent });
  } catch (error) {
    return NextResponse.json({ error: true, message: error.message }, { status: 400 });
  }
}

// PUT: Actualizar un Contenido por ID
export async function PUT(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const body = await req.json();

    if (!id) {
      return NextResponse.json({ message: "ID del Contenido requerido" }, { status: 400 });
    }

    const content = await db.Content.findOne({ where: { id } });
    if (!content) return NextResponse.json({ message: "Contenido no encontrado" }, { status: 404 });

    await content.update(body);
    return NextResponse.json({ message: "Contenido actualizado", content });
  } catch (error) {
    return NextResponse.json({ error: true, message: error.message }, { status: 400 });
  }
}

// DELETE: Eliminar un Contenido por ID
export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ message: "ID del Contenido requerido" }, { status: 400 });
    }

    const content = await db.Content.findOne({ where: { id } });
    if (!content) return NextResponse.json({ message: "Contenido no encontrado" }, { status: 404 });

    await db.Content.destroy({ where: { id } });
    return NextResponse.json({ message: "Contenido eliminado" });
  } catch (error) {
    return NextResponse.json({ error: true, message: error.message }, { status: 400 });
  }
}
