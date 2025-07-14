// "use client";

// import React, { useEffect, useState } from "react";
// import { usePathname } from "next/navigation";
// import Navbar from "@/components/ui/Navbar";
// import Image from "next/image";
// import Link from "next/link";
// import { FaArrowLeft } from "react-icons/fa";
// import Footer from "@/components/ui/Footer";

// const NewsDetail = () => {
//   const [mounted, setMounted] = useState(false);
//   const pathname = usePathname();
//   const [newsData, setNewsData] = useState(null);

//   useEffect(() => {
//     setMounted(true);
//     document.documentElement.style.scrollBehavior = "auto"; // Desactiva el desplazamiento suave
//   window.scrollTo(0, 0);
//   }, []);

//   const newsList = [
//     {
//       slug: "visas-aprobadas",
//       category: "Migración",
//       title: "Clientes del Corporativo Alvarado Guzmán & Asociados obtienen la aprobación de sus visas",
//       date: "20 de febrero de 2025",
//       author: "Redacción Alvarado Guzmán & Asociados",
//       content: [
//         {
//           "subtitle": "Éxito en el proceso de solicitud de visas",
//           "text": "Gracias a la asesoría experta del equipo de Alvarado Guzmán & Asociados, varios clientes han logrado la aprobación de sus visas tras un exhaustivo proceso de solicitud. Nuestro equipo ha trabajado diligentemente en cada caso, asegurando que toda la documentación y requisitos fueran presentados de manera impecable."
//         },
//         {
//           "subtitle": "Compromiso con nuestros clientes",
//           "text": "Este logro refuerza nuestro compromiso con la defensa de los derechos de nuestros clientes en materia migratoria. Si necesitas asistencia legal para trámites migratorios, estamos aquí para brindarte el apoyo y la orientación que necesitas. ¡Contáctanos y deja tu caso en manos de expertos!"
//         }
//       ],
//       image: "/img/newsImg/visa1.jpg"
//     },
//     {
//       slug: "trabajando-juntos",
//       category: "Equipo Legal",
//       title: "Alvarado Guzmán & Asociados trabaja junto a Guillermo Crim, perito en criminología y criminalística",
//       date: "05 de septiembre de 2024",
//       author: "Redacción Alvarado Guzmán & Asociados",
//       content: [
//         {
//           subtitle: "Trabajando juntos por la justicia",
//           text: "El corporativo Alvarado Guzmán y Asociados trabaja junto a Guillermo Crim perito en criminología y criminalística, donde se encuentran analizando una carpeta de investigación para uno de sus clientes, quien les ha confiado su defensa."
//         },
//         {
//           subtitle: "Asesoría o representación legal",
//           text: "El compromiso del corporativo es usar todo su conocimiento y experiencia para garantizar una defensa justa y sólida. Si necesitas asesoría o representación legal, no dudes en contactarlos. ¡Estan aquí para defender tus derechos!"
//         }
//       ],
//       image: "/img/newsImg/firma.jpg"
//     },
//   ];

//   useEffect(() => {
//     if (!pathname) return;
//     const slug = pathname.split("/").pop();
//     const newsItem = newsList.find((item) => item.slug === slug);
//     setNewsData(newsItem || null);
//   }, [pathname]);

//   if (!mounted) return null;

//   if (!newsData) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center">
//         <Navbar />
//         <h2 className="text-2xl font-semibold text-red-600">Noticia no encontrada</h2>
//         <Link href="/news">
//           <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800">
//             ← Volver a Noticias
//           </button>
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Navbar />
//       <article className="max-w-7xl mx-auto bg-white p-10 shadow-lg mt-20 rounded-lg grid md:grid-cols-2 gap-10 items-center">
//         {/* Imagen principal */}
//         {newsData.image && (
//           <div className="flex justify-center ">
//             <Image src={newsData.image} width={600} height={400} alt={newsData.title} className="shadow-md" data-aos="fade-right"/>
//           </div>
//         )}

//         {/* Contenido de la noticia */}
//         <div data-aos="fade-left">
//           <p className="text-gray-500 text-sm uppercase">{newsData.category} • {newsData.date}</p>
//           <h1 className="text-2xl lg:text-3xl font-medium tracking-tight text-gray-950 font-bold mb-4 mt-4">{newsData.title}</h1>
//           <p className="text-gray-600 text-md italic mt-1">Por {newsData.author}</p>
//           <div className="mt-6 space-y-6 text-lg leading-relaxed text-gray-800">
//             {newsData.content.map((section, index) => (
//               <section key={index}>
//                 <h2 className="text-xl lg:text-xl font-medium tracking-tight text-gray-700 font-bold mb-4 border-l-4 border-blue-900 pl-4">
//                   {section.subtitle}
//                 </h2>
//                 <p className="text-lg text-sm/6 text-gray-600 mb-2">{section.text}</p>
//               </section>
//             ))}
//           </div>
//         </div>
//       </article>

//       {/* Botón de regreso */}
//       <div className="text-center mt-8 mb-8 px-6">
//         <Link href="/news">
//           <button className="bg-[#181d42] hover:bg-blue-900 text-white py-3 px-6 rounded-lg flex items-center gap-3 transition-transform transform hover:scale-110">
//             <FaArrowLeft /> Volver a Noticias
//           </button>
//         </Link>
//       </div>

//       <div>
//         <Footer/>
//       </div>
//     </div>
//   );
// };

// export default NewsDetail;




"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import Footer from "@/components/ui/Footer";

const NewsDetail = () => {
  const pathname = usePathname();
  const slug = pathname.split("/")[2];
  const [noticia, setNoticias] = useState(null);
  // const [noticiasLocales, setNoticiasLocales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const title = slug.replace(/-/g, " ");

  const getYouTubeVideoId = (url) => {
    const regex = /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };


  const getTikTokVideoId = (url) => {
    const regex = /tiktok\.com\/@[\w.-]+\/video\/(\d+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };



  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`/api/news?title=${title}`);
        if (response.data.length > 0) {
          setNoticias(response.data[0]);
        } else {
          setError("Noticia no encontrada");
        }
      } catch (err) {
        setError("Error al cargar la noticia");
      } finally {
        setLoading(false);
      }
    };

    // const fetchNoticiasLocales = async () => {
    //   try {
    //     const response = await axios.get("/api/services");
    //     setNoticiasLocales(response.data);
    //   } catch (err) {
    //     console.error("Error al cargar los noticias locales", err);
    //   }
    // };

    fetchNews();
    // fetchNoticiasLocales();
  }, [slug]);

  // const noticiasLocales = {
  //   "derecho-familiar": "DERECHO FAMILIAR",
  //   "derecho-penal": "DERECHO PENAL",
  //   "derecho-civil": "DERECHO CIVIL",
  //   "derecho-mercantil": "DERECHO MERCANTIL",
  //   "derecho-administrativo": "DERECHO ADMINISTRATIVO",
  //   "derecho-agrario": "DERECHO AGRARIO",
  //   "amparo": "AMPARO",
  // };

  if (loading) return <p>Cargando...</p>;
  if (error || !noticia) return <h1>{error || "Noticia no disponible"}</h1>;


  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      {/* <article className="max-w-7xl mx-auto bg-white p-10 shadow-lg mt-20 rounded-lg grid md:grid-cols-2 gap-10 items-center"> */}
      {/* <article className="relative max-w-7xl mx-auto bg-white p-6 pt-10 lg:pt-20 mt-10 rounded-lg shadow-lg"> */}
        <article className="max-w-7xl mx-auto bg-white p-6 pt-10 mt-20 rounded-lg shadow-lg text-justify">
        <div className="w-full">
        {/* Imagen principal */}
        {/* <div className="flex justify-center" data-aos="fade-right"> */}
        {/* <div className="w-full lg:w-[40%] lg:absolute lg:top-10 lg:left-10"> */}
        
        {/* <div className="grid lg:grid-cols-[minmax(300px,40%)_1fr] gap-8 items-start">
        <div > */}
        <div className="float-left w-full md:w-1/2 mr-6 mb-4">

          {noticia.image && (() => {
            const youtubeId = getYouTubeVideoId(noticia.image);
            const tiktokId = getTikTokVideoId(noticia.image);
            
            if (youtubeId) {
              return (
                <div className="w-full aspect-video flex justify-center" data-aos="fade-right">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${youtubeId}`}
                    title="YouTube video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="rounded-lg shadow-md"
                  ></iframe>
                </div>
              );
            } else if (tiktokId) {
              return (
                <div className="flex justify-center" data-aos="fade-right">
                  <iframe
                    src={`https://www.tiktok.com/embed/v2/${tiktokId}`}
                    width="325"
                    height="574"
                    allow="encrypted-media; fullscreen"
                    frameBorder="0"
                    className="rounded-lg shadow-md"
                  ></iframe>
                </div>
              );
            } else {
              return (
                <div className="flex justify-center" data-aos="fade-right">
                  <img
                    src={noticia.image}
                    width={600}
                    height={400}
                    alt={noticia.title}
                    className="shadow-md"
                  />
                </div>
              );
            }
          })()}

        </div>

        {/* Contenido de la noticia */}
        {/* <div data-aos="fade-left"> */}
          <p className="text-gray-500 text-sm uppercase mb-1">
            {noticia.category} • {noticia.date}
          </p>
          <h1 className="text-2xl lg:text-3xl font-medium tracking-tight text-gray-950 font-bold mb-4 mt-4">{noticia.title}</h1>
          <p className="text-gray-600 text-md italic mt-1">Por {noticia.author}</p>
          
          <div className="mt-6 space-y-6 text-lg leading-relaxed text-gray-800">
            {noticia.NewsContent.map((section, index) => (
              <section key={index}>
                <h2 className="text-xl lg:text-xl font-medium tracking-tight text-gray-700 font-bold mb-4 border-l-4 border-blue-900 pl-4">
                  {section.subtitle}
                </h2>
                <p className="text-lg text-sm/6 text-gray-600 mb-2">{section.text}</p>
              </section>
            ))}
          </div>

          {/* Limpieza del float para evitar que Footer suba */}
          <div className="clear-both" />
        </div>

        
      </article>

      {/* Botón de regreso */}
      <div className="text-center mt-8 mb-8 px-6">
        <Link href="/news">
          <button className="bg-[#181d42] hover:bg-blue-900 text-white py-3 px-6 rounded-lg flex items-center gap-3 transition-transform transform hover:scale-110">
            <FaArrowLeft /> Volver a Noticias
          </button>
        </Link>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default NewsDetail;
