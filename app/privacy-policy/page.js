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
          <h1 className="text-5xl font-bold text-gray-100 mb-4" >POLÍTICA DE PRIVACIDAD</h1>
        </div>
      </section>

      <div className="bg-gray-50 py-4 sm:py-4">
        <div className="mx-auto max-w-2xl px-3 lg:max-w-7xl lg:px-2">
          <div className="mt-4 grid gap-1 sm:mt-4 ">
            

            {/* Segunda columna (centro, más grande) */}
            <div className="relative">
              <div className="absolute inset-px bg-white"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-8">
                <div>
                  <p className="mt-2 mb-6 text-sm/6 text-gray-600 text-justify">
                    <strong>Corporativo Jurídico Alvarado Guzmán y Asociados</strong> (en adelante, "nosotros", "nuestro", "la empresa"), se compromete a proteger la privacidad y 
                    seguridad de la información personal de nuestros usuarios. La presente Política de Privacidad tiene como finalidad informarle sobre el tipo de información que 
                    recopilamos, cómo la usamos, y las medidas que tomamos para protegerla.
                  </p>
                  <ol className="list-decimal">
                    <li>Información que recopilamos</li>
                      <p className="mt-2 mb-2 text-sm/6 text-gray-600 text-justify">
                        Recopilamos información personal que usted nos proporciona voluntariamente al interactuar con nuestro sitio web, incluyendo, pero no limitado a:
                      </p>
                      <ul className="list-disc px-4 mb-6 text-sm/6 text-gray-600 text-justify">
                          <li><strong>Datos personales</strong>: Nombre, dirección de correo electrónico, número de teléfono, y cualquier otra información relevante para la prestación de nuestros servicios legales.</li>
                          <li><strong>Información de navegación</strong>: Recopilamos información técnica como su dirección IP, tipo de navegador, páginas visitadas, y duración de su visita al sitio web.</li>
                      </ul>
                    <li>Uso de la información</li>
                      <p className="mt-2 mb-2 text-sm/6 text-gray-600 text-justify">
                        La información que recopilamos se utiliza para los siguientes fines:
                      </p>
                      <ul className="list-disc px-4 mb-6 text-sm/6 text-gray-600 text-justify">
                          <li><strong>Proveer nuestros servicios</strong>: Para contactarlo en relación con la prestación de nuestros servicios legales y para responder a sus solicitudes.</li>
                          <li><strong>Mejorar la experiencia de usuario</strong>: Para personalizar el contenido y mejorar el funcionamiento del sitio web.</li>
                          <li><strong>Cumplir con nuestras obligaciones legales</strong>: Para cumplir con los requisitos legales, fiscales y regulatorios que nos aplican.</li>
                      </ul>
                    <li>Cookies</li>
                      <p className="mt-2 mb-2 text-sm/6 text-gray-600 text-justify">
                        Actualmente, nuestro sitio web no utiliza cookies. En caso de que en el futuro implementemos cookies para mejorar la experiencia del usuario o con fines analíticos, 
                        actualizaremos esta Política de Privacidad y notificaremos a los usuarios adecuadamente.
                      </p>
                      <p className="mt-2 mb-6 text-sm/6 text-gray-600 text-justify">
                        Si en algún momento se añaden cookies, podrá gestionarlas desde la configuración de su navegador, permitiendo aceptar, rechazar o eliminarlas según sus preferencias.
                      </p>
                    <li>Protección de la información</li>
                      <p className="mt-2 mb-6 text-sm/6 text-gray-600 text-justify">
                        Nos comprometemos a tomar medidas razonables para proteger su información personal contra el acceso no autorizado, la divulgación, la alteración o la destrucción. 
                        Utilizamos protocolos de seguridad adecuados y contamos con procedimientos internos para garantizar la confidencialidad de los datos.
                      </p>
                    <li>Compartir información con terceros</li>
                      <p className="mt-2 mb-2 text-sm/6 text-gray-600 text-justify">
                        No vendemos, alquilamos ni compartimos su información personal con terceros, excepto en los siguientes casos:
                      </p>
                      <ul className="list-disc px-4 mb-6 text-sm/6 text-gray-600 text-justify">
                          <li><strong>Proveedores de servicios</strong>: Podríamos compartir su información con proveedores de servicios que nos ayuden a operar el sitio web o a prestar nuestros servicios legales, siempre bajo un acuerdo de confidencialidad.</li>
                          <li><strong>Cumplimiento de la le</strong>: Podemos compartir su información cuando sea requerido por la ley, para proteger nuestros derechos legales o para cumplir con un proceso judicial.</li>
                      </ul>
                    <li>Sus derechos</li>
                      <p className="mt-2 mb-6 text-sm/6 text-gray-600 text-justify">
                        Usted tiene derecho a acceder, rectificar, cancelar y oponerse al tratamiento de sus datos personales en cualquier momento. Para ejercer estos derechos, puede ponerse 
                        en contacto con nosotros a través de los medios proporcionados en la sección de contacto de este documento.
                      </p>
                    <li>Enlaces a otros sitios web</li>
                      <p className="mt-2 mb-6 text-sm/6 text-gray-600 text-justify">
                        Nuestro sitio web puede contener enlaces a otros sitios web que no están bajo nuestro control. No somos responsables de las prácticas de privacidad de esos sitios y le 
                        recomendamos que lea sus políticas de privacidad.
                      </p>
                      <li>Cambios en la Política de Privacidad</li>
                      <p className="mt-2 mb-6 text-sm/6 text-gray-600 text-justify">
                        Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Cualquier cambio será publicado en esta página, indicando la fecha de la última 
                        actualización. Le recomendamos que revise regularmente esta política para estar informado sobre cómo protegemos su información.
                      </p>

                      <p className="mt-4 mb-6 text-sm/6 text-gray-600 text-justify">
                        <strong>Última actualización</strong>: 18/03/2025
                     </p>
                  </ol>
                </div>
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
