import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaWhatsapp, FaTiktok, FaYoutube } from 'react-icons/fa';
import { IoMailOutline } from "react-icons/io5";
import { RiFacebookCircleLine } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";


const Footer = () => {
  return (
    <footer className="bg-[var(--color-footer)] text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <h3 className="font-bold text-lg">Alvarado Guzmán y Asociados</h3>
            <p className="text-gray-500 mt-4">Expertos en soluciones jurídicas y consultoría para tu empresa.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          <div>
            <h3 className="font-bold text-lg">Compañia</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/about" className="text-gray-500 hover:text-blue-900">Sobre nosotros</a></li>
              <li><a href="/frequently-questions" className="text-gray-500 hover:text-blue-900">Preguntas frecuentes</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/cookie-policy" className="text-gray-500 hover:text-blue-900">Cookies</a></li>
              <li><a href="/privacy-policy" className="text-gray-500 hover:text-blue-900">Política de privacidad</a></li>
              <li><a href="/terms-of-service" className="text-gray-500 hover:text-blue-900">Términos de servicio</a></li>
            </ul>
          </div>
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <h3 className="font-bold text-lg">Redes sociales</h3>
            <div className="flex space-x-4 mt-4">
              <a href="https://wa.me/5212213451169" className="text-gray-500 hover:text-blue-900" target="_blank" rel="noopener noreferrer">
                <IoLogoWhatsapp size={24} />
              </a>
              <a href="mailto:corporativoagyasociados@gmail.com" className="text-gray-500 hover:text-blue-900" target="_blank" rel="noopener noreferrer">
                <IoMdMail size={24} />
              </a>
              <a href="https://www.facebook.com/agcorpjuridico" className="text-gray-500 hover:text-blue-900" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/corporativoalvaradoguzman/" className="text-gray-500 hover:text-blue-900" target="_blank" rel="noopener noreferrer">
                <RiInstagramFill size={24} />
              </a>
              <a href="https://www.tiktok.com/@juridicoagasociados?_t=ZS-8xZ3ley46Gm&_r=1" className="text-gray-500 hover:text-blue-900" target="_blank" rel="noopener noreferrer">
                <FaTiktok size={24} />
              </a>
              <a href="https://youtube.com/@corporativojuridicoag?si=Avb5OhjjHKlWIkBw" className="text-gray-500 hover:text-blue-900" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <p>&copy; 2025 Alvarado Guzmán y Asociados. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
