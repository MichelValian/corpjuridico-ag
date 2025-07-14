"use client";

import React, { useEffect } from "react";
import Navbar from "@/components/ui/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card } from "@/components/ui/Card";
import { CardContent } from "@/components/ui/CardContent";
import Link from "next/link";
import Footer from "@/components/ui/Footer";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Sección de Introducción */}
      <section className="bg-gray-200 text-gray-600 text-center py-16 px-6 pt-28">
        <h1 className="font-medium tracking-tight text-gray-950 text-2xl lg:text-3xl font-bold text-blue-900 text-center mb-4" data-aos="fade-up">
          CONOCE MÁS SOBRE NOSOTROS
        </h1>
        <p className="font-medium text-gray-600 max-w-5xl mx-auto text-center mb-1" data-aos="fade-up" data-aos-delay="200">
          En <strong>Corporativo Jurídico Alvarado Guzmán y Asociados</strong>, brindamos asesoría y representación legal con profesionalismo y ética. Nuestro compromiso es proteger los derechos de nuestros clientes con estrategias jurídicas eficientes y personalizadas.
        </p>
      </section>

      <section
        id="historia"
        className="historia-section relative py-16 px-6"
      >
        <div className="absolute inset-0 bg-black opacity-70"></div> {/* Capa oscura */}
        
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <h2 className="font-medium tracking-tight text-white text-2xl lg:text-3xl font-bold text-blue-900 text-center mb-4" data-aos="fade-up">
            NUESTRA HISTORIA
          </h2>
          <p className="font-medium text-gray-200 max-w-5xl mx-auto text-center mb-8 mb-8" data-aos="fade-up" data-aos-delay="200">
            Desde nuestra fundación, nos hemos dedicado a ofrecer soluciones legales
            en distintas ramas del derecho, siempre con un enfoque basado en la
            transparencia y la responsabilidad. Gracias a nuestra experiencia, hemos
            logrado consolidarnos como una firma de confianza en la comunidad.
          </p>
        </div>
      </section>
      
      {/* Misión, Visión y Valores */}
      <section id="mision-vision" className="bg-gray-100 text-gray-600 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna Misión y Visión (2/3) */}
          <div className="md:col-span-2 space-y-8" data-aos="fade-right">
            <Card>
              <CardContent>
                <h3 className="text-lg font-medium tracking-tight text-gray-950 mb-4">MISIÓN</h3>
                <p className="mt-2 text-mD/6 text-gray-600 text-justify">
                  Proporcionar servicios legales con integridad y eficiencia, garantizando el acceso a la justicia para nuestros clientes mediante soluciones jurídicas efectivas y personalizadas.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-lg font-medium tracking-tight text-gray-950 mb-4">VISIÓN</h3>
                <p className="mt-2 text-mD/6 text-gray-600 text-justify">
                  Convertirnos en una firma líder a nivel regional y nacional, destacando por nuestra excelencia en el servicio legal, innovación y compromiso con la justicia social.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Columna Valores (1/3) */}
          <div className="md:col-span-1" data-aos="fade-left">
            <Card>
              <CardContent>
                <h3 className="text-lg font-medium tracking-tight text-gray-950 mb-4">VALORES</h3>
                <ul className="list-disc list-inside mt-2 text-mD/6 text-gray-600">
                  <li><strong>Ética:</strong> Actuamos con integridad y honestidad en cada caso.</li>
                  <li><strong>Compromiso:</strong> Defendemos los derechos de nuestros clientes con responsabilidad.</li>
                  <li><strong>Profesionalismo:</strong> Aplicamos nuestros conocimientos con excelencia y actualización constante.</li>
                  <li><strong>Confianza:</strong> Construimos relaciones basadas en la transparencia y el respeto.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default About;
