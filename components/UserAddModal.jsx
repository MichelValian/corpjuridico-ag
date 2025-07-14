"use client";
import { useState } from "react";

export default function UserAddModal({ isOpen, onClose, onSave }) {
  if (!isOpen) return null;

  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Limpiar error al cambiar valor
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", lastName: "", email: "", password: "" };

    // Validar nombre
    if (!userData.name) {
      newErrors.name = "Nombre es obligatorio.";
      valid = false;
    }

    // Validar apellido
    if (!userData.lastName) {
      newErrors.lastName = "Apellidos son obligatorios.";
      valid = false;
    }

    // Validar email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!userData.email || !emailRegex.test(userData.email)) {
      newErrors.email = "Correo electrónico inválido.";
      valid = false;
    }

    // Validar contraseña (mínimo 6 caracteres)
    if (!userData.password || userData.password.length < 8) {
      newErrors.password = "La contraseña debe tener al menos 8 caracteres.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSave(userData);
      onClose(); // Cerrar el modal después de guardar
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-100">
        <h2 className="text-xl text-blue-900 font-semibold mb-4">Agregar Usuario</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-4 gap-4">
            {/* Nombre */}
            <div className="col-span-2">
              <label className="text-gray-500 text-sm font-semibold mb-1">Nombre</label>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={userData.name}
                onChange={handleChange}
                // className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                className="w-full p-2 text-black-700 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500"

              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            {/* Apellidos */}
            <div className="col-span-2">
              <label className="text-gray-500 text-sm font-semibold mb-1">Apellidos</label>
              <input
                type="text"
                name="lastName"
                placeholder="Apellidos"
                value={userData.lastName}
                onChange={handleChange}
                // className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                className="w-full p-2 text-black-700 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500"

              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>

            {/* Correo electrónico */}
            <div className="col-span-2">
              <label className="text-gray-500 text-sm font-semibold mb-1">Correo electrónico</label>
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={userData.email}
                onChange={handleChange}
                // className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                className="w-full p-2 text-black-700 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500"

              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            {/* Contraseña */}
            <div className="col-span-2">
                <label className="text-gray-500 text-sm font-semibold mb-1">
                  Contraseña
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Contraseña"
                    value={userData.password}
                    onChange={handleChange}
                    // className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                    className="w-full p-2 text-black-700 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500"

                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-800 text-sm"
                  >
                    {showPassword ? "Ocultar" : "Mostrar"}
                  </button>
                </div>
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded-lg"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-950"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
