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
          <h1 className="text-5xl font-bold text-gray-100 " >TÉRMINOS DE SERVICIO</h1>
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
                    <p className="mt-2 mb-6 text-sm/6 text-gray-600 text-justify">
                        Bienvenido a<strong> Corporativo Jurídico Alvarado Guzmán y Asociados. </strong> Los siguientes<strong> Términos de Servicio</strong> (en adelante, los "Términos") 
                        regulan el acceso y uso de nuestro sitio web y servicios. Al utilizar este Sitio Web, usted acepta cumplir con estos Términos. Si no está de acuerdo con estos 
                        Términos, le pedimos que no utilice nuestro Sitio Web.
                    </p>
                  <li>Uso del Sitio Web</li>
                     <p className="mt-2 mb-2 text-sm/6 text-gray-600 text-justify">
                        El acceso y uso de este Sitio Web está condicionado al cumplimiento de estos Términos. Al acceder y utilizar este Sitio Web, usted acepta:
                     </p>
                     <ul className="list-disc px-4 mb-6 text-sm/6 text-gray-600 text-justify">
                        <li>Usar el Sitio Web únicamente para fines legales y conforme a las leyes aplicables.</li>
                        <li>No usar el Sitio Web de manera que pueda dañar, deshabilitar, sobrecargar o deteriorar el Sitio Web o interferir con el uso del mismo por parte de otros usuarios.</li>
                     </ul>
                  <li>Servicios prestados</li>
                     <p className="mt-2 mb-2 text-sm/6 text-gray-600 text-justify">
                        <strong>Corporativo Jurídico Alvarado Guzmán y Asociados</strong> ofrece servicios legales especializados en diversas áreas del derecho a través de este Sitio Web. 
                        El Sitio Web puede proporcionar información general sobre nuestros servicios y permite a los usuarios contactar con nosotros para consultas.
                     </p>
                     <p className="mt-2 mb-6 text-sm/6 text-gray-600 text-justify">
                        Los servicios ofrecidos a través del Sitio Web se proporcionan conforme a los acuerdos y contratos que puedan celebrarse con cada cliente. Los detalles específicos
                        de los servicios se formalizan mediante acuerdos individuales con los clientes.
                     </p>
                 <li>Propiedad intelectual</li>
                     <p className="mt-2 mb-2 text-sm/6 text-gray-600 text-justify">
                        Todo el contenido disponible en este Sitio Web, incluyendo, pero no limitado a, textos, imágenes, logotipos, gráficos, videos, y software (en adelante, "Contenido"), 
                        es propiedad de <strong>Corporativo Jurídico Alvarado Guzmán y Asociados</strong> o está bajo licencia, y está protegido por las leyes de propiedad intelectual, 
                        incluyendo las leyes de derechos de autor y marcas registradas.
                     </p>
                     <p className="mt-2 mb-6 text-sm/6 text-gray-600 text-justify">
                        Queda estrictamente prohibido el uso, copia, distribución, transmisión o modificación no autorizada del Contenido. No se le concede ningún derecho sobre la propiedad 
                        intelectual contenida en este Sitio Web.
                     </p>
                  <li>Registro de usuario y cuenta</li>
                     <p className="mt-2 mb-2 text-sm/6 text-gray-600 text-justify">
                        Para acceder a ciertos servicios en nuestro Sitio Web, es posible que se le solicite registrarse y crear una cuenta de usuario. Usted es responsable de mantener la 
                        confidencialidad de su cuenta y contraseña, así como de todas las actividades que se realicen bajo su cuenta.
                     </p>
                     <p className="mt-2 mb-6 text-sm/6 text-gray-600 text-justify">
                        Se compromete a notificar inmediatamente a <strong>Corporativo Jurídico Alvarado Guzmán y Asociados</strong> cualquier uso no autorizado de su cuenta.
                     </p>
                  <li>Responsabilidad</li>
                     <p className="mt-2 mb-2 text-sm/6 text-gray-600 text-justify">
                        <strong>Corporativo Jurídico Alvarado Guzmán y Asociados</strong> no será responsable de ningún daño directo, indirecto, incidental, especial, consecuente o punitivo
                        que pueda surgir del uso o incapacidad de usar el Sitio Web, incluidos, pero no limitados a, errores, omisiones, interrupciones, virus o pérdida de datos.
                     </p>
                     <p className="mt-2 mb-6 text-sm/6 text-gray-600 text-justify">
                        El contenido en este Sitio Web se proporciona solo con fines informativos y no constituye asesoramiento legal. Para recibir asesoría legal, se debe contactar 
                        directamente con uno de nuestros abogados.
                     </p>
                  <li>Enlaces a sitios de terceros</li>
                     <p className="mt-2 mb-6 text-sm/6 text-gray-600 text-justify">
                        Este Sitio Web puede contener enlaces a sitios web de terceros que no son operados ni controlados por <strong>Corporativo Jurídico Alvarado Guzmán y Asociados</strong>. 
                        No somos responsables del contenido, las políticas de privacidad o las prácticas de esos sitios. Le recomendamos leer los términos de servicio y las políticas de
                        privacidad de cualquier sitio web de terceros.
                     </p>
                  <li>Modificaciones a los Términos de Servicio</li>
                     <p className="mt-2 mb-6 text-sm/6 text-gray-600 text-justify">
                        <strong>Corporativo Jurídico Alvarado Guzmán y Asociados</strong> se reserva el derecho de modificar o actualizar estos Términos en cualquier momento. 
                        Los cambios serán publicados en esta página, y la fecha de la última actualización será indicada al final del documento. Le recomendamos que revise 
                        regularmente esta sección para estar al tanto de cualquier modificación.
                     </p>
                     <li>Terminación</li>
                     <p className="mt-2 mb-6 text-sm/6 text-gray-600 text-justify">
                        Podemos suspender o terminar su acceso al Sitio Web en cualquier momento y por cualquier motivo, incluidos, pero no limitados a, el incumplimiento de estos Términos.
                     </p>
                     <li>Ley aplicable</li>
                     <p className="mt-2 mb-6 text-sm/6 text-gray-600 text-justify">
                        Estos Términos de Servicio se regirán e interpretarán de acuerdo con las leyes de México. Cualquier disputa relacionada con 
                        estos Términos será resuelta por los tribunales competentes de Izúcar de Mamoros, Puebla.
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
