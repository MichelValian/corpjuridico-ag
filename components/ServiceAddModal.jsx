"use client";
import { useState } from "react";

export default function ServiceAddModal({ isOpen, onClose, onSave }) {
  if (!isOpen) return null;

  const [serviceData, setServiceData] = useState({
    name: "",
    description: "",
    image: "",
    procedure: [""],
  });

  // const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setServiceData({ ...serviceData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Limpiar error al cambiar valor
  };


   const handleProcedureChange = (index, value) => {
    const updatedProcedures = [...serviceData.procedure];
    updatedProcedures[index] = value;
    setServiceData({ ...serviceData, procedure: updatedProcedures });
  };

  const addProcedureField = () => {
    setServiceData({ ...serviceData, procedure: [...serviceData.procedure, ""] });
  };

  const removeProcedureField = (index) => {
    const updatedProcedures = [...serviceData.procedure];
    updatedProcedures.splice(index, 1);
    setServiceData({ ...serviceData, procedure: updatedProcedures });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { 
      name: "", 
      description: "",
      image: "",
    };

    // Validar nombre
    if (!serviceData.name) {
      newErrors.name = "El nombre del servico es obligatorio.";
      valid = false;
    }

    // Validar apellido
    if (!serviceData.description) {
      newErrors.description = "La descripción se obligatoria.";
      valid = false;
    }

    //  if (!serviceData.image) {
    //   newErrors.image = "El link de la imagen es obligatorio.";
    //   valid = false;
    // }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Eliminar procedimientos vacíos
      const cleanedData = {
        ...serviceData,
        procedure: serviceData.procedure
          .filter(p => p.trim() !== "")
          .map(p => ({ name: p })), // 🛠️ cada trámite se vuelve un objeto con propiedad name
      };
      onSave(cleanedData);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-100">
        <h2 className="text-xl text-blue-900 font-semibold mb-4">Agregar servicio</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            {/* Nombre */}
            <div className="col-span-1">
              <label className="block text-gray-500 text-sm font-semibold mb-1">Nombre</label>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={serviceData.name}
                onChange={handleChange}
                className="w-full text-black-700 text-sm p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            {/* Link de imagen */}
            <div className="col-span-2">
              <label className="block text-gray-500 text-sm font-semibold mb-1">Nombre</label>
              <input
                type="text"
                name="image"
                placeholder="Link de imagen"
                value={serviceData.image}
                onChange={handleChange}
                className="w-full text-black-700 text-sm p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
            </div>

            {/* descripción */}
            <div className="col-span-3">
              <label className="block text-gray-500 text-sm font-semibold mb-1">Nombre</label>
              <textarea
                type="text"
                name="description"
                placeholder="Descripción"
                value={serviceData.description}
                onChange={handleChange}
                className="w-full text-black-700 text-sm p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
            </div>

             <div className="col-span-3">
                <label className="block text-gray-500 text-sm font-semibold mb-1">Trámites</label>
                {serviceData.procedure.map((procedure, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      placeholder={`Trámite ${index + 1}`}
                      value={procedure}
                      onChange={(e) => handleProcedureChange(index, e.target.value)}
                      className="w-full text-black-700 text-sm p-2 border rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeProcedureField(index)}
                      className="bg-red-500 text-white px-2 rounded hover:bg-red-600"
                    >
                      -
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addProcedureField}
                  className="mt-2 text-sm text-blue-700 hover:underline"
                >
                  + Agregar otro trámite
                </button>
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
