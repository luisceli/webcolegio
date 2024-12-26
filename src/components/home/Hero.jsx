import React from "react";

import { ImageCarousel } from "./ImageCarousel";

export const Hero = () => {
  return (
    <section className="relative bg-[#2196F3] text-white overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-4 items-center">
          {/* Logo y Texto */}
          <div className="z-10 flex flex-col md:flex-row items-center md:items-start md:col-span-2">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-40 h-40 md:w-56 md:h-56 rounded-full md:mr-6 md:mt-10 "
            />
            <div className="text-center md:text-left">
              <p className="text-3xl">Bienvenidos a nuestra</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Unidad Educativa Franciscana "Fray CRISTÓBAL ZAMBRANO" Saraguro
                - Ecuador
              </h1>
              <p className="text-xl mb-8">
                Formando líderes con valores humanos, cristianos y franciscanos
                para un mundo mejor
              </p>
              <div className="inline-block bg-white text-[#2196F3] px-6 py-3 rounded-lg font-bold">
                Paz y Bien
              </div>
            </div>
          </div>

          {/* Carrusel */}
          <div className="relative z-10">
            <ImageCarousel />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 skew-y-6 transform origin-top-left bg-[#FFA000] z-0"></div>

      {/* Fondo con patrón SVG */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/patrones.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "500px 500px",
          opacity: 0.1,
          transform: "rotate(-1deg)",
          transformOrigin: "center",
        }}
      ></div>
    </section>
  );
};
