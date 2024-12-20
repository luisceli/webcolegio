import React from "react";

import { ImageCarousel } from "./ImageCarousel";

export const Hero = () => {
  return (
    <section className="relative bg-[#2196F3] text-white overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="z-10">
            <p>Bienvenidos a nuestra Institución Educativa</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Unidad Educativa Franciscana Fray Cristóbal Zambrano - Saraguro
            </h1>
            <p className="text-xl mb-8">
              Formando líderes con valores franciscanos para un mundo mejor
            </p>
            <div className="inline-block bg-white text-[#2196F3] px-6 py-3 rounded-lg font-bold">
              Paz y Bien
            </div>
          </div>

          <div className="relative z-10">
            <ImageCarousel />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 skew-y-6 transform origin-top-left bg-[#FFA000] z-0"></div>
    </section>
  );
};
