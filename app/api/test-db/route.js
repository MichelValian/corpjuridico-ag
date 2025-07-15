import { NextResponse } from 'next/server';
import db from '@/database/models'; // ajusta si es diferente el path

export async function GET() {
  try {
    await db.sequelize.authenticate();
    return NextResponse.json({ message: '✅ Conexión exitosa con la base de datos Aiven' });
  } catch (error) {
    return NextResponse.json({ message: '❌ Error al conectar con la base de datos', error: error.message }, { status: 500 });
  }
}
