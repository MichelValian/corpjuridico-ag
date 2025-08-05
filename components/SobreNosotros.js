// /app/components/SobreNosotros.js
"use client"; // Marcar este archivo como componente del lado del cliente

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa los estilos de AOS
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const SobreNosotros = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <section id="sobre-nosotros" className="py-16 px-4 bg-white text-gray-700 text-center">
      <h2 className="font-medium tracking-tight text-gray-950 text-2xl lg:text-3xl font-bold text-blue-900 text-center mb-4" data-aos="fade-up">
        SOBRE NOSOTROS
      </h2>
      <p className="font-medium text-gray-600 max-w-5xl mx-auto text-center mb-8" data-aos="fade-up" data-aos-delay="200">
        Con más de <strong>13 años de experiencia</strong>, nos especializamos en ofrecer <strong>soluciones legales eficaces</strong>. Nos caracterizamos por nuestro compromiso con la justicia, la ética profesional y la defensa de los derechos de nuestros clientes. 
      </p>

      {/* Contenedor de la imagen y texto */}
      <div className="flex justify-center items-center flex-col md:flex-row gap-8">
        <div className="md:w-1/2 w-full" data-aos="fade-left">
        <div className="absolute inset-0 bg-[#121631] opacity-20 z-10"></div>
          <img
            src="/img/abogados.jpg"
            alt="Nuestro equipo"
            className="w-full h-[280px] shadow-xl object-cover z-0"
          />
        </div>
        <div className="md:w-1/2 w-full" data-aos="fade-right" data-aos-delay="400">
          <h3 className="font-medium tracking-tight text-gray-950 text-xl lg:text-2xl font-bold text-blue-900 text-center mb-4">COMPROMETIDOS CON LA JUSTICIA</h3>
          <p className="font-medium">
            Nuestro equipo está formado por expertos en distintas áreas del derecho, brindando un servicio basado en <strong>transparencia, confianza y resultados</strong>. Desde asesoría legal hasta representación en litigios, estamos aquí para ayudarte a encontrar la mejor solución.
          </p>
          <Link href="/about">
            <button className="mt-10 px-6 py-2 bg-[#121631] text-white shadow-md transition-all duration-300 ease-in-out hover:bg-[#1f225b] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#1A2238] focus:ring-offset-2">
              <div className="flex items-center gap-3">
                Conoce más <FaArrowRight />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotros;
