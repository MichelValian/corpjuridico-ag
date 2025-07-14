import db from "@/database/models";
import { Op } from "sequelize";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

// GET: Listar usuarios
export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const name = searchParams.get("name");
    const id = searchParams.get("id");
    const role = searchParams.get("role");

    let whereCondition = {};

    if (id) {
      const user = await db.User.findOne({ where: { id: id } });
      if (!user) return NextResponse.json({ message: "Usuario no encontrado" }, { status: 404 });
      return NextResponse.json(user);
    }

    if (name) {
      whereCondition = {
        [Op.or]: [
          { name: { [Op.like]: `%${name}%` } },
          { lastName: { [Op.like]: `%${name}%` } }
        ]
      };
    } else if (role) {
      whereCondition = { role };
    }

    const users = await db.User.findAll({ where: whereCondition });
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ error: true, message: error.message }, { status: 400 });
  }
}

// POST: Agregar usuario
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, lastName, email, password, role } = body;

    if (!password || password.length < 8) {
      return NextResponse.json({ message: "La contraseña debe tener al menos 8 caracteres" }, { status: 400 });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await db.User.create({ name, lastName, email, password: hashedPassword, role });
    user.password = undefined;

    return NextResponse.json({ message: "Usuario registrado", user });
  } catch (error) {
    return NextResponse.json({ error: true, message: error.message }, { status: 400 });
  }
}

// PUT: Editar usuario
// export async function PUT(req) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const id = searchParams.get("id");

//     console.log("ID recibido en la API:", id); // 👀 Verificar si el ID es correcto

//     if (!id) {
//       return NextResponse.json({ message: "ID de usuario requerido" }, { status: 400 });
//     }

//     const body = await req.json();
//     console.log("Datos recibidos en la API:", body); // 👀 Verificar los datos

//     await db.User.update(body, { where: { id } });

//     return NextResponse.json({ message: "Usuario actualizado" });
//   } catch (error) {
//     return NextResponse.json({ error: true, message: error.message }, { status: 400 });
//   }
// }

export async function PUT(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ message: "ID de usuario requerido" }, { status: 400 });
    }

    const body = await req.json();
    const updateData = { ...body };

    // 👇 Verifica si hay nueva contraseña
    if (body.password && body.password.trim() !== "") {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(body.password, saltRounds);
      updateData.password = hashedPassword;
    } else {
      // 👇 Elimina el campo para evitar sobrescribir la existente con string vacío
      delete updateData.password;
    }

    // Actualizar usuario
    await db.User.update(updateData, { where: { id } });

    return NextResponse.json({ message: "Usuario actualizado" });
  } catch (error) {
    return NextResponse.json({ error: true, message: error.message }, { status: 400 });
  }
}


// DELETE: Eliminar usuario
export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    console.log("ID recibido en la API:", id); // 👀 Verificar si el ID es correcto

    if (!id) {
      return NextResponse.json({ message: "ID de usuario requerido" }, { status: 400 });
    }

    const user = await db.User.findOne({ where: { id } });
    if (!user) return NextResponse.json({ message: "Usuario no encontrado" }, { status: 404 });

    await db.User.destroy({ where: { id } });
    return NextResponse.json({ message: "Usuario eliminado" });
  } catch (error) {
    console.error("Error en DELETE API:", error); // 👀 Agregar más detalles si hay error
    return NextResponse.json({ error: true, message: error.message }, { status: 400 });
  }
}




// import db from "@/database/models";
// import { Op } from "sequelize";
// import bcrypt from "bcrypt";
// import { NextResponse } from "next/server";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../auth/[...nextauth]/route"; // Ajusta la ruta si cambia

// // 🔐 Función para validar sesión y rol
// async function checkAdminAuth() {
//   const session = await getServerSession(authOptions);
//   if (!session || session.user.role !== "admin") {
//     return false;
//   }
//   return true;
// }

// // GET: Listar usuarios
// export async function GET(req) {
//   if (!(await checkAdminAuth())) {
//     return NextResponse.json({ message: "No autorizado" }, { status: 401 });
//   }

//   try {
//     const { searchParams } = new URL(req.url);
//     const name = searchParams.get("name");
//     const id = searchParams.get("id");
//     const role = searchParams.get("role");

//     let whereCondition = {};

//     if (id) {
//       const user = await db.User.findOne({ where: { id: id } });
//       if (!user) return NextResponse.json({ message: "Usuario no encontrado" }, { status: 404 });
//       return NextResponse.json(user);
//     }

//     if (name) {
//       whereCondition = {
//         [Op.or]: [
//           { name: { [Op.like]: `%${name}%` } },
//           { lastName: { [Op.like]: `%${name}%` } }
//         ]
//       };
//     } else if (role) {
//       whereCondition = { role };
//     }

//     const users = await db.User.findAll({ where: whereCondition });
//     return NextResponse.json(users);
//   } catch (error) {
//     return NextResponse.json({ error: true, message: error.message }, { status: 400 });
//   }
// }

// // POST: Agregar usuario
// export async function POST(req) {
//   if (!(await checkAdminAuth())) {
//     return NextResponse.json({ message: "No autorizado" }, { status: 401 });
//   }

//   try {
//     const body = await req.json();
//     const { name, lastName, email, password, role } = body;

//     if (!password || password.length < 8) {
//       return NextResponse.json({ message: "La contraseña debe tener al menos 8 caracteres" }, { status: 400 });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = await db.User.create({ name, lastName, email, password: hashedPassword, role });
//     user.password = undefined;

//     return NextResponse.json({ message: "Usuario registrado", user });
//   } catch (error) {
//     return NextResponse.json({ error: true, message: error.message }, { status: 400 });
//   }
// }

// // PUT: Editar usuario
// export async function PUT(req) {
//   if (!(await checkAdminAuth())) {
//     return NextResponse.json({ message: "No autorizado" }, { status: 401 });
//   }

//   try {
//     const { searchParams } = new URL(req.url);
//     const id = searchParams.get("id");
//     if (!id) return NextResponse.json({ message: "ID requerido" }, { status: 400 });

//     const body = await req.json();
//     await db.User.update(body, { where: { id } });

//     return NextResponse.json({ message: "Usuario actualizado" });
//   } catch (error) {
//     return NextResponse.json({ error: true, message: error.message }, { status: 400 });
//   }
// }

// // DELETE: Eliminar usuario
// export async function DELETE(req) {
//   if (!(await checkAdminAuth())) {
//     return NextResponse.json({ message: "No autorizado" }, { status: 401 });
//   }

//   try {
//     const { searchParams } = new URL(req.url);
//     const id = searchParams.get("id");
//     if (!id) return NextResponse.json({ message: "ID requerido" }, { status: 400 });

//     const user = await db.User.findOne({ where: { id } });
//     if (!user) return NextResponse.json({ message: "Usuario no encontrado" }, { status: 404 });

//     await db.User.destroy({ where: { id } });
//     return NextResponse.json({ message: "Usuario eliminado" });
//   } catch (error) {
//     return NextResponse.json({ error: true, message: error.message }, { status: 400 });
//   }
// }

