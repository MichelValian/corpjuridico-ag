"use client";
import { useRef, useState } from "react";

export default function NewsAddModal({ isOpen, onClose, onSave }) {
  if (!isOpen) return null;

  const [newsData, setNewsData] = useState({
    title: "",
    category: "",
    author: "Alvarado Guzmán y Asociados",
    date: "",
    image: "",
    content: [{ subtitle: "", text: "" }],
  });

  // const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({
    title: "",
    category: "",
    author: "",
    date: "",
    image: "",
  });

  const proceduresEndRef = useRef(null); 

  const handleChange = (e) => {
    setNewsData({ ...newsData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Limpiar error al cambiar valor
  };


   const handleContentChange = (index, field, value) => {
    const updatedContents = [...newsData.content];
    updatedContents[index][field] = value;
    setNewsData({ ...newsData, content: updatedContents });
  };


  const addContentField = () => {
    setNewsData({ ...newsData, content: [...newsData.content, { subtitle: "", text: "" }] });
  };

  const removeContentField = (index) => {
    const updatedContents = [...newsData.content];
    updatedContents.splice(index, 1);
    setNewsData({ ...newsData, content: updatedContents });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { 
      title: "",
      category: "",
      author: "",
      date: "",
      image: "",
    };

    // Validar nombre
    if (!newsData.title) {
      newErrors.title = "El titulo es obligatorio.";
      valid = false;
    }

    // Validar apellido
    if (!newsData.category) {
      newErrors.category = "La categoria se obligatoria.";
      valid = false;
    }

    // Validar nombre
    if (!newsData.author) {
      newErrors.author = "El autor es obligatorio.";
      valid = false;
    }

    // Validar apellido
    if (!newsData.date) {
      newErrors.date = "La fecha se obligatoria.";
      valid = false;
    }

    //  if (!newsData.image) {
    //   newErrors.image = "El link de la imagen es obligatorio.";
    //   valid = false;
    // }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const cleanedData = {
        ...newsData,
        content: newsData.content
          .filter(p => p.subtitle.trim() !== "" || p.text.trim() !== "")
          .map(p => ({
            subtitle: p.subtitle,
            text: p.text,
          })),
      };
      onSave(cleanedData);
      onClose();
    }
  };


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-100">
        <h2 className="text-xl text-blue-900 font-semibold mb-4">Agregar noticia</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            {/* Título */}
            <div className="col-span-3">
              <label className="text-gray-500 text-sm font-semibold mb-1">Título</label>
              <textarea
                type="text"
                name="title"
                placeholder="Título"
                value={newsData.title}
                onChange={handleChange}
                className="w-full p-2 text-black-700 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
            </div>

            {/* Autor */}
            <div className="col-span-2">
              <label className="text-gray-500 text-sm font-semibold mb-1">Autor</label>
              <input
                type="text"
                name="author"
                placeholder="Autor"
                value={newsData.author}
                onChange={handleChange}
                className="w-full p-2 text-black-700 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {errors.author && <p className="text-red-500 text-sm">{errors.author}</p>}
            </div>

            {/* Categoría */}
            <div >
              <label className="text-gray-500 text-sm font-semibold mb-1">Categoría</label>
              <input
                type="text"
                name="category"
                placeholder="Categoría"
                value={newsData.category}
                onChange={handleChange}
                className="w-full p-2 text-black-700 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
            </div>

            {/* Fecha de la noticia */}
            <div >
              <label className="text-gray-500 text-sm font-semibold mb-1">Fecha de la noticia</label>
              <input
                type="date"
                name="date"
                placeholder="Fecha de la noticia"
                value={newsData.date}
                onChange={handleChange}
                className="w-full p-2 text-black-700 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
            </div>

            {/* Link de imagen */}
            <div className="col-span-2"> 
              <label className="text-gray-500 text-sm font-semibold mb-1">Link de imagen o video</label>
              <input
                type="text"
                name="image"
                placeholder="Link de imagen o video"
                value={newsData.image}
                onChange={handleChange}
                className="w-full p-2 text-black-700 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              {errors.image && <p className="text-red-500 text-sm">{errors.image}</p>}
            </div>

             <div className="col-span-3">
                <label className="block text-gray-500 text-sm font-semibold mb-1 ">Contenido de la noticia</label>
                {newsData.content.map((content, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      placeholder={`Subtítulo ${index + 1}`}
                      value={content.subtitle}
                      onChange={(e) => handleContentChange(index, "subtitle", e.target.value)}
                      className="w-full p-2 text-black-700 text-sm border rounded-lg"
                    />
                    <textarea
                      type="text"
                      placeholder={`Contenido ${index + 1}`}
                      value={content.text}
                      onChange={(e) => handleContentChange(index, "text", e.target.value)}
                      className="w-full p-2 text-black-700 text-sm border rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removeContentField(index)}
                      className="bg-red-500 text-white px-2 rounded hover:bg-red-600"
                    >
                      -
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addContentField}
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
