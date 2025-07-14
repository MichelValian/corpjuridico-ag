// "use client";
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { IoMdMenu } from "react-icons/io";

// export default function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [scrolling, setScrolling] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolling(window.scrollY > 0);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`bg-[var(--color-navbar)] text-[var(--color-accent)] p-4 fixed w-full top-0 left-0 z-50 shadow-md transition-all ${
//         scrolling ? "shadow-lg" : "shadow-md"
//       }`}
//     >
//       <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
//         {/* Logo */}
//         <div className="flex items-center space-x-4">
//           <img
//             src="/img/corpjur-logo.png"
//             alt="Logo Corporativo"
//             className="h-8 sm:h-10 w-auto"
//           />
//           <div>
//             <h1 className="text-lg sm:text-1xl md:text-2xl font-bold">Alvarado Guzmán y Asociados</h1>
//             <h2 className="text-sm sm:text-1xl md:text-1xl font-semibold">Corporativo Jurídico</h2>
//           </div>
//         </div>

//         {/* Botón del menú móvil */}
//         <button
//           className="lg:hidden p-2 rounded-md text-[var(--color-accent)] hover:bg-gray-700 transition"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           aria-label="Abrir menú"
//         >
//           <IoMdMenu size={28} />
//         </button>

//         {/* Menú de escritorio */}
//         <ul className="hidden lg:flex space-x-6 sm:text-1xl md:text-1xl">
//           {["INICIO", "NOSOTROS", "SERVICIOS", "EQUIPO", "NOTICIAS", "CONTACTO"].map(
//             (item, index) => (
//               <li key={index}>
//                 <Link
//                   href={item === "NOTICIAS" ? "/news" : `/#${item.toLowerCase()}`}
//                   className="hover:text-gray-300 transition"
//                 >
//                   {item}
//                 </Link>
//               </li>
//             )
//           )}
//         </ul>
//       </div>

//       {/* Menú móvil */}
//       <ul
//         className={`lg:hidden absolute top-full left-0 w-full bg-[var(--color-navbar)] text-[var(--color-accent)] py-4 px-8 space-y-4 shadow-md transform transition-all duration-300 ease-in-out ${
//           isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
//         }`}
//       >
//         {["INICIO", "NOSOTROS", "SERVICIOS", "EQUIPO", "NOTICIAS", "CONTACTO"].map(
//           (item, index) => (
//             <li key={index}>
//               <Link
//                 href={item === "NOTICIAS" ? "/news" : `/#${item.toLowerCase()}`}
//                 className="block text-1xl py-1 hover:text-gray-300 transition"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {item}
//               </Link>
//             </li>
//           )
//         )}
//       </ul>
//     </nav>
//   );
// }



'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon, ChevronDoubleDownIcon } from '@heroicons/react/24/outline'
import { GoHome } from 'react-icons/go'
import { RiTeamLine, RiUserStarLine } from "react-icons/ri";
import { AiOutlineProduct } from "react-icons/ai";
import { IoNewspaperOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineExpandMore } from 'react-icons/md';
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Menu } from '@headlessui/react'
import { FaUser, FaUserCircle } from 'react-icons/fa'
import { signOut } from 'next-auth/react'
import SignOutConfirmModal from './SignOutConfirmModal'


const nosotros = [
  { name: 'Acerca de nosotros', href: '#sobre-nosotros' },
  { name: 'Nuestro equipo', href: '#equipo' },
  { name: 'Administradores', href: '/users' },
]

const services = [
  { name: 'Nuestros servicios', href: '#servicios' },
  { name: 'Testimonios', href: '#testimonios' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { data: session, status } = useSession();
  const isAdmin = session?.user?.role === "admin";
  const [showSignOutModal, setShowSignOutModal] = useState(false);
  const [loadingSignOut, setLoadingSignOut] = useState(false);

  // función para cerrar sesión
  const handleSignOut = async () => {
    setLoadingSignOut(true);
    await signOut();
  };

  const handleNavigation = (href) => {
    if (href.startsWith("#")) {
      if (window.location.pathname !== "/") {
        window.location.href = "/" + href; // Redirige al home con hash
      } else {
        window.location.hash = href; // Solo cambia hash si ya está en home
      }
    } else {
      window.location.href = href; // Redirige normalmente a la ruta
    }
  };


  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/80 shadow-md">
      <nav className="mx-auto max-w-7xl flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex items-center gap-4">
          <a href="#" className="p-1.5">
            <img src="/img/logo.png" alt="Logo" className="h-8 w-auto" />
          </a>
          <div>
            <h1 className="text-md sm:text-sm md:text-base font-bold">ALVARADO GUZMÁN Y ASOCIADOS</h1>
            <h2 className="text-xs sm:text-sm md:text-md font-semibold text-gray-500">Corporativo Jurídico</h2>
          </div>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          <a onClick={() => handleNavigation("#")} className="cursor-pointer text-gray-900 font-medium font-semibold hover:text-gray-500">Inicio</a>
          
          <Popover className="relative popover">
            {/* <PopoverButton className="flex items-center gap-x-1 font-semibold text-gray-900 hover:text-gray-500"> */}
            <PopoverButton className="popover-button flex items-center gap-x-1 font-semibold text-gray-900 hover:text-gray-500">
              Nosotros
              <ChevronDownIcon className="w-5 h-5 text-gray-500" />
            </PopoverButton>
            {/* <PopoverPanel className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 ring-1 ring-gray-200"> */}
            {/* <PopoverPanel className="popover-panel hidden absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 ring-1 ring-gray-200"> */}
            <PopoverPanel
              transition
              className="absolute backdrop-blur-lg bg-white/80 top-full -left-8 z-10 mt-3 w-screen max-w-sm overflow-hidden rounded-1xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
              // className={`absolute bg-white shadow-lg rounded-md py-2 ring-1 ring-gray-200 ${open ? 'block' : 'hidden'}`}
            //  className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5 transition-transform duration-200 ease-out transform scale-95 opacity-0 data-[open]:scale-100 data-[open]:opacity-100"
            >
              {nosotros.map((item) => {
                if (item.name === "Administradores" && !isAdmin) {
                  return null; // Ocultar si no es admin
                }
                return (
                  <a
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                  >
                    {item.name}
                  </a>
                );
              })}
            </PopoverPanel>
          </Popover>
          
          <Popover className="relative popover">
            {/* <PopoverButton className="flex items-center gap-x-1 font-semibold text-gray-900 hover:text-gray-500"> */}
            <PopoverButton className="popover-button flex items-center gap-x-1 font-semibold text-gray-900 hover:text-gray-500">
              Servicios
              <ChevronDownIcon className="w-5 h-5 text-gray-500" />
            </PopoverButton>
            {/* <PopoverPanel className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 ring-1 ring-gray-200"> */}
            {/* <PopoverPanel className="popover-panel hidden absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 ring-1 ring-gray-200"> */}
            <PopoverPanel
              transition
              className="absolute backdrop-blur-lg bg-white/80 top-full -left-8 z-10 mt-3 w-screen max-w-sm overflow-hidden rounded-1xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
              // className={`absolute bg-white shadow-lg rounded-md py-2 ring-1 ring-gray-200 ${open ? 'block' : 'hidden'}`}
              // className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5 transition-transform duration-200 ease-out transform scale-95 opacity-0 data-[open]:scale-100 data-[open]:opacity-100"
          
            >
              {services.map((item) => (
                <a 
                  key={item.name} 
                  onClick={() => handleNavigation(item.href)} 
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
            </PopoverPanel>
          </Popover>
          
          <a onClick={() => handleNavigation("#testimonios")} className="cursor-pointer text-gray-900 font-medium font-semibold hover:text-gray-500">Testimonios</a>
          <a onClick={() => handleNavigation("#noticias")} className="cursor-pointer text-gray-900 font-medium font-semibold hover:text-gray-500">Noticias</a>
          <a onClick={() => handleNavigation("#contacto")} className="cursor-pointer text-gray-900 font-medium font-semibold hover:text-gray-500">Contacto</a>
        </div>
        
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(true)} className="p-2 text-gray-700">
            <Bars3Icon className="w-6 h-6" />
          </button>
        </div>

        {/* <div className="hidden lg:flex lg:items-center lg:justify-center">  */}

          {/* <a href="/auth/signin" className="text-sm font-semibold text-blue-900">
            Iniciar sesión <span aria-hidden="true">&rarr;</span>
          </a> */}

          {/* <Link href="/auth/signin" className="text-sm font-semibold text-blue-900">
            Iniciar sesión <span aria-hidden="true">&rarr;</span>
          </Link>
        </div> */}


        <div className="hidden lg:flex lg:items-center lg:justify-center">
          {status === "authenticated" ? (
            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-blue-900 focus:outline-none">
                <FaUser className="w-4 h-4 text-blue-900" />
                <span>{session.user.name}</span>
              </Menu.Button>

              <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg focus:outline-none z-50">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => setShowSignOutModal(true)}
                        className={`${
                          active ? 'bg-red-100 text-red-800' : 'text-red-700'
                        } block w-full text-left px-4 py-2 text-sm`}
                      >
                        Cerrar sesión
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
          ) : (
            <Link href="/auth/signin" className="text-sm font-semibold text-blue-900">
              Iniciar sesión <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
        </div>

      </nav>

      <SignOutConfirmModal
        isOpen={showSignOutModal}
        onClose={() => setShowSignOutModal(false)}
        onConfirm={handleSignOut}
        loading={loadingSignOut}
      />
      
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10 bg-gray-800 bg-opacity-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-[60] w-64 bg-white p-6 shadow-lg">
        {/* <img src="/img/logo.png" alt="Logo" className="w-8 h-8" /> */}
          
         {/* Close button */}
          <button onClick={() => setMobileMenuOpen(false)} className="absolute top-4 right-4 z-20">
            <XMarkIcon className="w-6 h-6 text-gray-700" />
          </button>

          {/* Logo */}
          <div className="flex items-center space-x-3 mt-10 mb-6"> {/* Cambié mb-6 por mt-14 para ajustar el espacio */}
            {/* <img src="/img/logo.png" alt="Logo" className="w-8 h-8" /> */}
            <a onClick={() => handleNavigation("#")} className="cursor-pointer text-xl text-center font-medium font-bold">ALVARADO GUZMÁN Y ASOCIADOS</a>
          </div>
          
          {/* Menu items */}
          <div className="mt-4 space-y-2">
            {/* Inicio */}
            <a onClick={() => handleNavigation("#")} className="cursor-pointer flex items-center text-gray-600 font-semibold hover:bg-gray-100 p-2 rounded">
              <GoHome className="w-5 h-5 mr-4" />
              Inicio
            </a>
            
            {/* Nosotros with dropdown */}
            <details className="group">
              <summary className="flex items-center text-gray-600 font-semibold p-2 rounded cursor-pointer hover:bg-gray-100">
                <RiTeamLine className="w-5 h-5 mr-4" />
                Nosotros 
                <MdOutlineExpandMore className="w-5 h-5 group-open:rotate-180 ml-2" />
              </summary>
              <div className="pl-4 mt-1 space-y-1">
                {nosotros.map((item) => {
                  if (item.name === "Administradores" && !isAdmin) {
                    return null;
                  }
                  return (
                    <a
                      key={item.name}
                      onClick={() => handleNavigation(item.href)}
                      className="block text-gray-800 hover:text-blue-900 cursor-pointer"
                    >
                      {item.name}
                    </a>
                  );
                })}
              </div>
            </details>

            {/* Servicios with dropdown */}
            <details className="group">
              <summary className="flex items-center text-gray-600 font-semibold p-2 rounded cursor-pointer hover:bg-gray-100">
                <AiOutlineProduct className="w-5 h-5 mr-4" />
                Servicios 
                <MdOutlineExpandMore className="w-5 h-5 group-open:rotate-180 ml-2" />
              </summary>
              <div className="pl-4 mt-1 space-y-1">
                {services.map((item) => (
                  <a 
                    key={item.name} 
                    onClick={() => handleNavigation(item.href)} 
                    className="block text-gray-800 hover:text-blue-900 cursor-pointer"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </details>

            
            {/* Other Menu Items */}
            <a onClick={() => handleNavigation("#testimonios")} className="cursor-pointer flex items-center text-gray-600 font-semibold hover:bg-gray-100 p-2 rounded">
              <RiUserStarLine className="w-5 h-5 mr-4" />
              Testimonios
            </a>
            <a onClick={() => handleNavigation("#noticias")} className="cursor-pointer flex items-center text-gray-600 font-semibold hover:bg-gray-100 p-2 rounded">
              <IoNewspaperOutline className="w-5 h-5 mr-4" />
              Noticias
            </a>
            <a onClick={() => handleNavigation("#contacto")} className="cursor-pointer flex items-center text-gray-600 font-semibold hover:bg-gray-100 p-2 rounded">
              <BsTelephone className="w-5 h-5 mr-4" />
              Contacto
            </a>
          </div>

          {/* Login Button */}
          
          <div className="mt-6 border-t border-gray-200 pt-4">
            {status === "authenticated" ? (
              <>
                <div className="flex items-center space-x-3">
                  <FaUserCircle className="w-5 h-5 text-blue-900" />
                  <span className="text-gray-800 font-medium">{session.user.name}</span>
                </div>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);  // Cierra el menú móvil
                    setShowSignOutModal(true); // Abre el modal
                  }}
                  className="mt-3 block w-full text-left px-3 py-2 text-sm text-red-700 hover:bg-red-100 rounded-md"
                >
                  Cerrar sesión
                </button>
              </>
            ) : (
              <a
                href="/auth/signin"
                className="block text-blue-900 font-semibold hover:text-blue-700 mt-2"
              >
                Iniciar sesión &rarr;
              </a>
            )}
          </div>

        </DialogPanel>
      </Dialog>

    </header>
  )
}
