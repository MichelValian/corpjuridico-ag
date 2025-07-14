"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/ui/Navbar";
import axios from "axios";
import UserAddModal from "./UserAddModal";
import UserEditModal from "./UserEditModal";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import UserDeleteModal from "./UserDeleteModal";
import { FaCheckCircle } from "react-icons/fa";

export default function UserTable() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const [alert, setAlert] = useState({ show: false, message: "", type: "success" });

  const [loading, setLoading] = useState(false);


  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(`/api/users`);
      setUsers(response.data);
    } catch (err) {
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const showAlert = (message, type = "success") => {
    setAlert({ show: true, message, type });
    setTimeout(() => setAlert({ show: false, message: "", type: "success" }), 3000);
  };


  const handleAddUser = async (newUser) => {
    try {
      const response = await axios.post(`/api/users`, newUser);
      fetchUsers();
      showAlert("Usuario agregado con éxito", "success");
    } catch (err) {
      showAlert("Error al agregar usuario", "error");
    }
  };
  
  const handleEditUser = async (userData) => {
    try {
      const response = await axios.put(`/api/users?id=${userData.id}`, userData);
      fetchUsers();
      showAlert("Usuario editado con éxito", "success");
    } catch (err) {
      showAlert("Error al editar usuario", "error");
    }
  };

  const handleDeleteUser = async (id) => {
    setLoading(true); // Activa el loading
    try {
      const response = await axios.delete(`/api/users?id=${id}`);
      console.log("Usuario eliminado:", response.data);
      
      fetchUsers(); // Recargar lista de usuarios
      
      // Cerrar el modal de confirmación de eliminación
      setIsDeleteModalOpen(false);
      
      // Mostrar alerta de éxito
      showAlert("Usuario eliminado con éxito", "success");
    } catch (error) {
      console.error("Error al eliminar usuario", error);
      
      // Mostrar alerta de error
      showAlert("Error al eliminar usuario", "error");
    } finally {
      setLoading(false); // Terminar el loading
    }
  };
  
  
  

  const filteredUsers = Array.isArray(users)
  ? users.filter((user) =>
      `${user.name} ${user.lastName}`.toLowerCase().includes(search.toLowerCase())
    )
  : [];


  
  const handleEditButtonClick = (user) => {
    if (!user) return; // Asegurarse de que el usuario existe
    setCurrentUser(user); // Establecer el usuario a editar
    setIsEditModalOpen(true); // Abrir el modal de edición
  };
  const handleDeleteButtonClick = (user) => {
    if (!user) return; // Asegurarse de que el usuario existe
    setCurrentUser(user); // Establecer el usuario a eliminar
    setIsDeleteModalOpen(true); // Abrir el modal de confirmar eliminacion
  };

  return (
    
    <div className="w-full h-full min-h-screen flex flex-col items-center justify-start bg-gray-50 p-6">
      <div>
        <Navbar />
      </div>
      
      {/* Título y descripción */}
      <div className="w-full max-w-6xl text-center mb-10 mt-24">
        <h1 className="text-2xl font-bold text-gray-800">Gestión de usuarios</h1>
        <p className="text-gray-600 mt-2">Administre usuarios agregando, buscando y modificando sus detalles.</p>
      </div>

      {/* Barra de búsqueda y botón */}
      <div className="w-full max-w-6xl flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Buscar por nombre"
          className="w-2/3 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button 
          className="bg-blue-900 text-white text-sm sm:text-md px-4 py-2 rounded-lg hover:bg-blue-950 w-auto"
          onClick={() => setIsAddModalOpen(true)}
          >
          Agregar usuario
        </button>
      </div>

      {/* Cargando y error */}
      {loading && <p className="text-gray-600">Cargando usuarios...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Modal */}
      <UserAddModal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
        onSave={handleAddUser} 
      />
      
      {/* <UserEditModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} onSave={handleEditUser} user={currentUser} /> */}
      {isEditModalOpen && currentUser && (
        <UserEditModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onSave={handleEditUser}
          user={currentUser}
        />
      )}

      {isDeleteModalOpen && currentUser && (
        <UserDeleteModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onConfirm={() => handleDeleteUser(currentUser?.id)} // Pasar la función al evento de confirmación
          user={currentUser}
        />
      )}

      {/* Tabla */}
      <div className="w-full max-w-6xl overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full table-auto min-w-max border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Nombre</th>
              <th className="py-3 px-6 text-left">Correo electrónico</th>
              <th className="py-3 px-6 text-center">Rol</th>
              {/* <th className="py-3 px-6 text-center">Estado</th> */}
              <th className="py-3 px-6 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left whitespace-nowrap">{user.name} {user.lastName}</td>
                  <td className="py-3 px-6 text-left">{user.email}</td>
                  {/* <td className="py-3 px-6 text-center">{user.role}</td> */}
                  <td className="py-3 px-6 text-center">
                    <span
                      className={`px-3 py-1 rounded-md text-xs ${
                        user.role === "admin" ? "bg-green-200 text-green-800" : "bg-blue-200 text-blue-800"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <button
                      className="bg-gray-100 border-sky-500 text-sky-500 px-3 py-1 rounded-md text-xs"
                      onClick={() => handleEditButtonClick(user)}
                    >
                      Editar
                    </button>
                    <button 
                      className="bg-gray-100 text-red-700 px-3 py-1 ml-2 rounded-md text-xs"
                      onClick={() => handleDeleteButtonClick(user)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-gray-500">
                  Usuarios no encontrados
                </td>
              </tr>
            )}
          </tbody>
        </table>
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
    </div>
  );
}
