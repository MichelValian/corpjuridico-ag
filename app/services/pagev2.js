// "use client";

// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Navbar from "@/components/ui/Navbar";

// export default function LegalServicesPage() {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   const services = [
//     {
//       category: "DERECHO FAMILIAR",
//       items: [
//         "Divorcios", "Pensión Alimenticia", "Guardia y Custodia", "Identidad de Persona",
//         "Rectificación de Actas", "Declaración de Concubinato", "Juicio de Violencia Familiar",
//         "Juicios Sucesorios Testamentario e Intestamentario"
//       ]
//     },
//     {
//       category: "DERECHO MERCANTIL",
//       items: [
//         "Constitución de Sociedades Mercantiles", "Cobro de Pagares, Letras de cambio",
//         "Cobro de Facturas", "Contratos Mercantiles"
//       ]
//     },
//     {
//       category: "DERECHO CIVIL",
//       items: [
//         "Contratos", "Juicio de usucapión", "Juicio de Responsabilidad Civil",
//         "Inmatriculación Judicial", "Cumplimiento o rescisión de contratos",
//         "Recuperación de Inmuebles", "Creación de Sociedades Civiles"
//       ]
//     },
//     {
//       category: "DERECHO PENAL",
//       items: ["Asistencia en el Ministerio Público", "Juicio Oral Penal"]
//     },
//     {
//       category: "AMPARO",
//       items: ["En materia Civil, Familiar, Penal, Mercantil"]
//     },
//     {
//       category: "DERECHO LABORAL",
//       items: [
//         "Despidos injustificados", "Asesoría en conflictos laborales", "Elaboración de contratos laborales",
//         "Demandas laborales", "Negociaciones colectivas"
//       ]
//     },
//     {
//       category: "DERECHO ADMINISTRATIVO",
//       items: [
//         "Defensa contra multas y sanciones", "Juicios de nulidad",
//         "Recursos administrativos", "Defensa contra clausuras y suspensiones"
//       ]
//     },
//     {
//       category: "PROPIEDAD INTELECTUAL",
//       items: [
//         "Registro de marcas y patentes", "Defensa de derechos de autor",
//         "Protección de propiedad industrial", "Asesoría en licencias y franquicias"
//       ]
//     },
//     {
//       category: "DERECHO NOTARIAL Y REGISTRAL",
//       items: [
//         "Testamentos", "Escrituración de bienes", "Certificados y poderes notariales",
//         "Inscripción de bienes inmuebles", "Fusión y escisión de empresas"
//       ]
//     },
//     {
//       category: "DERECHO AGRARIO",
//       items: [
//         "Regularización de tierras ejidales", "Asesoría en conflictos agrarios",
//         "Trámites ante el Registro Agrario Nacional", "Defensa de derechos ejidales y comunales"
//       ]
//     }
//   ];

//   return (
//     <div className="legal-services-page relative z-0">
//       <Navbar />

//       {/* Contenido principal */}
//       <div className="relative z-10 text-gray-600 pt-24">
//         <div className="container mx-auto px-6 py-4">
//           {/* Título con efecto */}
//           <h1
//             className="text-2xl lg:text-2xl font-extrabold text-center mb-10"
//             data-aos="fade-down"
//           >
//             Servicios Legales
//           </h1>

//           {/* Grid de servicios */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="bg-white bg-opacity-70 p-6 shadow-xl border border-gray-200 hover:scale-105 transition-transform duration-300 text-gray-800"
//                 data-aos="fade-up"
//               >
//                 <h2 className="text-1xl font-bold text-gray-600 mb-4">
//                   {service.category}
//                 </h2>
//                 <ul className="list-disc pl-5 text-gray-700">
//                   {service.items.map((item, i) => (
//                     <li key={i} className="mb-2">{item}</li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Footer elegante */}
//       <footer className="bg-[var(--color-navbar)] text-white text-center p-6 mt-16 relative z-10">
//         <p className="text-sm">
//           &copy; 2025 Corporativo Jurídico Alvarado Guzmán y Asociados. Todos los derechos reservados.
//         </p>
//       </footer>
//     </div>
//   );
// }


// import React from "react";
// import Link from "next/link";

// const services = [
//   { name: "Litigio Mercantil", slug: "litigio-mercantil" },
//   { name: "Litigio Civil", slug: "litigio-civil" },
//   { name: "Litigio Administrativo", slug: "litigio-administrativo" },
//   { name: "Litigio Familiar", slug: "litigio-familiar" },
//   { name: "Mecanismos Alternativos de Solución de Controversias", slug: "mecanismos-alternativos" },
//   { name: "Procedimientos Concursales", slug: "procedimientos-concursales" },
// ];

// const ServicePage = ({ service }) => {
//   return (
//     <div className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-4 gap-8">
//       {/* Sidebar */}
//       <aside className="md:col-span-1 bg-gray-100 p-6 rounded-lg shadow-md">
//         <h2 className="text-xl font-bold text-blue-900 mb-4">Servicios Jurídicos</h2>
//         <ul>
//           {services.map((s) => (
//             <li key={s.slug} className="mb-2">
//               <Link href={`/services/${s.slug}`} className="text-blue-600 hover:underline">
//                 {s.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="md:col-span-3 bg-white p-8 rounded-lg shadow-md">
//         <h1 className="text-3xl font-bold text-gray-900 mb-4">{service.name}</h1>
//         <p className="text-lg text-gray-700 mb-6">Juicios relacionados con:</p>
//         <ul className="list-disc pl-6 text-gray-700">
//           <li>Validez, Interpretación y Ejecución de Contratos</li>
//           <li>Conflicto entre accionistas y Grupos Societarios</li>
//           <li>Títulos y Operaciones de Crédito</li>
//           <li>Seguros y Fianzas, entre otros</li>
//         </ul>
//       </main>
//     </div>
//   );
// };

// export default ServicePage;
