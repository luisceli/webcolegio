import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/images/alumnos.jpg", alt: "Estudiantes en clase" },
  { src: "/images/esccuela.jpg", alt: "Actividades deportivas" },
  { src: "/images/maestros.jpg", alt: "Laboratorio de ciencias" },
];

export const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    triggerTransition(() => setCurrentIndex(newIndex));
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    triggerTransition(() => setCurrentIndex(newIndex));
  };

  const triggerTransition = (callback) => {
    setIsFading(true);
    setTimeout(() => {
      callback();
      setIsFading(false);
    }, 500); // Tiempo de animación
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Cambio automático cada 4 segundos
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="relative h-[300px] md:h-[450px] w-full rounded-lg overflow-hidden bg-gray-200">
        {/* Fondo fijo para evitar la transparencia */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentIndex
                ? "opacity-100"
                : isFading
                ? "opacity-0"
                : "opacity-0"
            }`}
            style={{
              zIndex: index === currentIndex ? 10 : 1,
            }}
          />
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 text-white p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
        aria-label="Imagen anterior"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 text-white p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
        aria-label="Siguiente imagen"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};
