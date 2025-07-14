"use client";

import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa"; // Importar los íconos de react-icons
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

// Componentes personalizados para las flechas
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 text-white text-4xl cursor-pointer bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all"
      onClick={onClick}
    >
      <GoChevronRight />  {/* Icono de flecha hacia la derecha */}
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 text-white text-4xl cursor-pointer bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all"
      onClick={onClick}
    >
      <GoChevronLeft />  {/* Icono de flecha hacia la izquierda */}
    </div>
  );
};

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  // Lista de las imágenes y sus textos correspondientes
  // const galleryItems = [
  //   { img: "/img/galeria1.jpg", text: "Servicios", link: "/services" },
  //   { img: "/img/galeria2.webp", text: "Nosotros", link: "/about" },
  // ];

  return (
    <div className="w-full mx-auto flex flex-col lg:flex-row">
      {/* Carrusel - Ocupa el 100% en pantallas pequeñas y todo el ancho disponible */}
      <div className="w-full lg:w-[100%] relative">
      <Slider {...settings}>
  {[
    { src: "/img/carrusel1.webp", text: "Alvarado Guzmán y Asociados", img2: "/img/logo.png", text2: "Corporativo Jurídico" },
    { src: "/img/carrusel2.jpg", text: "Asesoría legal estratégica para proteger sus intereses con soluciones efectivas y personalizadas" },
    { src: "/img/IzMt.png", text: "Asesoría legal estratégica para proteger sus intereses con soluciones efectivas y personalizadas", author: "Foto de Gobierno de Puebla" },
    { src: "/img/IzMt2.webp", text: "Asesoría legal estratégica para proteger sus intereses con soluciones efectivas y personalizadas", author: "Foto de Marco Cana"},
  ].map((img, index) => (
    <div key={index} className="relative flex justify-center items-center">
      <img
        src={img.src}
        alt={`Imagen ${index + 1}`}
        className="w-full h-[300px] md:h-[500px] object-cover shadow-lg"
      />
      {/* Overlay */}
      <div className="absolute inset-0" style={{ backgroundColor: 'var(--color-fondoImg)', opacity: 0.7 }}></div>

      {/* Contenedor de contenido */}
      {index === 0 ? (
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1/2 flex flex-col items-center justify-center text-blue-100 p-4 md:p-8">
          {img.img2 && (
            <img src={img.img2} alt="Logo" className="w-24 h-24 md:w-32 md:h-32 object-contain mb-4" data-aos="fade-right" />
          )}
          {img.text && (
            <h2 className="text-xl font-medium tracking-wide md:text-3xl font-bold text-center">{img.text}</h2>
          )}
          {img.text2 && (
            <p className="text-sm font-medium tracking-wide font-light md:text-2xl text-center mt-2">{img.text2}</p>
          )}
        </div>
      ) : (
        img.text && (
          <div className="absolute inset-0 flex items-center justify-center text-center text-white p-4 md:p-8">
            <h2 className="text-xl font-medium font-light tracking-wide leading-relaxed md:text-4xl font-bold max-w-3xl" data-aos="fade-right">{img.text}</h2>
          </div>
        )
      )}

      {/* Autor (Pie de imagen, lado derecho, letras pequeñas) */}
      {img.author && (
        <div className="absolute bottom-2 right-4 text-xs text-white opacity-80 md:text-sm">
          {img.author}
        </div>
      )}
    </div>
  ))}
</Slider>


      </div>




      {/* Galería - En pantallas pequeñas se distribuye en 2 columnas, en pantallas grandes una sola columna */}
      {/* <div className="w-full lg:w-[30%] grid grid-cols-2 gap-1 lg:grid-cols-1">
        {galleryItems.map((item, index) => (
          <div key={index} className="relative group">
            <img
              src={item.img}
              alt={`Galería ${index + 1}`}
              className="w-full h-[245px] object-cover rounded-lg shadow-lg filter blur-[2px] transition-all duration-300 group-hover:blur-none"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <p className="text-white text-xl font-semibold transition-transform transform group-hover:translate-y-4">
                {item.text}
              </p>
              <Link href={item.link}>
                <button className="mt-4 px-6 py-2 bg-blue-900 bg-opacity-70 text-white rounded-lg hover:bg-blue-700 hover:bg-opacity-80 transition-colors duration-200">
                  Ver más
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}
