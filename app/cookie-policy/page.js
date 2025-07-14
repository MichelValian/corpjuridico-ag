"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";


export default function PoliticaPrivacidad() {

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <section
        id="servicios-encabezado"
        className="servicios-encabezado relative py-16 px-6 pt-36"
      >
        <div className="absolute inset-0 bg-blue-900 opacity-40"></div> {/* Capa oscura */}
        
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl font-bold text-gray-100 " >POLÍTICA DE COOKIES</h1>
        </div>
      </section>

      <div className="bg-gray-50 py-4 sm:py-4">
        <div className="mx-auto max-w-2xl px-3 lg:max-w-7xl lg:px-2">
          <div className="mt-4 grid gap-1 sm:mt-4 ">
            

            {/* Segunda columna (centro, más grande) */}
            <div className="relative">
              <div className="absolute inset-px bg-white"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-8">
                
                <ol className="list-decimal">
                  <li>Introducción</li>
                     <p className="mt-2 mb-6 text-sm/6 text-gray-600 text-justify">
                        <strong>Corporativo Jurídico Alvarado Guzmán y Asociados</strong> (en adelante, "nuestro sitio web"), nos preocupamos por la 
                        privacidad y transparencia en el uso de datos. Esta Política de Cookies explica qué son las cookies, cómo las utilizamos y cómo puede gestionarlas.
                     </p>
                  <li>¿Qué son las cookies?</li>
                     <p className="mt-2 mb-6 text-sm/6 text-gray-600 text-justify">
                        Las cookies son pequeños archivos de texto que un sitio web almacena en su dispositivo (ordenador, tablet o móvil) cuando lo visita. Se utilizan para mejorar la experiencia de usuario, recordar preferencias o recopilar datos sobre la navegación.
                     </p>
                  <li>¿Usamos cookies?</li>
                     <p className="mt-2 mb-6 text-sm/6 text-gray-600 text-justify">
                        <strong>Actualmente, no utilizamos cookies en nuestro sitio web.</strong> Sin embargo, si en el futuro implementamos cookies para mejorar la funcionalidad del sitio, actualizaremos esta Política y le informaremos adecuadamente.
                     </p>
                  <li>Tipos de cookies que podríamos utilizar en el futuro</li>
                     <p className="mt-2 mb-2 text-sm/6 text-gray-600 text-justify">
                        Si en algún momento implementamos cookies, podrían incluirse los siguientes tipos:
                     </p>
                     <ul className="list-disc px-4 mb-6 text-sm/6 text-gray-600 text-justify">
                        <li><strong>Cookies esenciales</strong>: Necesarias para el funcionamiento del sitio web.</li>
                        <li><strong>Cookies de rendimiento</strong>: Para analizar el uso del sitio web y mejorar la experiencia del usuario.</li>
                        <li><strong>Cookies de funcionalidad</strong>: Para recordar preferencias y configuraciones.</li>
                        <li><strong>Cookies de terceros</strong>:  Como aquellas utilizadas por servicios de análisis (ejemplo: Google Analytics).</li>
                     </ul>
                  <li>Gestión y eliminación de cookies</li>
                  <p className="mt-2 mb-2 text-sm/6 text-gray-600 text-justify">
                     Aunque actualmente no utilizamos cookies, si en el futuro decidimos hacerlo, usted podrá:
                  </p>
                  <ul className="list-disc px-4 mb-6 text-sm/6 text-gray-600 text-justify">
                     <li><strong>Configurar su navegador</strong> para aceptar, rechazar o eliminar cookies.</li>
                     <li><strong>Consultar esta política</strong> regularmente para estar informado sobre cualquier cambio.</li>
                  </ul>
                  <li>Cambios en esta política</li>
                     <p className="mt-2 mb-6 text-sm/6 text-gray-600 text-justify">
                        Si implementamos cookies en el futuro, actualizaremos esta Política de Cookies y notificaremos a los usuarios de cualquier cambio relevante.
                     </p>

                 
                     <p className="mt-4 mb-6 text-sm/6 text-gray-600 text-justify">
                        <strong>Última actualización</strong>: 18/03/2025
                     </p>
                </ol>
              </div>
              <div className="pointer-events-none absolute inset-px  ring-1 shadow-sm ring-black/5"></div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
