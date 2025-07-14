"use client";
import { useState, useEffect, useRef } from "react";

export default function ServiceEditModal({ isOpen, onClose, onSave, servicio }) {
  if (!isOpen) return null;

  const [serviceData, setServiceData] = useState(() => ({
    name: servicio?.name || "",
    description: servicio?.description || "",
    image: servicio?.image || "",
    procedure: [""],
  }));

  const proceduresEndRef = useRef(null); 

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (servicio) {
       console.log("Servicio recibido:", servicio); // <-- Agrega esto

      setServiceData({
        name: servicio.name || "",
        description: servicio.description || "",
        image: servicio.image || "",
        procedure: Array.isArray(servicio.ServiceProcedure)
          ? servicio.ServiceProcedure.map(p => p?.name ?? "")
          : [""]
      });
    }
  }, [servicio]);

  const addProcedureField = () => {
  setServiceData((prevData) => ({
    ...prevData,
    procedure: [...prevData.procedure, ""],
  }));

  setTimeout(() => {
    proceduresEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, 100);
};

  const handleChange = (e) => {
    setServiceData({ ...serviceData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Limpiar error al cambiar valor
  };

  
  // Manejador de cambios en trámites:
  const handleProcedureChange = (index, value) => {
    const updatedProcedures = [...serviceData.procedure];
    updatedProcedures[index] = value;
    setServiceData({ ...serviceData, procedure: updatedProcedures });
  };

  const removeProcedureField = (index) => {
    const updatedProcedures = [...serviceData.procedure];
    updatedProcedures.splice(index, 1);
    setServiceData({ ...serviceData, procedure: updatedProcedures });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", description: "", image: "", procedure: [""], };

    // Validar nombre
    if (!serviceData.name) {
      newErrors.name = "Nombre es obligatorio.";
      valid = false;
    }

    // Validar apellido
    if (!serviceData.description) {
      newErrors.description = "La descripción es obligatoria.";
      valid = false;
    }

     // Validar imagen
    // if (!serviceData.image) {
    //   newErrors.image = "La imagen es obligatoria.";
    //   valid = false;
    // }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  if (validateForm()) {
    const cleanedData = {
      ...serviceData,
      procedure: serviceData.procedure
        .filter(p => p.trim() !== "")
        .map(p => ({ name: p })), // ← importante
      id: servicio.id
    };
    onSave(cleanedData);
    onClose();
  }
};


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-100">
      {/* <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100"> */}
        <h2 className="text-xl text-blue-900 font-semibold mb-4">Editar Servicio</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            
            {/* Nombre */}
            <div className="col-span-1">
              <label className="block text-gray-400 text-sm font-semibold mb-1">Nombre</label>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={serviceData.name}
                onChange={handleChange}
                className="text-black-700 text-sm w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

             {/* Imagen */}
            <div className="col-span-2">
              <label className="block text-gray-400 text-sm font-semibold mb-1">Link de la imagen</label>
              <input
                type="text"
                name="image"
                placeholder="Imagen"
                value={serviceData.image}
                onChange={handleChange}
                className="text-black-700 text-sm w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
            </div>

            {/* Descripción */}
            <div className="col-span-3">
              <label className="block text-gray-400 text-sm font-semibold mb-1">Descripción</label>
              <textarea
                type="text"
                name="description"
                placeholder="Descripción"
                value={serviceData.description}
                onChange={handleChange}
                className="text-black-700 text-sm w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
            </div>

            {/* Trámites */}
            <div className="col-span-3">
              <label className="block text-gray-400 text-sm font-semibold mb-1">Trámites</label>
              <div className="max-h-48 overflow-y-auto space-y-2 pr-2">
                {serviceData.procedure.map((procedure, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      placeholder={`Trámite ${index + 1}`}
                      value={procedure || ""}
                      onChange={(e) => handleProcedureChange(index, e.target.value)}
                      className="text-black-700 text-sm w-full p-2 border rounded-lg"
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
                <div ref={proceduresEndRef} />
              </div>

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
