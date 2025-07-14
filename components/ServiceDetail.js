"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "./ui/Footer";

export default function ServiceDetail() {
  const pathname = usePathname();
  const slug = pathname.split("/")[2];
  const [servicio, setServicio] = useState(null);
  const [serviciosLocales, setServiciosLocales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const name = slug.replace(/-/g, " ");

  useEffect(() => {
    const fetchService = async () => {
      try {
        const response = await axios.get(`/api/services?name=${name}`);
        if (response.data.length > 0) {
          setServicio(response.data[0]);
        } else {
          setError("Servicio no encontrado");
        }
      } catch (err) {
        setError("Error al cargar el servicio");
      } finally {
        setLoading(false);
      }
    };

    const fetchServiciosLocales = async () => {
    try {
      const response = await axios.get("/api/services");
      setServiciosLocales(response.data);
    } catch (err) {
      console.error("Error al cargar los servicios locales", err);
    }
  };

    fetchService();
    fetchServiciosLocales();
  }, [slug]);

  // const serviciosLocales = {
  //   "derecho-familiar": "DERECHO FAMILIAR",
  //   "derecho-penal": "DERECHO PENAL",
  //   "derecho-civil": "DERECHO CIVIL",
  //   "derecho-mercantil": "DERECHO MERCANTIL",
  //   "derecho-administrativo": "DERECHO ADMINISTRATIVO",
  //   "derecho-agrario": "DERECHO AGRARIO",
  //   "amparo": "AMPARO",
  // };

  if (loading) return <p>Cargando...</p>;
  if (error || !servicio) return <h1>{error || "Servicio no disponible"}</h1>;

  return (
    <div className="service-detail">
      <div>
        <Navbar />
      </div>

      <section
        id="servicios-encabezado"
        className="servicios-encabezado relative py-16 px-6 pt-36"
      >
        <div className="absolute inset-0 bg-blue-900 opacity-40"></div>
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <h1
            className="text-5xl font-bold text-gray-100 mb-4"
            data-aos="fade-up"
          >
            {servicio.name.toUpperCase()}
          </h1>
        </div>
      </section>

      <div className="bg-gray-50 py-4 sm:py-8">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-4 grid gap-4 sm:mt-4 lg:grid-cols-[1fr_2fr] lg:grid-rows-2">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)] px-8 pt-8 pb-8 sm:px-10 sm:pt-10 sm:pb-12">
                <p
                  className="text-lg font-medium tracking-tight text-gray-950 max-lg:text-center"
                  data-aos="fade-left"
                >
                  SERVICIOS JURÍDICOS
                </p>
                <ul className="mt-4 space-y-2">
                  {serviciosLocales.map((serv) => {
                    const key = serv.name.toLowerCase().replace(/\s+/g, "-"); // "Derecho Familiar" -> "derecho-familiar"
                    return (
                      <li key={serv.id}>
                        <Link
                          href={`/services/${key}`}
                          className={`text-sm/6 transition-colors ${
                            key === slug
                              ? "text-blue-800 font-bold"
                              : "text-blue-900 hover:text-blue-600"
                          }`}
                          data-aos="fade-up"
                        >
                          <span aria-hidden="true">&rarr;</span> {serv.name.toUpperCase()}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="pointer-events-none absolute inset-px ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
            </div>

            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-8 sm:pb-8">
                  <p
                    className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center"
                    data-aos="fade-right"
                  >
                    {servicio.name.toUpperCase()}
                  </p>
                  <p
                    className="mt-2 mb-4 max-w-lg text-sm/6 text-gray-600 max-lg:text-center"
                    data-aos="fade-up"
                  >
                    {servicio.description}
                  </p>
                  <ul className="list-none space-y-2">
                    {servicio.ServiceProcedure.map((tramite, index) => (
                      <li
                        key={index}
                        className="text-lg pl-6 mt-2 max-w-lg text-sm/6 text-gray-600 relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/checkmark.webp')] before:bg-contain before:bg-no-repeat"
                        data-aos="fade-up"
                      >
                        {tramite.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px  ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}






// "use client";

// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import Link from "next/link";
// import Navbar from "@/components/ui/Navbar";
// import Footer from "./ui/Footer";


// const servicios = {
//   "derecho-familiar": {
//     titulo: "DERECHO FAMILIAR",
//     descripcion: "Asesoría y representación en procesos familiares.",
//     tramites: [
//       "Divorcios", 
//       "Pensión Alimenticia", 
//       "Guardia y Custodia", 
//       "Identidad de Persona",
//       "Rectificación de Actas", 
//       "Declaración de Concubinato", 
//       "Juicio de Violencia Familiar",
//       "Juicios Sucesorios Testamentario e Intestamentario"
//     ],
//     imagen: "/img/derechoFam.jpg",
//   },
//   "derecho-penal": {
//     titulo: "DERECHO PENAL",
//     descripcion: "Defensa en procesos penales y asesoría legal.",
//     tramites: [
//       "Defensa de acusados",
//       "Querella o denuncia",
//       "Suspensión condicional del proceso",
//       "Fianza",
//       "Juicio de reincidencia",
//       "Libertad condicional",
//     ],
//     imagen: "/img/derechoPenal.jpg",
//   },
//   "derecho-civil": {
//     titulo: "DERECHO CIVIL",
//     descripcion: "Asesoría y representación en asuntos civiles y patrimoniales.",
//     tramites: [
//       "Contratos", 
//       "Juicio de usucapión", 
//       "Juicio de Responsabilidad Civil",
//       "Juicio de nulidad de actos jurídicos",
//       "Inmatriculación Judicial", 
//       "Cumplimiento o rescisión de contratos",
//       "Recuperación de Inmuebles", 
//       "Creación de Sociedades Civiles"
//     ],
//     imagen: "/img/derechoFam.jpg",
//   },
//   "derecho-mercantil": {
//     titulo: "DERECHO MERCANTIL",
//     descripcion: "Asesoría legal en relaciones comerciales y negocios.",
//     tramites: [
//       "Constitución de Sociedades Mercantiles", 
//       "Cobro de Pagares, Letras de cambio",
//       "Cobro de Facturas", 
//       "Contratos Mercantiles",
//       "Contratos comerciales",
//     ],
//     imagen: "/img/derechoFam.jpg",
//   },
//   "derecho-administrativo": {
//     titulo: "DERECHO ADMINISTRATIVO",
//     descripcion: "Defensa y asesoría en procedimientos administrativos y regulatorios.",
//     tramites: [
//       "Testamentos", 
//       "Escrituración de bienes", 
//       "Certificados y poderes notariales",
//       "Inscripción de bienes inmuebles", 
//       "Fusión y escisión de empresas"
//     ],
//     imagen: "/img/derechoFam.jpg",
//   },
//   "derecho-agrario": {
//     titulo: "DERECHO AGRARIO",
//     descripcion: "Asesoría y defensa en asuntos relacionados con la propiedad rural.",
//     tramites: [
//       "Regularización de tierras ejidales", 
//       "Asesoría en conflictos agrarios",
//       "Trámites ante el Registro Agrario Nacional", 
//       "Defensa de derechos ejidales y comunales"
//     ],
//     imagen: "/img/derechoFam.jpg",
//   },
//   "amparo": {
//     titulo: "AMPARO",
//     descripcion: "Protección de derechos constitucionales contra actos de autoridad.",
//     tramites: [
//       "Amparo Directo", 
//       "Amparo Indirecto",
//       "Suspensión del Acto Reclamado", 
//       "Revisión y Queja"
//     ],
//     imagen: "/img/derechoFam.jpg",
//   },
// };

// export default function ServiceDetail() {
//   const pathname = usePathname();
//   const slug = pathname.split("/")[2]; // Extrae el slug de la URL

//   const servicio = servicios[slug];

//   if (!servicio) {
//     return <h1>Servicio no encontrado</h1>;
//   }

//   return (
//     <div className="service-detail">
//       <div>
//         <Navbar />
//       </div>

//       <section
//         id="servicios-encabezado"
//         className="servicios-encabezado relative py-16 px-6 pt-36"
//       >
//         <div className="absolute inset-0 bg-blue-900 opacity-40"></div> {/* Capa oscura */}
        
//         <div className="relative max-w-4xl mx-auto text-center text-white">
//           <h1 className="text-5xl font-bold text-gray-100 mb-4" data-aos="fade-up">{servicio.titulo}</h1>
//         </div>
//       </section>

//         <div className="bg-gray-50 py-4 sm:py-8">
//           <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
//             {/* <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-2 lg:grid-rows-2"> */}
//             <div className="mt-4 grid gap-4 sm:mt-4 lg:grid-cols-[1fr_2fr] lg:grid-rows-2">
//             <div className="relative lg:row-span-2">
//               <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
//               <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)] px-8 pt-8 pb-8 sm:px-10 sm:pt-10 sm:pb-12">
//                 <p className="text-lg font-medium tracking-tight text-gray-950 max-lg:text-center" data-aos="fade-left">
//                   SERVICIOS JURÍDICOS
//                 </p>
//                 <ul className="mt-4 space-y-2">
//                   {Object.entries(servicios).map(([key, servicioItem]) => (
//                     <li key={key}>
//                       <Link
//                         href={`/services/${key}`}
//                         className={`text-sm/6 transition-colors ${
//                           key === slug ? "text-blue-800 font-bold" : "text-blue-900 hover:text-blue-600"
//                         }`}
//                         data-aos="fade-up"
//                       >
//                         <span aria-hidden="true">&rarr;</span> {servicioItem.titulo}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="pointer-events-none absolute inset-px ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
//             </div>

             
//               <div className="relative lg:row-span-2">
//                 <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
//                 <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
//                   <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-8 sm:pb-8">
//                     <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center" data-aos="fade-right">
//                       {servicio.titulo}
//                     </p>
//                     <p className="mt-2 mb-4 max-w-lg text-sm/6 text-gray-600 max-lg:text-center" data-aos="fade-up">
//                       {servicio.descripcion}
//                     </p>
//                     <ul className="list-none space-y-2">
//                       {servicio.tramites.map((tramite, index) => (
//                         <li
//                           key={index}
//                           className="text-lg pl-6 mt-2 max-w-lg text-sm/6 text-gray-600 relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:bg-[url('/img/checkmark.webp')] before:bg-contain before:bg-no-repeat"
//                           data-aos="fade-up"
//                         >
//                           {tramite}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//                 <div className="pointer-events-none absolute inset-px  ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
//               </div>
//             </div>
//           </div>
//         </div>

//       <div>
//         <Footer/>
//       </div>
//     </div>
//   );
// }












// import Link from "next/link";
// import { FaBalanceScale, FaGavel, FaFileSignature } from "react-icons/fa"; // Íconos de ejemplo

// const serviceDetails = {
//   titulo: "Derecho Mercantil",
//   descripcion:
//     "El derecho mercantil regula las relaciones jurídicas derivadas de los actos comerciales. Nos especializamos en ayudar a empresas con la creación de contratos, resolución de disputas, y más.",
//   areas: [
//     {
//       icono: <FaBalanceScale />,
//       nombre: "Contratos Comerciales",
//       descripcion: "Asesoría en la redacción y revisión de contratos comerciales."
//     },
//     {
//       icono: <FaGavel />,
//       nombre: "Litigios Comerciales",
//       descripcion: "Representación en disputas legales y conflictos comerciales."
//     },
//     {
//       icono: <FaFileSignature />,
//       nombre: "Propiedad Intelectual",
//       descripcion: "Protección de marcas, patentes y derechos de autor."
//     }
//   ]
// };

// const Servicios = () => {
//   return (
//     <section id="servicios" className="p-8 bg-gray-50">
//       {/* Título de la sección */}
//       <h2 className="text-3xl font-bold text-blue-900 mb-4">{serviceDetails.titulo}</h2>
      
//       {/* Descripción general */}
//       <p className="text-lg mb-6">{serviceDetails.descripcion}</p>
      
//       {/* Sección de áreas de especialización */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {serviceDetails.areas.map((area, index) => (
//           <div key={index} className="flex items-center space-x-4 p-6 bg-white shadow-md rounded-lg">
//             {/* Icono */}
//             <div className="text-blue-500 text-3xl">{area.icono}</div>
            
//             {/* Información de la especialización */}
//             <div>
//               <h3 className="text-xl font-semibold">{area.nombre}</h3>
//               <p className="text-sm text-gray-700">{area.descripcion}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Acceso rápido a otros servicios */}
//       <div className="mt-12 text-center">
//         <h3 className="text-2xl font-bold text-blue-900 mb-4">Otros Servicios</h3>
//         <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {/* Enlaces a otros servicios */}
//           <Link href="/services/derecho-familiar">
//             <span className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-50 text-center">
//               <h4 className="font-semibold text-lg text-blue-900">Derecho Familiar</h4>
//               <p className="text-sm text-gray-600">Asesoría en procesos familiares.</p>
//             </span>
//           </Link>

//           <Link href="/services/derecho-penal">
//             <span className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-50 text-center">
//               <h4 className="font-semibold text-lg text-blue-900">Derecho Penal</h4>
//               <p className="text-sm text-gray-600">Defensa en procesos penales.</p>
//             </span>
//           </Link>

//           <Link href="/services/derecho-civil">
//             <span className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-50 text-center">
//               <h4 className="font-semibold text-lg text-blue-900">Derecho Civil</h4>
//               <p className="text-sm text-gray-600">Soluciones en contratos y propiedades.</p>
//             </span>
//           </Link>

//           <Link href="/services/amparo">
//             <span className="bg-white p-6 rounded-lg shadow-md hover:bg-blue-50 text-center">
//               <h4 className="font-semibold text-lg text-blue-900">Amparo</h4>
//               <p className="text-sm text-gray-600">Asesoría y representación en amparos.</p>
//             </span>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Servicios;

