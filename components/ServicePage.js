
import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { MdAddComment, MdAddToPhotos, MdDelete } from "react-icons/md";
import ServiceAddModal from "./ServiceAddModal";
import { Dialog, Transition } from "@headlessui/react";
import { RiEdit2Fill } from "react-icons/ri";
import ServiceEditModal from "./ServiceEditModal";
import ServiceDeleteModal from "./ServiceDeleteModal";
import { useSession } from "next-auth/react";

const Servicios = () => {
  const { data: session, status } = useSession();
  const isAdmin = session?.user?.role === "admin";

  const [servicios, setServicios] = useState([]);
  const [error, setError] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentService, setCurrentService] = useState(null);
  const [alert, setAlert] = useState({ show: false, message: "", type: "success" });

  const [loading, setLoading] = useState(false);


  useEffect(() => {
      fetchServices();
    }, []);
  
    const fetchServices = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get(`/api/services`);
        setServicios(response.data);
      } catch (err) {
        setError("Failed to fetch services");
      } finally {
        setLoading(false);
      }
    };

  const showAlert = (message, type = "success") => {
    setAlert({ show: true, message, type });
    setTimeout(() => setAlert({ show: false, message: "", type: "success" }), 3000);
  };

  const handleAddService = async (newService) => {
    try {
      const response = await axios.post(`/api/services`, newService);
      fetchServices();
      showAlert("Servicio agregado con éxito", "success");
    } catch (err) {
      showAlert("Error al agregar el servicio", "error");
    }
  };
  
  const handleEditService = async (serviceData) => {
    try {
      const response = await axios.put(`/api/services?id=${serviceData.id}`, serviceData);
      fetchServices();
      showAlert("Servicio editado con éxito", "success");
    } catch (err) {
      showAlert("Error al editar el servicio", "error");
    }
  };
  
  const handleDeleteService = async (id) => {
    setLoading(true); // Activa el loading
    try {
      const response = await axios.delete(`/api/services?id=${id}`);
      console.log("Servicio eliminado:", response.data);
      
      fetchServices(); // Recargar lista de servicios
      
      // Cerrar el modal de confirmación de eliminación
      setIsDeleteModalOpen(false);
      
      // Mostrar alerta de éxito
      showAlert("Servicio eliminado con éxito", "success");
    } catch (error) {
      console.error("Error al eliminar al servicio", error);
      
      // Mostrar alerta de error
      showAlert("Error al eliminar al servicio", "error");
    } finally {
      setLoading(false); // Terminar el loading
    }
  };

  
  const handleEditButtonClick = (servicio) => {
    if (!servicio) return; // Asegurarse de que el usuario existe
    setCurrentService(servicio); // Establecer el usuario a editar
    setIsEditModalOpen(true); // Abrir el modal de edición
  };

  const handleDeleteButtonClick = (servicio) => {
    if (!servicio) return; // Asegurarse de que el usuario existe
    setCurrentService(servicio); // Establecer el usuario a editar
    setIsDeleteModalOpen(true); // Abrir el modal de edición
  };

  return (
    <section id="servicios" className="p-8 bg-gray-80">
      <h2 className="font-medium tracking-tight text-gray-950 text-2xl lg:text-3xl font-bold text-blue-900 text-center mb-4" data-aos="fade-up">
        SERVICIOS JURÍDICOS
      </h2>
      <p className="font-medium text-gray-600 max-w-5xl mx-auto text-center mb-4" data-aos="fade-up" data-aos-delay="200">
        Ofrecemos soluciones personalizadas y asesoría experta para ayudarte a alcanzar tus objetivos con profesionalismo y compromiso.
      </p>
      <div className="flex justify-center mb-4">
        <img src="/img/lineaFinal.png" className="h-8 w-auto" alt="Decoración" />
      </div>

      {isAdmin && (
        <div className="flex justify-end mb-4 relative z-10">
          <button
            className="relative z-10 flex items-center gap-3 mb-4 bg-blue-950 text-white text-sm sm:text-md px-4 py-2 rounded-sm hover:bg-blue-900 hover:text-white w-auto"
            onClick={() => setIsAddModalOpen(true)}
          >
            Agregar servicio
            <MdAddToPhotos />
          </button>
        </div>
      )}

      {/* Modal */}
      <ServiceAddModal
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
        onSave={handleAddService} 
      />

        {isEditModalOpen && currentService && (
          <ServiceEditModal
            isOpen={isEditModalOpen}
            onClose={() => setIsEditModalOpen(false)}
            onSave={handleEditService}
            servicio={currentService}
          />
        )}
  
        {isDeleteModalOpen && currentService && (
          <ServiceDeleteModal
            isOpen={isDeleteModalOpen}
            onClose={() => setIsDeleteModalOpen(false)}
            onConfirm={() => handleDeleteService(currentService?.id)} // Pasar la función al evento de confirmación
            servicio={currentService}
          />
        )}

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 place-items-center">
        {servicios.map((servicio, index) => (
          <div key={index} className="card-servicio" data-aos="zoom-in" data-aos-delay={index * 200}>
            {isAdmin && (
              <div className="absolute top-2 right-2 z-10 flex gap-2">
                <button  
                  onClick={() => handleEditButtonClick(servicio)}
                  className="p-1 rounded-full bg-white text-blue-500 hover:text-blue-700"
                  title="Editar"
                >
                  <RiEdit2Fill size={20} />
                </button>
                <button  
                  onClick={() => handleDeleteButtonClick(servicio)}
                  className="p-1 rounded-full bg-white text-red-500 hover:text-red-700"
                  title="Eliminar"
                >
                  <MdDelete size={20} />
                </button>
              </div>
            )}

            <img src={servicio.image} alt={servicio.name} className="imagen-servicio" />
            <div className="overlay-servicio">
              <h3 className="titulo-servicio">{servicio.name}</h3>
              {/* <Link href={`/services/${servicio.id}`}>
                <button className="boton-ver-mas">Ver más</button>
              </Link> */}
              <Link href={`/services/${servicio.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <button className="boton-ver-mas">Ver más</button>
              </Link>
            </div>
          </div>
        ))}

        <div className="w-full h-full flex items-center justify-center" data-aos="fade-up">
          <Link href="/services/derecho-familiar">
            <button className="mt-4 px-6 py-2 bg-[#121631] text-white shadow-md transition-all duration-300 ease-in-out hover:bg-[#1f225b] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#1A2238] focus:ring-offset-2">
              <div className="flex items-center gap-3">
                Ver todos <FaArrowRight />
              </div>
            </button>
          </Link>
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
  );
};

export default Servicios;
