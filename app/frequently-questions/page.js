"use client";

import { useState } from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { FaChevronDown } from "react-icons/fa"; // Icono para el acordeón

export default function PreguntasFrecuentes() {
  const faqs = [
    {
      question: "¿Cuáles son los servicios que ofrece el corporativo?",
      answer:
        "Ofrecemos asesoría y representación legal en derecho civil (contratos, herencias, divorcios), derecho mercantil (constitución de empresas, litigios comerciales), derecho penal (defensa penal, asesoramiento en procesos judiciales), etc. Para más informacion consulta los servicios en este sitio web.",
    },
    {
      question: "¿Cómo puedo agendar una consulta legal?",
      answer:
        "Puedes agendar una consulta de tres maneras: 1) Llamándonos directamente a nuestro número de atención al cliente, 2) Enviándonos un mensaje a través whatsapp al número de contacto que aparece en este sitio web, o 3) Visitándonos en nuestras oficinas en horario de atención. Una vez que nos contactes, te indicaremos la disponibilidad y los pasos a seguir.",
    },
    {
      question: "¿Tienen atención en línea o solo presencial?",
      answer:
        "Ofrecemos ambas modalidades de atención. Puedes acudir a nuestras oficinas para una consulta presencial o solicitar una videollamada si prefieres atención remota. En ambos casos, garantizamos la misma calidad de servicio y confidencialidad en tu caso.",
    },
    {
      question: "¿Cuánto cuesta una consulta inicial?",
      answer:
        "La primera consulta tiene un costo accesible y depende de la complejidad del caso. Contáctanos para más detalles.",
    },
    {
      question: "¿Qué información debo proporcionar para recibir asesoría?",
      answer:
        "Para ofrecerte una asesoría efectiva, es recomendable que nos proporciones: 1) Una descripción detallada de tu situación, 2) Documentos relevantes (contratos, escrituras, demandas, etc.), 3) Fechas importantes relacionadas con el caso, y 4) Datos de contacto actualizados. Esto nos permitirá brindarte una respuesta más precisa y adaptada a tus necesidades.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <section
        id="servicios-encabezado"
        className="servicios-encabezado relative py-16 px-6 pt-36"
      >
        <div className="absolute inset-0 bg-blue-900 opacity-40"></div> {/* Capa oscura */}
        
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl font-bold text-gray-100 " >PREGUNTAS FRECUENTES</h1>
        </div>
      </section>

      {/* Contenido de Preguntas Frecuentes */}
      <div className="max-w-4xl mx-auto py-12 px-6">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border-b border-gray-300">
            <button
              className={`w-full flex justify-between items-center py-4 px-2 text-left text-lg font-medium focus:outline-none transition-all duration-300 
              ${openIndex === index ? "text-blue-900" : "text-gray-600"}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-blue-800" : "text-gray-500"
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="bg-gray-200 p-4 rounded-md">
                <p className="font-medium text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>


      <Footer />
    </div>
  );
}
