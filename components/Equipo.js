"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import LawyerDeleteModal from "./LawyerDeleteModal";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IoPersonAdd } from "react-icons/io5";
import LawyerAddModal from "./LawyerAddModal";
import { FaCheckCircle } from "react-icons/fa";
import { useSession } from "next-auth/react";

const Equipo = () => {
  const { data: session, status } = useSession();
  const isAdmin = session?.user?.role === "admin";

  const [abogados, setAbogados] = useState([]);
  const [error, setError] = useState("");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentAbogado, setCurrentAbogado] = useState(null);
  const [alert, setAlert] = useState({ show: false, message: "", type: "success" });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
      fetchAbogados();
    }, []);
  
    const fetchAbogados = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get(`/api/teams`);
        setAbogados(response.data);
      } catch (err) {
        setError("Failed to fetch teams");
      } finally {
        setLoading(false);
      }
    };

  const showAlert = (message, type = "success") => {
    setAlert({ show: true, message, type });
    setTimeout(() => setAlert({ show: false, message: "", type: "success" }), 3000);
  };

  const handleAddAbogado = async (newAbogado) => {
      try {
        const response = await axios.post(`/api/teams`, newAbogado);
        fetchAbogados();
        showAlert("Abogado agregado con éxito", "success");
      } catch (err) {
        showAlert("Error al agregar abogado", "error");
      }
    };

  const handleDeleteAbogado = async (id) => {
    setLoading(true); // Activa el loading
    try {
      const response = await axios.delete(`/api/teams?id=${id}`);
      console.log("Abogado eliminado:", response.data);
      
      fetchAbogados(); // Recargar lista de Abogados
      
      // Cerrar el modal de confirmación de eliminación
      setIsDeleteModalOpen(false);
      
      // Mostrar alerta de éxito
      showAlert("Abogado eliminado con éxito", "success");
    } catch (error) {
      console.error("Error al eliminar al abogado", error);
      
      // Mostrar alerta de error
      showAlert("Error al eliminar al abogado", "error");
    } finally {
      setLoading(false); // Terminar el loading
    }
  };

  const handleDeleteButtonClick = (abogado) => {
    if (!abogado) return; // Asegurarse de que el usuario existe
    setCurrentAbogado(abogado); // Establecer el usuario a editar
    setIsDeleteModalOpen(true); // Abrir el modal de edición
  };

  return (
    <section id="equipo" className="equipo-section">
      <h2 className="font-medium tracking-tight text-white text-2xl lg:text-3xl font-bold text-center mb-4" data-aos="fade-up">
        ESTRUCTURA INTERNA
      </h2>
      <p className="font-medium text-gray-400 max-w-5xl mx-auto text-center mb-8" data-aos="fade-up" data-aos-delay="200">
        Conoce a nuestro equipo de expertos, comprometidos en brindar soluciones innovadoras y de calidad.
      </p>

      {isAdmin && (
        <div className="flex justify-end mb-4 relative z-10">
          <button 
            className="flex items-center gap-3 mb-4 bg-white text-blue-900 text-sm sm:text-md px-4 py-2 rounded-sm hover:bg-blue-950 hover:text-white w-auto"
            onClick={() => setIsAddModalOpen(true)}
            >
            Agregar abogado
            <IoPersonAdd />
          </button> 
        </div>
      )}

        {/* Modal */}
        <LawyerAddModal 
          isOpen={isAddModalOpen} 
          onClose={() => setIsAddModalOpen(false)} 
          onSave={handleAddAbogado} 
        />

      {isDeleteModalOpen && currentAbogado && (
        <LawyerDeleteModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={() => handleDeleteAbogado(currentAbogado?.id)} // Pasar la función al evento de confirmación
          abogado={currentAbogado}
        />
      )}
      

      <div className="equipo-grid">
        {abogados.map((abogado, index) => (
          <div
            key={abogado.id}
            className="card relative group"
            data-aos="flip-right"
            data-aos-delay={index * 200}
          >
            
             
            {/* Ícono de eliminar */}
            <button
              onClick={() => handleDeleteButtonClick(abogado)}
              className={`absolute top-2 right-2 z-10 p-1 rounded-full text-white transition-opacity duration-200 ${
                isAdmin ? "bg-red-500 hover:bg-red-600 opacity-0 group-hover:opacity-100" : "hidden"
              }`}
              title="Eliminar"
            >
              <MdDelete size={20} />
            </button>
           

            <img
              src={abogado.image || "/img/sinFoto.webp"}
              alt={abogado.name}
              className="imagen"
            />
            <div className="nombre">
              {abogado.name} {abogado.lastName}
            </div>
            <Link href={`/team/${abogado.id}`} passHref>
              <button className="ver-perfil">Ver perfil</button>
            </Link>
          </div>
        ))}
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

export default Equipo;
