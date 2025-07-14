import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import { FaCheckCircle, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { MdAddComment, MdDelete } from "react-icons/md";
import TestimonyDeleteModal from "./TestimonyDeleteModal";
import { Dialog, Transition } from "@headlessui/react";
import TestimonyAddModal from "./TestimonyAddModal";
import TestimonyEditModal from "./TestimonyEditModal";
import { RiEdit2Fill } from "react-icons/ri";
import { useSession } from "next-auth/react";

const TestimoniosPage = () => {
  const { data: session, status } = useSession();
  const isAdmin = session?.user?.role === "admin";

  const [testimonios, setTestimonios] = useState([]);
  const [error, setError] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentTestimony, setCurrentTestimony] = useState(null);
  const [alert, setAlert] = useState({ show: false, message: "", type: "success" });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
      fetchTestimonies();
    }, []);
  
    const fetchTestimonies = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get(`/api/testimonies`);
        setTestimonios(response.data);
      } catch (err) {
        setError("Failed to fetch Testimonies");
      } finally {
        setLoading(false);
      }
    };

  const showAlert = (message, type = "success") => {
    setAlert({ show: true, message, type });
    setTimeout(() => setAlert({ show: false, message: "", type: "success" }), 3000);
  };

  const handleAddTestimonio = async (newTestimonio) => {
    try {
      const response = await axios.post(`/api/testimonies`, newTestimonio);
      fetchTestimonies();
      showAlert("Testimonio agregado con éxito", "success");
    } catch (err) {
      showAlert("Error al agregar Testimonio", "error");
    }
  };

  const handleEditTestimony = async (testimonyData) => {
    try {
      const response = await axios.put(`/api/testimonies?id=${testimonyData.id}`, testimonyData);
      fetchTestimonies();
      showAlert("Testimonio editado con éxito", "success");
    } catch (err) {
      showAlert("Error al editar el testimonio", "error");
    }
  };
  
  const handleDeleteTestimonio = async (id) => {
    setLoading(true); // Activa el loading
    try {
      const response = await axios.delete(`/api/testimonies?id=${id}`);
      console.log("Testimonio eliminado:", response.data);
      
      fetchTestimonies(); // Recargar lista de Testimonios
      
      // Cerrar el modal de confirmación de eliminación
      setIsDeleteModalOpen(false);
      
      // Mostrar alerta de éxito
      showAlert("Testimonio eliminado con éxito", "success");
    } catch (error) {
      console.error("Error al eliminar al testimonio", error);
      
      // Mostrar alerta de error
      showAlert("Error al eliminar al testimonio", "error");
    } finally {
      setLoading(false); // Terminar el loading
    }
  };

  const handleEditButtonClick = (testimonio) => {
    if (!testimonio) return; // Asegurarse de que el usuario existe
    setCurrentTestimony(testimonio); // Establecer el usuario a editar
    setIsEditModalOpen(true); // Abrir el modal de edición
  };

  const handleDeleteButtonClick = (testimonio) => {
    if (!testimonio) return; // Asegurarse de que el usuario existe
    setCurrentTestimony(testimonio); // Establecer el usuario a editar
    setIsDeleteModalOpen(true); // Abrir el modal de edición
  };


  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "40px", // Aumenta el padding para evitar que las tarjetas se peguen
    responsive: [
      {
        breakpoint: 1024, // Tablets y pantallas medianas
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768, // Móviles grandes
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };



  return (
    <section
        id="testimonios"
        className="testimonios-section relative py-16 px-6"
      >
        <div className="absolute inset-0 bg-indigo-950 opacity-60"></div>
        
        <h2 className="text-2xl lg:text-3xl font-medium tracking-tight text-white font-bold text-center mb-4" data-aos="fade-up">
         TESTIMONIOS
       </h2>

       <p className="font-medium text-gray-300 max-w-5xl mx-auto text-center mb-8 px-4" data-aos="fade-up" data-aos-delay="200">
         Nuestros clientes confían en nosotros. Lee sus experiencias y cómo hemos marcado la diferencia en su camino legal.
       </p>

      {isAdmin && (
        <div className="flex justify-end mb-4 relative z-10">
          <button 
            className="relative z-10 flex items-center gap-3 mb-4 bg-white text-blue-900 text-sm sm:text-md px-4 py-2 rounded-sm hover:bg-blue-950 hover:text-white w-auto"
            onClick={() => setIsAddModalOpen(true)}
            >
            Agregar testimonio
            <MdAddComment />
          </button>
        </div>
      )}
      

      {/* Modal */}
      <TestimonyAddModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
        onSave={handleAddTestimonio} 
      />

      {isEditModalOpen && currentTestimony && (
        <TestimonyEditModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onSave={handleEditTestimony}
          testimonio={currentTestimony}
        />
      )}

      {isDeleteModalOpen && currentTestimony && (
        <TestimonyDeleteModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={() => handleDeleteTestimonio(currentTestimony?.id)} // Pasar la función al evento de confirmación
          testimonio={currentTestimony}
        />
      )}
        

       <div className="w-full max-w-6xl mx-auto px-4">
         <Slider {...settings}>
           {testimonios.map((testimonio, index) => (
             <div key={index} className="px-3">
              {/* Ícono de eliminar */}
               <div className="relative p-6 bg-white bg-opacity-85 shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-200 hover:text-white">
                 {isAdmin && (
                  <div className="absolute top-2 right-2 z-10 flex gap-2">
                      <button  
                        onClick={() => handleEditButtonClick(testimonio)}
                        className="p-1 rounded-full bg-white text-blue-500 hover:text-blue-700"
                        title="Editar"
                      >
                        <RiEdit2Fill size={20} />
                      </button>
                      <button  
                        onClick={() => handleDeleteButtonClick(testimonio)}
                        className="p-1 rounded-full bg-white text-red-500 hover:text-red-700"
                        title="Eliminar"
                      >
                        <MdDelete size={20} />
                      </button>
                    </div>
                  )}
                 <div className="text-center mb-4">
                   <img
                     src={testimonio.image || "/img/sinFoto.webp"}
                     alt={testimonio.name}
                     className="w-24 h-24 mx-auto rounded-full object-cover"
                   />
                 </div>
                 <p className="text-sm text-gray-500">{testimonio.date}</p>
                 <h3 className="font-medium text-gray-900 max-w-5xl mx-auto text-center mt-2">{testimonio.name} {testimonio.lastName}</h3>
                 <p className="italic text-gray-600 mt-4">
                  “{testimonio.testimony.trim()}”
                   
                 </p>
               </div>
             </div>
           ))}
         </Slider>
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

  );
};

export default TestimoniosPage;
