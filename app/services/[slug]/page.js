// import { useRouter } from "next/router";
// import ServicePage from "../../components/ServicePage";


// const services = [
//   { name: "Litigio Mercantil", slug: "litigio-mercantil" },
//   { name: "Litigio Civil", slug: "litigio-civil" },
//   { name: "Litigio Administrativo", slug: "litigio-administrativo" },
//   { name: "Litigio Familiar", slug: "litigio-familiar" },
//   { name: "Mecanismos Alternativos de Solución de Controversias", slug: "mecanismos-alternativos" },
//   { name: "Procedimientos Concursales", slug: "procedimientos-concursales" },
// ];

// const ServiceDetail = () => {
//   const router = useRouter();
//   const { slug } = router.query;

//   // 🔴 Evita buscar datos si el slug aún no está disponible
//   if (!slug) {
//     return <p className="text-center text-gray-500">Cargando...</p>;
//   }

//   const service = services.find((s) => s.slug === slug);

//   // 🔴 Si el servicio no se encuentra, muestra un mensaje de error
//   if (!service) {
//     return <p className="text-center text-red-500">Servicio no encontrado</p>;
//   }

//   return <ServicePage service={service} />;
// };

// export default ServiceDetail;



// import { useRouter } from "next/router";

// const ServicioDetalle = () => {
//   const router = useRouter();
//   const { slug } = router.query;

//   const servicios = {
//     "derecho-familiar": { titulo: "Derecho Familiar", descripcion: "Descripción de Derecho Familiar" },
//     "derecho-penal": { titulo: "Derecho Penal", descripcion: "Descripción de Derecho Penal" },
//     "derecho-civil": { titulo: "Derecho Civil", descripcion: "Descripción de Derecho Civil" },
//     "derecho-mercantil": { titulo: "Derecho Mercantil", descripcion: "Descripción de Derecho Mercantil" },
//     "derecho-administrativo": { titulo: "Derecho Administrativo", descripcion: "Descripción de Derecho Administrativo" },
//     "derecho-agrario": { titulo: "Derecho Agrario", descripcion: "Descripción de Derecho Agrario" },
//     "amparo": { titulo: "Amparo", descripcion: "Descripción de Amparo" },
//   };

//   const servicio = servicios[slug];

//   if (!servicio) {
//     return <p className="text-center text-red-600">Servicio no encontrado</p>;
//   }

//   return (
//     <section className="p-8">
//       <h1 className="text-3xl font-bold text-blue-900">{servicio.titulo}</h1>
//       <p className="text-lg mt-4">{servicio.descripcion}</p>
//     </section>
//   );
// };

// export default ServicioDetalle;

// pages/services/[slug].js

import ServiceDetail from "@/components/ServiceDetail";

export default function ServicePage() {
  return (
    <div>
      <ServiceDetail />
    </div>
  );
}
