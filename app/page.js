"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/ui/Navbar";
import Carousel from "@/components/ui/Carousel";
import SobreNosotros from "@/components/SobreNosotros";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/ui/Footer";
import Equipo from "@/components/Equipo";
import Noticias from "@/components/Noticias";
import ServicePage from "@/components/ServicePage";
import TestimoniosPage from "@/components/TestimoniosPage";
import OficinaSection from "@/components/OficinaPage";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 1000,
        once: true,
        easing: "ease-out",
        disable: "mobile"
      });
    }
    
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">
        <Navbar />

      <section className="w-full p-0 pt-20">
        <div className="w-full">
          <Carousel />
        </div>
      </section>

      <div id="nosotros">
        <SobreNosotros />
      </div>

      <section
        id="info"
        className="fondo-info relative py-16 px-10"
      >
          <div className="absolute inset-0 opacity-70"></div> Capa oscura

          <div className="relative max-w-4xl mx-auto text-gray-300">
            {/* <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
              Nuestra Historia
            </h2> */}
            <p className="text-lg mb-8 tracking-wide leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              En Corporativo Jurídico <strong>Alvarado Guzmán & Asociados</strong>, nos comprometemos a brindar asesoría y representación legal con un enfoque estratégico y personalizado, 
              garantizando soluciones efectivas para la protección de los derechos e intereses de nuestros clientes en diversas áreas del derecho. Nuestro equipo de 
              profesionales trabaja con ética, responsabilidad y eficiencia para ofrecer tranquilidad y confianza en cada proceso legal.
            </p>
          </div>
      </section>

        <ServicePage/>

        {/* Nuestro Equipo */}
        <Equipo />

        <Noticias />

        <TestimoniosPage />

        <OficinaSection/>
      
      <div>
        <Footer/>
      </div>
    </div>
  );
}
