"use client";

import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "@/components/ui/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "@/components/ui/Footer";
import { MdAddToPhotos, MdDelete } from "react-icons/md";
import NewsAddModal from "@/components/NewsAddModal";
import { RiEdit2Fill } from "react-icons/ri";
import NewsEditModal from "@/components/NewsEditModal";
import NewsDeleteModal from "@/components/NewsDeleteModal";
import { useSession } from "next-auth/react";
import { Dialog, Transition } from "@headlessui/react";
import { FaCheckCircle } from "react-icons/fa";

const News = () => {
  const { data: session, status } = useSession();
  const isAdmin = session?.user?.role === "admin";

  const [news, setNews] = useState([]);
  const [error, setError] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentNews, setCurrentNews] = useState(null);
  const [alert, setAlert] = useState({ show: false, message: "", type: "success" });

  const [loading, setLoading] = useState(false);


  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(`/api/news`);
      const sortedNews = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
      setNews(sortedNews);
    } catch (err) {
      setError("Failed to fetch news");
    } finally {
      setLoading(false);
    }
  };

  const showAlert = (message, type = "success") => {
    setAlert({ show: true, message, type });
    setTimeout(() => setAlert({ show: false, message: "", type: "success" }), 3000);
  };

  const handleAddNews = async (newService) => {
    try {
      const response = await axios.post(`/api/news`, newService);
      fetchNews();
      showAlert("noticia agregado con éxito", "success");
    } catch (err) {
      showAlert("Error al agregar el noticia", "error");
    }
  };
  
  const handleEditNews = async (serviceData) => {
    try {
      const response = await axios.put(`/api/news?id=${serviceData.id}`, serviceData);
      fetchNews();
      showAlert("noticia editado con éxito", "success");
    } catch (err) {
      showAlert("Error al editar el noticia", "error");
    }
  };
  
  const handleDeleteNews = async (id) => {
    setLoading(true); // Activa el loading
    try {
      const response = await axios.delete(`/api/news?id=${id}`);
      console.log("noticia eliminada:", response.data);
      
      fetchNews(); // Recargar lista de news
      
      // Cerrar el modal de confirmación de eliminación
      setIsDeleteModalOpen(false);
      
      // Mostrar alerta de éxito
      showAlert("noticia eliminada con éxito", "success");
    } catch (error) {
      console.error("Error al eliminar la noticia", error);
      
      // Mostrar alerta de error
      showAlert("Error al eliminar la noticia", "error");
    } finally {
      setLoading(false); // Terminar el loading
    }
  };

  
  const handleEditButtonClick = (noticia) => {
    if (!noticia) return; // Asegurarse de que el usuario existe
    setCurrentNews(noticia); // Establecer el usuario a editar
    setIsEditModalOpen(true); // Abrir el modal de edición
  };

  const handleDeleteButtonClick = (noticia) => {
    if (!noticia) return; // Asegurarse de que el usuario existe
    setCurrentNews(noticia); // Establecer el usuario a editar
    setIsDeleteModalOpen(true); // Abrir el modal de edición
  };
  
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out" });
  }, []);

  const getYouTubeThumbnail = (url) => {
    if (!url) return null;
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/;
    const match = url.match(regex);
    if (match && match[1]) {
      return {
        type: "youtube",
        id: match[1],
        thumbnail: `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`,
        url: `https://www.youtube.com/watch?v=${match[1]}`
      };
    }
    return null;
  };

  const getTikTokThumbnail = (url) => {
    if (!url) return null;
    const match = url.match(/tiktok\.com\/@[\w.-]+\/video\/(\d+)/);
    if (match && match[1]) {
      // TikTok NO ofrece miniaturas públicas, pero puedes crear un objeto con el enlace
      return {
        type: "tiktok",
        id: match[1],
        thumbnail: "/img/tiktok-placeholder.jpg", // Imagen genérica (sube una miniatura de TikTok a tu proyecto)
        url: url, // Link original del video
      };
    }
    return null;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div>
        <Navbar />
      </div>
      

      {/* Contenedor principal que ocupa el espacio disponible */}
      <main className="flex-grow">
        {/* <section className="bg-gray-200 text-gray-800 text-center py-4 px-6 pt-28">
          <h1 className="text-2xl lg:text-3xl font-medium tracking-tight text-gray-950 font-bold text-center mb-6" data-aos="fade-up">NOTICIAS DEL CORPORATIVO JURÍDICO</h1>
          <p className="text-lg max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            Mantente informado sobre las últimas novedades y actualizaciones legales de nuestro equipo.
          </p>
        </section> */}

        <section
        id="servicios-encabezado"
        className="servicios-encabezado relative py-8 px-6 pt-32"
      >
        <div className="absolute inset-0 bg-blue-900 opacity-40"></div> {/* Capa oscura */}
        
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <h1 className="text-2xl lg:text-3xl font-bold tracking-tight text-white text-center mb-6" data-aos="fade-up">
            NOTICIAS DEL CORPORATIVO JURÍDICO
          </h1>
          <p className="text-lg max-w-3xl text-gray-300 mx-auto" data-aos="fade-up" data-aos-delay="200">
            Mantente informado sobre las últimas novedades y actualizaciones legales de nuestro equipo.
          </p>
        </div>
      </section>

        {/* Sección de Noticias en Grid */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl lg:text-2xl font-medium tracking-tight text-gray-600">
                ÚLTIMAS NOVEDADES
              </h2>
              {isAdmin && (
                <button 
                  className="flex items-center gap-3 bg-blue-950 text-white text-sm sm:text-md px-4 py-2 rounded-sm hover:bg-blue-900 hover:text-white"
                  onClick={() => setIsAddModalOpen(true)}
                >
                  Agregar noticia
                  <MdAddToPhotos />
                </button>
              )}
            </div>

            {/* Modal */}
            <NewsAddModal
              isOpen={isAddModalOpen} 
              onClose={() => setIsAddModalOpen(false)} 
              onSave={handleAddNews} 
            />

            {isEditModalOpen && currentNews && (
              <NewsEditModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                onSave={handleEditNews}
                noticia={currentNews}
              />
            )}
      
            {isDeleteModalOpen && currentNews && (
              <NewsDeleteModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={() => handleDeleteNews(currentNews?.id)} // Pasar la función al evento de confirmación
                noticia={currentNews}
              />
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((noticia, index) => (
                <div key={index} className="bg-white shadow-md overflow-hidden" data-aos="fade-up">
                  <div className="relative">
                    {(() => {
                      const ytData = getYouTubeThumbnail(noticia.image);
                      const ttData = getTikTokThumbnail(noticia.image);
                      
                      if (ytData) {
                        return (
                          <a href={ytData.url} target="_blank" rel="noopener noreferrer" className="relative block">
                            <img
                              src={ytData.thumbnail}
                              alt="Miniatura de YouTube"
                              className="w-full h-64 object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                              <div className="bg-blue-900 text-white px-4 py-2 rounded flex items-center gap-2 text-sm">
                                ▶ Ver en YouTube
                              </div>
                            </div>
                          </a>
                        );
                      } else if (ttData) {
                        return (
                          <a href={ttData.url} target="_blank" rel="noopener noreferrer" className="relative block">
                            <img
                              src={ttData.thumbnail}
                              alt="Miniatura de TikTok"
                              className="w-full h-64 object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                              <div className="bg-blue-900 text-white px-4 py-2 rounded flex items-center gap-2 text-sm">
                                ▶ Ver en TikTok
                              </div>
                            </div>
                          </a>
                        );
                      } else {
                        return (
                          <img
                            src={noticia.image}
                            alt={noticia.category}
                            className="w-full h-64 object-cover"
                          />
                        );
                      }
                    })()}



                    {/* Fondo azul transparente encima de la imagen */}
                    {/* <div className="absolute inset-0 bg-blue-500 opacity-20"></div> */}
                  </div>
                  
                  {isAdmin && (
                    <div className="absolute top-2 right-2 z-10 flex gap-2">
                      <button  
                        onClick={() => handleEditButtonClick(noticia)}
                        className="p-1 rounded-full bg-white text-blue-500 hover:text-blue-700"
                        title="Editar"
                      >
                        <RiEdit2Fill size={20} />
                      </button>
                      <button  
                        onClick={() => handleDeleteButtonClick(noticia)}
                        className="p-1 rounded-full bg-white text-red-500 hover:text-red-700"
                        title="Eliminar"
                      >
                        <MdDelete size={20} />
                      </button>
                    </div>
                  )}

                  <div className="p-6">
                    <h3 className="text-lg font-medium tracking-tight text-gray-700 mb-2">{noticia.category}</h3>
                    <p className="text-lg max-w-lg text-sm/6 text-gray-600 mb-2">{noticia.title}</p>
                    {/* <p className="text-lg max-w-lg text-sm/6 text-gray-600 mb-2">{noticia.date}</p> */}
                    <p className="text-sm text-gray-500 mb-2">
                      {new Date(noticia.date).toLocaleDateString()}
                    </p>
                    {/* <Link href={`/news/${noticia.slug}`} className="text-blue-800 font-semibold text-sm/6">
                      Leer más →
                    </Link> */}

                    <Link href={`/news/${noticia.title.toLowerCase().replace(/\s+/g, "-")}`} className="text-blue-800 font-semibold text-sm/6">
                      Leer más →
                    </Link>
                  </div>
                </div>
              ))}
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
        </section>
      </main>

      <div>
        <Footer/>
      </div>
    </div>
);

};

export default News;
