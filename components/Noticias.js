"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";

const Noticias = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("/api/news");
        const sorted = response.data
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 2);
        setNewsList(sorted);
      } catch (error) {
        console.error("Error al cargar noticias:", error);
      }
    };

    fetchNews();
  }, []);

  const getYoutubeThumbnail = (url) => {
    const videoIdMatch = url.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^\s&?/]+)/
    );
    return videoIdMatch
      ? `https://img.youtube.com/vi/${videoIdMatch[1]}/hqdefault.jpg`
      : null;
  };

  const getTikTokEmbed = (url) => {
    const match = url.match(/tiktok\.com\/(@[\w.-]+)\/video\/(\d+)/);
    if (match) {
      const [_, username, videoId] = match;
      return `https://www.tiktok.com/embed/v2/${videoId}`;
    }
    return null;
  };


  const isYoutubeLink = (url) => {
    return url.includes("youtube.com") || url.includes("youtu.be");
  };

  const isTikTokLink = (url) => {
    return url.includes("tiktok.com");
  };


  return (
    <section id="noticias" className="p-8 bg-gray-80">
      <h2
        className="text-2xl lg:text-3xl font-medium tracking-tight text-gray-950 font-bold text-center mb-4"
        data-aos="fade-up"
      >
        NOTICIAS
      </h2>
      <p
        className="font-medium text-gray-600 max-w-5xl mx-auto text-center mb-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        En esta sección encontrarás las noticias más recientes sobre nuestro
        corporativo, incluyendo novedades, logros y eventos. Mantente informado
        sobre nuestros avances, iniciativas y todo lo que nos impulsa a seguir
        innovando y creciendo. ¡Descubre lo más reciente aquí!
      </p>

      <div className="flex justify-center">
        <img
          src="/img/lineaFinal.png"
          className="h-8 w-auto"
          alt="Línea decorativa"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 max-w-5xl mx-auto">
        {newsList.map((news, index) => {
          const isTikTok = isTikTokLink(news.image);
          const isYoutube = isYoutubeLink(news.image);
          const thumbnail = isYoutube ? getYoutubeThumbnail(news.image) : news.image;
          const tiktokEmbedUrl = isTikTok ? getTikTokEmbed(news.image) : null;

          return (
            <div
              key={index}
              className="bg-white shadow-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {isYoutube ? (
                <a href={news.image} target="_blank" rel="noopener noreferrer">
                  <img
                    src={thumbnail}
                    alt={news.title}
                    className="w-full h-64 object-cover"
                  />
                </a>
              ) : isTikTok ? (
                <iframe
                  src={tiktokEmbedUrl}
                  className="w-full h-96"
                  frameBorder="0"
                  allow="encrypted-media; fullscreen"
                  allowFullScreen
                ></iframe>
              ) : (
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-64 object-cover"
                />
              )}

              <div className="p-4">
                <p className="text-sm text-gray-500 uppercase">
                  {news.category} •{" "}
                  {new Date(news.date).toLocaleDateString("es-MX")}
                </p>
                <h3 className="font-semibold text-gray-700 mt-2">
                  {news.title}
                </h3>
                <Link
                  href={`/news/${news.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="text-blue-900 mt-3 inline-block"
                >
                  Leer más →
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-8">
        <Link href="/news">
          <button className="mt-4 px-6 py-2 bg-[#121631] text-white shadow-md transition-all duration-300 ease-in-out hover:bg-[#1f225b] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#1A2238] focus:ring-offset-2">
            <div className="flex items-center gap-3">
              Ver todo <FaArrowRight />
            </div>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Noticias;
