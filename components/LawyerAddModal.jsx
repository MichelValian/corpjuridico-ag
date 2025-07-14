"use client";
import { useState } from "react";

export default function LawyerAddModal({ isOpen, onClose, onSave }) {
  if (!isOpen) return null;

  const [lawyerData, setLawyerData] = useState({
    name: "",
    lastName: "",
    email: "",
    career: "",
    specialty: "",
    education: "",
    experience: "",
    phone: "",
    languages: "",
    image: "",
  });

  // const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    email: "",
    career: "",
    specialty: "",
    education: "",
    experience: "",
    phone: "",
    languages: "",
    image: "",
  });

  const handleChange = (e) => {
    setLawyerData({ ...lawyerData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Limpiar error al cambiar valor
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { 
      name: "", 
      lastName: "", 
      email: "", 
      career: "",
      specialty: "",
      education: "",
      experience: "",
      phone: "",
      languages: "",
      image: "",
    };

    // Validar nombre
    if (!lawyerData.name) {
      newErrors.name = "Nombre es obligatorio.";
      valid = false;
    }

    // Validar apellido
    if (!lawyerData.lastName) {
      newErrors.lastName = "Apellidos son obligatorios.";
      valid = false;
    }

    // Validar email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!lawyerData.email || !emailRegex.test(lawyerData.email)) {
      newErrors.email = "Correo electrónico inválido.";
      valid = false;
    }

    if (!lawyerData.career) {
      newErrors.career = "La carrera es obligatoria.";
      valid = false;
    }

    if (!lawyerData.specialty) {
      newErrors.specialty = "La especialidad es obligatoria.";
      valid = false;
    }

    if (!lawyerData.education) {
      newErrors.education = "La educación es obligatoria.";
      valid = false;
    }

    if (!lawyerData.experience) {
      newErrors.experience = "La experiencia es obligatoria.";
      valid = false;
    }

    if (!lawyerData.phone) {
      newErrors.phone = "El teléfono es obligatorio.";
      valid = false;
    }

    if (!lawyerData.languages) {
      newErrors.languages = "Los idiomas son obligatorios.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSave(lawyerData);
      onClose(); // Cerrar el modal después de guardar
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-100">
        <h2 className="text-xl text-blue-900 font-semibold mb-4">Agregar abogado</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            {/* Nombre */}
            <div>
              {/* <label className="text-gray-500 text-sm font-semibold mb-1">Nombre</label> */}
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={lawyerData.name}
                onChange={handleChange}
                className="w-full text-black-700 text-sm p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            {/* Apellidos */}
            <div className="col-span-2">
              {/* <label className="text-gray-500 text-sm font-semibold mb-1">Apellidos</label> */}
              <input
                type="text"
                name="lastName"
                placeholder="Apellidos"
                value={lawyerData.lastName}
                onChange={handleChange}
                className="w-full text-black-700 text-sm p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>

            {/* Carrera */}
            <div className="col-span-2">
              {/* <label className="text-gray-500 text-sm font-semibold mb-1">Carrera</label> */}
              <input
                type="text"
                name="career"
                placeholder="Carrera"
                value={lawyerData.career}
                onChange={handleChange}
                className="w-full text-black-700 text-sm p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {errors.career && <p className="text-red-500 text-sm">{errors.career}</p>}
            </div>

            {/* Idioma */}
            <div>
              {/* <label className="text-gray-500 text-sm font-semibold mb-1">Idiomas</label> */}
              <input
                type="text"
                name="languages"
                placeholder="Idiomas"
                value={lawyerData.languages}
                onChange={handleChange}
                className="w-full text-black-700 text-sm p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {errors.languages && <p className="text-red-500 text-sm">{errors.languages}</p>}
            </div>

            {/* Especialidad */}
            <div className="col-span-2">
              {/* <label className="text-gray-500 text-sm font-semibold mb-1">Especialidad</label> */}
              <input
                type="text"
                name="specialty"
                placeholder="Especialidad"
                value={lawyerData.specialty}
                onChange={handleChange}
                className="w-full text-black-700 text-sm p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {errors.specialty && <p className="text-red-500 text-sm">{errors.specialty}</p>}
            </div>

            {/* Telefono */}
            <div>
              {/* <label className="text-gray-500 text-sm font-semibold mb-1">Teléfono</label> */}
              <input
                type="text"
                name="phone"
                placeholder="Telefono"
                value={lawyerData.phone}
                onChange={handleChange}
                className="w-full text-black-700 text-sm p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            {/* Educación */}
            <div className="col-span-2">
              {/* <label className="text-gray-500 text-sm font-semibold mb-1">Educación</label> */}
              <input
                type="text"
                name="education"
                placeholder="Educación"
                value={lawyerData.education}
                onChange={handleChange}
                className="w-full text-black-700 text-sm p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {errors.education && <p className="text-red-500 text-sm">{errors.education}</p>}
            </div>

            {/* Correo electrónico */}
            <div>
              {/* <label className="text-gray-500 text-sm font-semibold mb-1">Correo electrónico</label> */}
              <input
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={lawyerData.email}
                onChange={handleChange}
                className="w-full text-black-700 text-sm p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            {/* Experiencia */}
            <div className="col-span-3">
              {/* <label className="text-gray-500 text-sm font-semibold mb-1">Experiencia</label> */}
              <textarea
                type="text"
                name="experience"
                placeholder="Experiencia"
                value={lawyerData.experience}
                onChange={handleChange}
                className="w-full text-black-700 text-sm p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {errors.experience && <p className="text-red-500 text-sm">{errors.experience}</p>}
            </div>

            {/* Link de imagen */}
            <div className="col-span-3"> 
              {/* <label className="text-gray-500 text-sm font-semibold mb-1">Link de imagen</label> */}
              <input
                type="text"
                name="image"
                placeholder="Link de imagen"
                value={lawyerData.image}
                onChange={handleChange}
                className="w-full text-black-700 text-sm p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
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
