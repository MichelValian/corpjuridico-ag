"use client";
import { useState, useEffect } from "react";

export default function TestimonyEditModal({ isOpen, onClose, onSave, testimonio }) {
  if (!isOpen) return null;

  const [testimonyData, setTestimonyData] = useState(() => ({
    name: testimonio?.name || "",
    lastName: testimonio?.lastName || "",
    testimony: testimonio?.testimony || "",
    date: testimonio?.date || "",
    image: testimonio?.image || "",
  }));

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (testimonio) {
      setTestimonyData({
        name: testimonio.name || "",
        lastName: testimonio.lastName || "",
        testimony: testimonio.testimony || "",
        date: testimonio.date || "",
        image: testimonio.image || "",
      });
    }
  }, [testimonio]);

  const handleChange = (e) => {
    setTestimonyData({ ...testimonyData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Limpiar error al cambiar valor
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", lastName: "", testimony: "", date: "", image: ""};

    // Validar nombre
    if (!testimonyData.name) {
      newErrors.name = "Nombre es obligatorio.";
      valid = false;
    }

    // Validar apellido
    if (!testimonyData.lastName) {
      newErrors.lastName = "Apellidos son obligatorios.";
      valid = false;
    }

     // Validar testimonio
    if (!testimonyData.testimony) {
      newErrors.testimony = "El testimonio es obligatorio.";
      valid = false;
    }

     // Validar fecha
    if (!testimonyData.date) {
      newErrors.date = "La fecha es obligatoria.";
      valid = false;
    }

     // Validar imagen
    // if (!testimonyData.image) {
    //   newErrors.image = "La imagen es obligatoria.";
    //   valid = false;
    // }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSave({ ...testimonyData, id: testimonio.id });  // Enviar los datos al parent
      onClose(); // Cerrar el modal después de guardar
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center text-left bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-100">
        <h2 className="text-xl font-semibold mb-4">Editar Testimonio</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            {/* Nombre */}
            <div>
              <label className="text-gray-500 text-sm font-semibold mb-1">Nombre del cliente</label>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={testimonyData.name}
                onChange={handleChange}
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
                value={testimonyData.lastName}
                onChange={handleChange}
                className="w-full p-2 text-black-700 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>

            {/* Testimonio */}
            <div className="col-span-3">
              <label className="text-gray-500 text-sm font-semibold mb-1">Testimonio</label>
              <textarea
                type="text"
                name="testimony"
                placeholder="Testimonio"
                value={testimonyData.testimony}
                onChange={handleChange}
                className="w-full p-2 text-black-700 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {errors.testimony && <p className="text-red-500 text-sm">{errors.testimony}</p>}
            </div>

            {/* Fecha */}
            <div className="col-span-1">
              <label className="text-gray-500 text-sm font-semibold mb-1">Fecha</label>
              <input
                type="date"
                name="date"
                value={testimonyData.date}
                onChange={handleChange}
                className="w-full p-2 text-black-700 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
            </div>


            {/* Imagen */}
            <div className="col-span-2">
              <label className="text-gray-500 text-sm font-semibold mb-1">Link de imagen del cliente</label>
              <input
                type="text"
                name="image"
                placeholder="Imagen"
                value={testimonyData.image}
                onChange={handleChange}
                className="w-full p-2 text-black-700 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500"
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
