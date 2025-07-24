// "use client";

// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Navbar from "@/components/ui/Navbar";
// import Footer from "@/components/ui/Footer";

// const abogados = [
//   {
//     id: "alfonso-alvarado",
//     nombre: "Lic. Alfonso Alvarado Guzmán",
//     especialidad: "Derecho Familiar",
//     cedula: "9328307",
//     imagen: "/img/abgAlfonso.jpg",
//     biografia: "Abogado con más de 10 años de experiencia en derecho familiar, especializado en divorcios, pensión alimenticia y custodia de menores. Ha trabajado en casos de alto perfil y brindado asesoramiento jurídico a familias en situaciones complejas.",
//     areasPractica: ["Divorcios", "Pensión Alimenticia", "Guardia y Custodia", "Identidad de Persona"],
//     educacion: ["Licenciatura en Derecho - UNAM", "Especialización en Derecho Familiar - Escuela Libre de Derecho"],
//     membresias: ["Asociación Nacional de Abogados de Familia", "Ilustre y Nacional Colegio de Abogados de México"],
//     idiomas: ["Español", "Inglés"]
//   },
//   {
//     id: "christopher-hernandez",
//     nombre: "Lic. Christopher Hernández Aguilar",
//     especialidad: "Derecho Penal",
//     cedula: "9328307",
//     imagen: "/img/christopher.jpg",
//     biografia: "Especialista en derecho penal con amplia experiencia en defensa penal y asesoramiento jurídico en casos de delitos financieros y criminales. Ha representado clientes en juicios orales y litigios complejos.",
//     areasPractica: ["Defensa Penal", "Juicio Oral Penal", "Asesoramiento en Delitos Financieros"],
//     educacion: ["Licenciatura en Derecho - ITAM", "Maestría en Derecho Penal - Universidad Panamericana"],
//     membresias: ["Asociación Mexicana de Derecho Penal", "Barra Mexicana de Abogados"],
//     idiomas: ["Español", "Francés", "Inglés"]
//   },
//   {
//     id: "esteban-romero",
//     nombre: "Lic. Esteban Romero Navarro",
//     especialidad: "Derecho Civil",
//     cedula: "9328307",
//     imagen: "/img/esteban.jpg",
//     biografia: "Con más de 10 años de experiencia en litigios civiles y contratos, ha asesorado a empresas y particulares en disputas legales y procesos de recuperación de inmuebles.",
//     areasPractica: ["Contratos", "Juicio de Responsabilidad Civil", "Recuperación de Inmuebles"],
//     educacion: ["Licenciatura en Derecho - Universidad Iberoamericana", "Especialización en Derecho Civil - Universidad Anáhuac"],
//     membresias: ["Cámara Nacional de Abogados", "Consejo Mexicano de Derecho Civil"],
//     idiomas: ["Español", "Inglés"]
//   }
// ];

// export default function PerfilAbogado() {
//   const { id } = useParams();
//   const [abogado, setAbogado] = useState(null);

//   useEffect(() => {
//     AOS.init({ duration: 1000 });

//     const encontrado = abogados.find((a) => a.id === id);
//     setAbogado(encontrado);
//   }, [id]);

//   if (!abogado) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <h2 className="text-2xl text-gray-600">Abogado no encontrado</h2>
//       </div>
//     );
//   }

//   return (
//     <div className="perfil-abogado relative z-0 bg-gray-100">
//       <Navbar />

//       {/* Contenido principal */}
//       <div className="relative z-10 text-gray-800 pt-24 pb-16">
//         <div className="container mx-auto px-6">
          
//           {/* Header con imagen y datos básicos */}
//           <div className="flex flex-col md:flex-row items-center bg-white shadow-xl rounded-lg overflow-hidden p-8" data-aos="fade-up">
            
//             {/* Imagen del abogado */}
//             <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
//               <img
//                 src={abogado.imagen}
//                 alt={abogado.nombre}
//                 className="w-full h-full object-cover rounded-lg shadow-md"
//               />
//             </div>

//             {/* Información básica */}
//             <div className="md:ml-10 mt-6 md:mt-0 text-center md:text-left">
//               <h1 className="text-3xl font-extrabold text-gray-700">{abogado.nombre}</h1>
//               <p className="text-lg text-gray-600 mt-2">{abogado.especialidad}</p>
//               <p className="text-gray-500 text-sm mt-1">Cédula Profesional: {abogado.cedula}</p>
//             </div>

//           </div>

//           {/* Biografía */}
//           <div className="mt-10 bg-white shadow-lg p-6 rounded-lg" data-aos="fade-up">
//             <h2 className="text-xl font-bold text-gray-700">Biografía</h2>
//             <p className="text-gray-600 mt-2">{abogado.biografia}</p>
//           </div>

//           {/* Secciones con datos adicionales */}
//           <div className="grid md:grid-cols-2 gap-8 mt-10">
            
//             {/* Áreas de práctica */}
//             <div className="bg-white shadow-lg p-6 rounded-lg" data-aos="fade-up">
//               <h2 className="text-xl font-bold text-gray-700">Áreas de Práctica</h2>
//               <ul className="list-disc pl-5 text-gray-600 mt-2">
//                 {abogado.areasPractica.map((area, index) => (
//                   <li key={index}>{area}</li>
//                 ))}
//               </ul>
//             </div>

//             {/* Educación */}
//             <div className="bg-white shadow-lg p-6 rounded-lg" data-aos="fade-up">
//               <h2 className="text-xl font-bold text-gray-700">Educación</h2>
//               <ul className="list-disc pl-5 text-gray-600 mt-2">
//                 {abogado.educacion.map((edu, index) => (
//                   <li key={index}>{edu}</li>
//                 ))}
//               </ul>
//             </div>

//             {/* Afiliaciones y Membresías */}
//             <div className="bg-white shadow-lg p-6 rounded-lg" data-aos="fade-up">
//               <h2 className="text-xl font-bold text-gray-700">Afiliaciones y Membresías</h2>
//               <ul className="list-disc pl-5 text-gray-600 mt-2">
//                 {abogado.membresias.map((membresia, index) => (
//                   <li key={index}>{membresia}</li>
//                 ))}
//               </ul>
//             </div>

//             {/* Idiomas */}
//             <div className="bg-white shadow-lg p-6 rounded-lg" data-aos="fade-up">
//               <h2 className="text-xl font-bold text-gray-700">Idiomas</h2>
//               <ul className="list-disc pl-5 text-gray-600 mt-2">
//                 {abogado.idiomas.map((idioma, index) => (
//                   <li key={index}>{idioma}</li>
//                 ))}
//               </ul>
//             </div>

//           </div>
//         </div>
//       </div>

//       <div>
//         <Footer/>
//       </div>
//     </div>
//   );
// }






// "use client";

// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Navbar from "@/components/ui/Navbar";
// import Footer from "@/components/ui/Footer";

// const abogados = [
//   {
//     id: "alfonso-alvarado",
//     nombre: "Lic. Alfonso Alvarado Guzmán",
//     especialidad: "Derecho Penal",
//     cedula: "9328307",
//     imagen: "/img/sinFoto.webp",
//     email: "alfonso@example.com",
//     telefono: "(52) 55 5488 6100",
//     experiencia: "Alfonso Alvarado Guzmán es un abogado con más de 10 años de experiencia en el ejercicio del derecho, especializado en derecho civil, mercantil y penal. A lo largo de su trayectoria, ha representado con éxito a clientes en litigios complejos, brindando asesoría estratégica y soluciones jurídicas eficaces tanto a particulares como a empresas.  Su profundo conocimiento del marco legal le ha permitido destacarse en la resolución de conflictos, negociación de acuerdos y defensa de los intereses de sus representados ante diversas instancias judiciales. Además, cuenta con amplia experiencia en la elaboración y revisión de contratos, así como en la gestión de procesos administrativos y regulatorios.",
//     certificaciones: 
//     [
//       "Premio al Mejor Abogado en Derecho Familiar 2023"
//     ],
//     educacion: 
//     [
//       "Licenciatura en Derecho - UNAM", 
//       "Especialización en Derecho Familiar - Escuela Libre de Derecho"
//     ],
//     idiomas: 
//     [
//       "Español"
//     ],
//   },
//   {
//     id: "christopher-hernandez",
//     nombre: "Lic. Christopher Hernández Aguilar",
//     especialidad: "Derecho Penal",
//     cedula: "9328307",
//     imagen: "/img/sinFoto.webp",
//     email: "christopher@example.com",
//     telefono: "(52) 55 5488 6100",
//     experiencia: "Christopher Hernández Aguilar es un abogado con más de 5 años de experiencia en el ejercicio del derecho, especializado en derecho civil, mercantil y penal. A lo largo de su trayectoria, ha representado con éxito a clientes en litigios complejos, brindando asesoría estratégica y soluciones jurídicas eficaces tanto a particulares como a empresas.  Su profundo conocimiento del marco legal le ha permitido destacarse en la resolución de conflictos, negociación de acuerdos y defensa de los intereses de sus representados ante diversas instancias judiciales. Además, cuenta con amplia experiencia en la elaboración y revisión de contratos, así como en la gestión de procesos administrativos y regulatorios.",
//     certificaciones: 
//     [
//       "Premio al Mejor Abogado en Derecho Familiar 2023"
//     ],
//     educacion: 
//     [
//       "Licenciatura en Derecho - UNAM", 
//       "Especialización en Derecho Familiar - Escuela Libre de Derecho"
//     ],
//     idiomas: 
//     [
//       "Español"
//     ],
//   },
// ];

// export default function PerfilAbogado() {
//   const { id } = useParams();
//   const [abogado, setAbogado] = useState(null);


//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//     const encontrado = abogados.find((a) => a.id === id);
//     setAbogado(encontrado);
//   }, [id]);

//   if (!abogado) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <h2 className="text-2xl text-gray-600">Abogado no encontrado</h2>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Navbar />



//       <div className="bg-gray-50 py-24 sm:py-24">
//         <div className="mx-auto max-w-2xl px-3 lg:max-w-7xl lg:px-2">
//           <div className="mt-4 grid gap-1 sm:mt-4 lg:grid-cols-[1fr_1.5fr_1fr] lg:grid-rows-1">
            
//             {/* Primera columna (izquierda) */}
//             <div className="relative">
//               <div className="absolute inset-px  bg-white lg:rounded-l-[2rem]"></div>
//               <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)] px-8 pt-8 pb-8 sm:px-10 sm:pt-10 sm:pb-12">
//                 <div className="mb-4" >
//                   <img src={abogado.imagen} alt={abogado.nombre} className="w-full" data-aos="fade-up" />
//                 </div>
//                 <div className="text-center">
//                   <h1 className="text-lg font-medium tracking-tight text-gray-950 max-lg:text-center" data-aos="fade-up">{abogado.nombre}</h1>
//                   <div className="flex justify-center">
//                     <img src="/img/lineaFinal.png" className="h-8 w-auto" alt="Línea decorativa" data-aos="fade-up"/>
//                   </div>
//                   <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center" data-aos="fade-up">{abogado.especialidad}</p>
//                   <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center" data-aos="fade-up">Cédula: {abogado.cedula}</p>
//                   <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center" data-aos="fade-up">{abogado.email}</p>
//                   <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center" data-aos="fade-up">{abogado.telefono}</p>
//                 </div>
//               </div>
//               <div className="pointer-events-none absolute inset-px  ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
//             </div>

//             {/* Segunda columna (centro, más grande) */}
//             <div className="relative">
//               <div className="absolute inset-px  bg-white"></div>
//               <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-8">
//                 <div>
//                   <p className="mt-2 text-1xl font-medium tracking-tight text-gray-950 text-justify" data-aos="fade-right">
//                     EXPERIENCIA
//                   </p>
//                   <p className="mt-2 max-w-lg text-sm/6 text-gray-600 text-justify" data-aos="fade-up">
//                     {abogado.experiencia}
//                   </p>
//                 </div>
                
//                 <div className="mt-2">
//                   <p className="mt-2 text-1xl font-medium tracking-tight text-gray-950 text-justify" data-aos="fade-right">
//                     CERTIFICACIONES
//                   </p>
//                   <ul className="mt-2 max-w-lg text-sm/6 text-gray-600 text-justify list-disc pl-5" data-aos="fade-up">
//                     {abogado.certificaciones.map((item, index) => (
//                       <li key={index}>{item}</li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="mt-2">
//                   <p className="mt-2 text-1xl font-medium tracking-tight text-gray-950 text-justify" data-aos="fade-right">
//                     EDUCACIÓN
//                   </p>
//                   <ul className="mt-2 max-w-lg text-sm/6 text-gray-600 text-justify list-disc pl-5" data-aos="fade-up">
//                     {abogado.educacion.map((item, index) => (
//                       <li key={index}>{item}</li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="mt-2">
//                   <p className="mt-2 text-1xl font-medium tracking-tight text-gray-950 text-justify" data-aos="fade-right">
//                     IDIOMAS
//                   </p>
//                   <ul className="mt-2 max-w-lg text-sm/6 text-gray-600 text-justify list-disc pl-5" data-aos="fade-up">
//                     {abogado.idiomas.map((item, index) => (
//                       <li key={index}>{item}</li>
//                     ))}
//                   </ul>
//                 </div>
                
//               </div>
              
              
//               <div className="pointer-events-none absolute inset-px  ring-1 shadow-sm ring-black/5"></div>
//             </div>

//             {/* Tercera columna (derecha) */}
//             <div className="relative">
//               <div className="absolute inset-px  bg-white lg:rounded-r-[2rem]"></div>
//               <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-r-[calc(2rem+1px)] px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-8">
//                 <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center" data-aos="fade-left">
//                   ABOGADOS
//                 </p>
//                 <ul className="mt-4 space-y-2">
//                   {abogados
//                     .filter((a) => a.id !== id) // Excluir al abogado actual
//                     .map((abogado) => (
//                       <li key={abogado.id}>
//                         <a
//                           href={`/team/${abogado.id}`} // Enlace directo a la página del abogado
//                           className="text-blue-900 hover:text-blue-700 transition-colors"
                          
//                         >
//                           <span aria-hidden="true" data-aos="fade-left">&rarr;</span> {abogado.nombre}
//                         </a>
//                       </li>
//                     ))}
//                 </ul>
//               </div>
//               <div className="pointer-events-none absolute inset-px  ring-1 shadow-sm ring-black/5 lg:rounded-r-[2rem]"></div>
//             </div>

//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }












// "use client";

// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Navbar from "@/components/ui/Navbar";
// import Footer from "@/components/ui/Footer";
// import { MdEdit } from "react-icons/md";

// export default function PerfilAbogado() {
//   const { id } = useParams();
//   const [abogado, setAbogado] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [otrosAbogados, setOtrosAbogados] = useState([]);

//   // Dentro del componente principal
//   const [editExperience, setEditExperience] = useState(false);
//   const [editedExperience, setEditedExperience] = useState(""); // inicializa vacío


//     // Cargar datos en experience cuando abogado esté disponible
//   useEffect(() => {
//     if (abogado && abogado.experience) {
//       setEditedExperience(abogado.experience);
//     }
//   }, [abogado]);


//   useEffect(() => {

//     AOS.init({ duration: 1000 });

//     async function fetchAbogado() {
//       try {

//         console.log("ID del abogado recibido:", id);

//         const response = await axios.get(`/api/teams?id=${id}`); // Asegura que el ID se pase como query param
//         console.log("Respuesta de la API:", response.data); // Ver qué devuelve la API
//         setAbogado(response.data);
//       } catch (err) {
//         console.error("Error al obtener abogado:", err.response?.data || err.message);
//         setError("No se encontró el abogado");
//       } finally {
//         setLoading(false);
//       }
//     }
    

//     if (id) fetchAbogado();
//   }, [id]);

//   useEffect(() => {
//     async function fetchOtrosAbogados() {
//       try {
//         const response = await axios.get("/api/teams"); // Esto debería devolver todos
//         setOtrosAbogados(response.data);
//       } catch (err) {
//         console.error("Error al cargar otros abogados:", err.response?.data || err.message);
//       }
//     }
  
//     fetchOtrosAbogados();
//   }, []);
  

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <h2 className="text-2xl text-gray-600">Cargando...</h2>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <h2 className="text-2xl text-red-600">{error}</h2>
//       </div>
//     );
//   }

//   if (!abogado) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <h2 className="text-2xl text-gray-600">Abogado no encontrado</h2>
//       </div>
//     );
//   }

//   const actualizarExperiencia = async () => {
//     if (!abogado?.id) return alert("ID del abogado no disponible");
  
//     try {
//       const response = await fetch(`/api/team?id=${abogado.id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ experience: editedExperience }),
//       });
  
//       const data = await response.json();
  
//       if (!response.ok) throw new Error(data.message || "Error al actualizar");
  
//       // Actualiza la interfaz
//       setEditExperience(false);
//       // Opcional: puedes recargar los datos del abogado si lo necesitas
//       alert("Experiencia actualizada correctamente");
//     } catch (error) {
//       console.error("Error al actualizar experiencia:", error);
//       alert("Hubo un error al actualizar la experiencia");
//     }
//   };
  

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Navbar />

//       <div className="bg-gray-50 py-24 sm:py-24">
//         <div className="mx-auto max-w-2xl px-3 lg:max-w-7xl lg:px-2">
//           <div className="mt-4 grid gap-1 sm:mt-4 lg:grid-cols-[1fr_1.5fr_1fr] lg:grid-rows-1">
            
//             {/* Primera columna (izquierda) */}
//             <div className="relative">
//               <div className="absolute inset-px bg-white lg:rounded-l-[2rem]"></div>
//               <div className="relative flex h-full flex-col overflow-hidden rounded-lg lg:rounded-l-[2rem] px-8 pt-8 pb-8 sm:px-10 sm:pt-10 sm:pb-12">
//                 <div className="mb-4">
//                   <img src={abogado.image || "/img/sinFoto.webp"} alt={abogado.name} className="w-full" data-aos="fade-up" />
//                 </div>
//                 <div className="text-center">
//                   <h1 className="text-lg font-medium tracking-tight text-gray-950" data-aos="fade-up">{abogado.name} {abogado.lastName}</h1>
//                   <p className="mt-2 text-sm text-gray-600" data-aos="fade-up">{abogado.specialty}</p>
//                   <p className="mt-2 text-sm text-gray-600" data-aos="fade-up">{abogado.email}</p>
//                   <p className="mt-2 text-sm text-gray-600" data-aos="fade-up">{abogado.phone}</p>
//                 </div>
//               </div>
//             </div>

//             {/* Segunda columna (centro, más grande) */}
//             <div className="relative">
//               <div className="absolute inset-px bg-white"></div>
//               <div className="relative flex h-full flex-col overflow-hidden rounded-lg px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-8">
  
//               <div>
//   {/* Título y botón de edición */}
//   <div className="flex justify-between items-center">
//     <p className="text-1xl font-medium tracking-tight text-gray-950 text-justify" data-aos="fade-right">
//       EXPERIENCIA
//     </p>
//     <button onClick={() => setEditExperience(!editExperience)}>
//       <MdEdit size={16} className="text-gray-600 hover:text-black" />
//     </button>
//   </div>

//   {/* Contenido editable o vista normal */}
//   {editExperience ? (
//     <div>
//       <textarea
//         className="border rounded p-2 w-full"
//         value={editedExperience}
//         onChange={(e) => setEditedExperience(e.target.value)}
//       />
//       <div className="flex space-x-2 mt-2">
//         <button
//           className="bg-green-500 text-white px-3 py-1 rounded"
//           onClick={actualizarExperiencia}
//         >
//           Guardar
//         </button>
//         <button
//           className="bg-gray-500 text-white px-3 py-1 rounded"
//           onClick={() => {
//             setEditedExperience(abogado.experience); // restaurar experiencia original
//             setEditExperience(false); // salir del modo edición
//           }}
//         >
//           Cancelar
//         </button>
//       </div>
//     </div>
//   ) : (
//     <p className="mt-2">{abogado?.experience || "Sin experiencia registrada"}</p>
//   )}
// </div>



//                 <div className="mt-2">
//                   <p className="mt-2 text-1xl font-medium tracking-tight text-gray-950 text-justify" data-aos="fade-right">EDUCACIÓN</p>
//                   <ul className="mt-2 text-sm text-gray-600 list-disc pl-5" data-aos="fade-up">
//                     <li>{`${abogado.education} | ${abogado.career}`}</li>
//                   </ul>
                  
//                 </div>

//                 <div className="mt-2">
//                 <p className="mt-2 text-1xl font-medium tracking-tight text-gray-950 text-justify" data-aos="fade-right">IDIOMAS</p>
//                   <ul className="mt-2 text-sm text-gray-600 list-disc pl-5" data-aos="fade-up">
//                     {abogado.languages?.split(",").map((lang, index) => (
//                       <li key={index}>{lang.trim()}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>

//             {/* Tercera columna (otros abogados) */}
//             {/* <div className="relative">
//               <div className="absolute inset-px bg-white lg:rounded-r-[2rem]"></div>
//               <div className="relative flex h-full flex-col overflow-hidden rounded-lg lg:rounded-r-[2rem] px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-8">
//                 <p className="mt-2 text-lg font-medium tracking-tight text-gray-950" data-aos="fade-left">ABOGADOS</p>
//                 <ul className="mt-4 space-y-2">
//                   <li>
//                     <a href="/team" className="text-blue-900 hover:text-blue-700 transition-colors">
//                       <span aria-hidden="true" data-aos="fade-left">&rarr;</span> Ver todos los abogados
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div> */}

//             {/* Tercera columna (derecha) */}
//              {/* <div className="relative">
//                <div className="absolute inset-px  bg-white lg:rounded-r-[2rem]"></div>
//                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-r-[calc(2rem+1px)] px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-8">
//                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center" data-aos="fade-left">
//                    ABOGADOS
//                  </p>
//                  <ul className="mt-4 space-y-2">
//                    {abogados
//                      .filter((a) => a.id !== id) // Excluir al abogado actual
//                      .map((abogado) => (
//                        <li key={abogado.id}>
//                          <a
//                            href={`/team/${abogado.id}`} // Enlace directo a la página del abogado
//                            className="text-blue-900 hover:text-blue-700 transition-colors"
                          
//                          >
//                            <span aria-hidden="true" data-aos="fade-left">&rarr;</span> {abogado.nombre}
//                          </a>
//                        </li>
//                      ))}
//                  </ul>
//                </div>
//                <div className="pointer-events-none absolute inset-px  ring-1 shadow-sm ring-black/5 lg:rounded-r-[2rem]"></div>
//              </div> */}

            
//             {/* Tercera columna (otros abogados) */}
//             <div className="relative">
//               <div className="absolute inset-px bg-white lg:rounded-r-[2rem]"></div>
//               <div className="relative flex h-full flex-col overflow-hidden rounded-lg lg:rounded-r-[2rem] px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-8">
//                 <p className="mt-2 text-1xl font-medium tracking-tight text-gray-950 text-justify" data-aos="fade-right">
//                   ABOGADOS
//                 </p>
//                 <ul className="mt-4 space-y-2">
//                   {otrosAbogados
//                     .filter((a) => a.id != id) // Asegúrate de que `id` sea del mismo tipo que `a.id`
//                     .map((a) => (
//                       <li key={a.id}>
//                         <a
//                           href={`/team/${a.id}`}
//                           className="text-blue-900 hover:text-blue-700 transition-colors"
//                         >
//                           <span aria-hidden="true" data-aos="fade-left">&rarr;</span> {a.name} {a.lastName}
//                         </a>
//                       </li>
//                     ))}
//                 </ul>
//               </div>
//               <div className="pointer-events-none absolute inset-px ring-1 shadow-sm ring-black/5 lg:rounded-r-[2rem]"></div>
//             </div>


//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }









"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { MdEdit } from "react-icons/md";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useSession } from "next-auth/react";

export default function PerfilAbogado() {
  const { data: session } = useSession();
  const isAdmin = session?.user?.role === "admin";

  const { id } = useParams();
  const [abogado, setAbogado] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [otrosAbogados, setOtrosAbogados] = useState([]);
  const [alert, setAlert] = useState({ show: false, message: "", type: "success" });
  

  const [editInfo, setEditInfo] = useState(false);
  const [editedInfo, setEditedInfo] = useState({
    name: "",
    lastName: "",
    specialty: "",
    email: "",
    phone: "",
  });

  const [editExperience, setEditExperience] = useState(false);
  const [editedExperience, setEditedExperience] = useState("");

  const [editEducation, setEditEducation] = useState(false);
  const [editedEducation, setEditedEducation] = useState({
    education: "",
    career: "",
  });

  const [editLanguages, setEditLanguages] = useState(false);
  const [editedLanguages, setEditedLanguages] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000 });

    async function fetchAbogado() {
      try {
        const response = await axios.get(`/api/teams?id=${id}`);
        setAbogado(response.data);
      } catch (err) {
        setError("No se encontró el abogado");
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchAbogado();
  }, [id]);

  useEffect(() => {
    async function fetchOtrosAbogados() {
      try {
        const response = await axios.get("/api/teams");
        setOtrosAbogados(response.data);
      } catch (err) {
        console.error("Error al cargar otros abogados");
      }
    }

    fetchOtrosAbogados();
  }, []);

  useEffect(() => {
    if (abogado) {
      setEditedInfo({
        name: abogado.name,
        lastName: abogado.lastName,
        specialty: abogado.specialty,
        email: abogado.email,
        phone: abogado.phone,
      });
      setEditedExperience(abogado.experience || "");
      setEditedEducation({
        education: abogado.education || "",
        career: abogado.career || "",
      });
      setEditedLanguages(abogado.languages || "");
    }
  }, [abogado]);

  const showAlert = (message, type = "success") => {
    setAlert({ show: true, message, type });
    setTimeout(() => setAlert({ show: false, message: "", type: "success" }), 3000);
  };

  const actualizarInfo = async () => {
    try {
      const response = await fetch(`/api/teams?id=${abogado.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editedInfo),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);

      setAbogado({ ...abogado, ...editedInfo });
      setEditInfo(false);
      showAlert("Información modificada con éxito", "success");
    } catch (error) {
      alert("Error al actualizar la información personal");
    }
  };

  const actualizarCampo = async (campo, valor) => {
    try {
      const response = await fetch(`/api/teams?id=${abogado.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [campo]: valor }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      setAbogado((prev) => ({ ...prev, [campo]: valor }));
      showAlert("Información modificada con éxito", "success");
    } catch (error) {
      alert("Error al actualizar el campo " + campo);
    }
  };

  if (loading) return <div className="flex justify-center items-center h-screen">Cargando...</div>;
  if (error) return <div className="flex justify-center items-center h-screen">{error}</div>;

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-2 grid gap-1 lg:grid-cols-[1fr_1.5fr_1fr]">
          {/* Columna izquierda */}
          <div className="relative bg-white rounded-l-[2rem] p-10">
            <div className="mb-4">
              <img src={abogado.image || "/img/sinFoto.webp"} alt="" className="w-full" data-aos="fade-up" />
            </div>

            {!editInfo ? (
              <div className="text-center">
                <h1 className="text-lg font-medium text-gray-950" data-aos="fade-up">
                  {abogado.name} {abogado.lastName}
                </h1>
                <p className="text-sm text-gray-600" data-aos="fade-up">{abogado.specialty}</p>
                <p className="text-sm text-gray-600" data-aos="fade-up">{abogado.email}</p>
                <p className="text-sm text-gray-600" data-aos="fade-up">{abogado.phone}</p>
                
                {isAdmin && (
                  <button onClick={() => setEditInfo(true)} className="mt-2 text-blue-600 hover:text-black">
                    <MdEdit size={18} />
                  </button>
                )}
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <input placeholder="Nombre" value={editedInfo.name} onChange={(e) => setEditedInfo({ ...editedInfo, name: e.target.value })} className="border p-1 rounded" />
                <input placeholder="Apellidos" value={editedInfo.lastName} onChange={(e) => setEditedInfo({ ...editedInfo, lastName: e.target.value })} className="border p-1 rounded" />
                <input placeholder="Especialidad" value={editedInfo.specialty} onChange={(e) => setEditedInfo({ ...editedInfo, specialty: e.target.value })} className="border p-1 rounded" />
                <input placeholder="Correo electrónico" value={editedInfo.email} onChange={(e) => setEditedInfo({ ...editedInfo, email: e.target.value })} className="border p-1 rounded" />
                <input placeholder="Teléfono" value={editedInfo.phone} onChange={(e) => setEditedInfo({ ...editedInfo, phone: e.target.value })} className="border p-1 rounded" />
                <div className="flex gap-2 mt-2">
                  <button className="bg-blue-900 text-white px-3 py-1 rounded" onClick={actualizarInfo}>Guardar</button>
                  <button className="border px-3 py-1 rounded" onClick={() => setEditInfo(false)}>Cancelar</button>
                </div>
              </div>
            )}
          </div>

          {/* Columna central */}
          <div className="relative bg-white p-10">
            {/* Experiencia */}
            <div>
              <div className="flex justify-between items-center">
                <p className="text-1xl font-medium text-gray-950">EXPERIENCIA</p>
               
                {isAdmin && (
                  <button onClick={() => setEditExperience(!editExperience)}><MdEdit size={16} className="text-blue-600 hover:text-black" /></button>
                )}
              </div>
              {editExperience ? (
                <div>
                  <textarea value={editedExperience} onChange={(e) => setEditedExperience(e.target.value)} className="border p-2 w-full rounded" />
                  <div className="flex gap-2 mt-2">
                    <button className="bg-blue-900 text-white px-3 py-1 rounded" onClick={() => { actualizarCampo("experience", editedExperience); setEditExperience(false); }}>Guardar</button>
                    <button className="border px-3 py-1 rounded" onClick={() => { setEditedExperience(abogado.experience); setEditExperience(false); }}>Cancelar</button>
                  </div>
                </div>
              ) : <p className="mt-2 text-sm text-gray-600">{abogado.experience || "Sin experiencia"}</p>}
            </div>

            {/* Educación */}
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <p className="text-1xl font-medium text-gray-950">EDUCACIÓN</p>
                {isAdmin && (
                  <button onClick={() => setEditEducation(!editEducation)}><MdEdit size={16} className="text-blue-600 hover:text-black" /></button>
                )}
              </div>
              {editEducation ? (
                <div className="flex flex-col gap-2">
                  <input value={editedEducation.education} onChange={(e) => setEditedEducation({ ...editedEducation, education: e.target.value })} className="border p-1 rounded" />
                  <input value={editedEducation.career} onChange={(e) => setEditedEducation({ ...editedEducation, career: e.target.value })} className="border p-1 rounded" />
                  <div className="flex gap-2 mt-2">
                    <button className="bg-blue-900 text-white px-3 py-1 rounded" onClick={() => { actualizarCampo("education", editedEducation.education); actualizarCampo("career", editedEducation.career); setEditEducation(false); }}>Guardar</button>
                    <button className="border px-3 py-1 rounded" onClick={() => { setEditedEducation({ education: abogado.education, career: abogado.career }); setEditEducation(false); }}>Cancelar</button>
                  </div>
                </div>
              ) : <p className="mt-2 text-sm text-gray-600">{`${abogado.education} | ${abogado.career}`}</p>}
            </div>

            {/* Idiomas */}
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <p className="text-1xl font-medium text-gray-950">IDIOMAS</p>
               
                {isAdmin && (
                  <button onClick={() => setEditLanguages(!editLanguages)}><MdEdit size={16} className="text-blue-600 hover:text-black" /></button>
                )}
              </div>
              {editLanguages ? (
                <div>
                  <input value={editedLanguages} onChange={(e) => setEditedLanguages(e.target.value)} className="border p-1 rounded w-full" />
                  <div className="flex gap-2 mt-2">
                    <button className="bg-blue-900 text-white px-3 py-1 rounded" onClick={() => { actualizarCampo("languages", editedLanguages); setEditLanguages(false); }}>Guardar</button>
                    <button className="border px-3 py-1 rounded" onClick={() => { setEditedLanguages(abogado.languages); setEditLanguages(false); }}>Cancelar</button>
                  </div>
                </div>
              ) : (
                <ul className="mt-2 text-sm text-gray-600 list-disc pl-5">
                  {abogado.languages?.split(",").map((lang, idx) => <li key={idx}>{lang.trim()}</li>)}
                </ul>
              )}
            </div>
          </div>

          {/* Columna derecha */}
          <div className="relative bg-white rounded-r-[2rem] p-10">
            <p className="text-1xl font-medium text-gray-950">ABOGADOS</p>
            <ul className="mt-4 space-y-2">
              {otrosAbogados.filter((a) => a.id != id).map((a) => (
                <li key={a.id}>
                  <a href={`/team/${a.id}`} className="text-blue-900 hover:text-blue-700">
                    <span aria-hidden="true">&rarr;</span> {a.name} {a.lastName}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Transition show={alert.show} as={Fragment}>
        <Dialog onClose={() => setAlert({ ...alert, show: false })} className="fixed bottom-5 right-5 z-50">
          <Transition.Child as={Fragment} enter="transition ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="transition ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
            <div className={`p-4 rounded-md text-white flex items-center gap-2 ${alert.type === "success" ? "bg-green-500" : "bg-red-500"}`}>
              {alert.message} <FaCheckCircle />
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>

      <Footer />
    </div>
  );
}



