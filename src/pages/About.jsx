import React from "react";

import { StaffSection } from "../components/home/StaffSection";

export const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#654321] mb-6">Sobre Nosotros</h1>

      {/* Historia y Fundación */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#654321] mb-4">Historia</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 mb-4">
            La Orden Franciscana, cumpliendo el mandato de Jesucristo y la
            vivencia del Evangelio, fundó el 31 de octubre de 1967 una
            institución educativa con la finalidad de ofrecer a los niños/as y
            jóvenes una formación científica y franciscana para el servicio de
            la patria.
          </p>
          <p className="text-gray-600">
            Nuestro perfil formativo en un ambiente de libertad, nos permite
            educar para la vida, el servicio a la sociedad y el saber
            sapiensial, fomentando la creatividad, la reflexión y compromiso
            ante los nuevos desafíos, buscando alternativas positivas de cambio
            que permitan descubrir y formar líderes constructores de un Ecuador
            más justo, fraterno y solidario.
          </p>
        </div>
        <img
          src="/images/maestros.jpg"
          alt="Personal docente"
          className="mt-4 rounded-lg max-w-full h-auto mx-auto"
        />
      </div>

      {/* Oferta Académica */}
      <h2 className="text-2xl font-bold text-[#654321] mb-6">
        Oferta Académica
      </h2>
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          {
            title: "Educación Inicial",
            description:
              "Buscamos desarrollar al máximo las potencialidades básico-sociales, en un ambiente lúdico y con una atención personalizada, despertando y fortaleciendo destrezas.",
            image: "/images/inicial.png",
          },
          {
            title: "Educación General Básica",
            description:
              "Desarrollar las habilidades, destrezas y competencias, potenciando las áreas fundamentales que le permitan adquirir conocimientos significativos y funcionales.",
            image: "/images/basica.png",
          },
          {
            title: "Bachillerato General Unificado",
            description:
              "Por medio de las diferentes ciencias, el estudiante deberá desarrollar sus capacidades intelectuales, su pensamiento crítico, constructivo, humano y de armonía con la naturaleza.",
            image: "/images/BGU.png",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md border-t-4 border-t-[#654321]"
          >
            <h3 className="text-xl font-bold text-[#654321] mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.description}</p>
            <img
              src={item.image}
              alt={item.title}
              className="mt-4 w-full h-40 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Instalaciones */}
      <h2 className="text-2xl font-bold text-[#654321] mb-6">
        Nuestras Instalaciones
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {[
          "Aulas amplias y pedagógicas",
          "Laboratorios de Química y Biología",
          "Laboratorio de Informática",
          "Laboratorio de Idiomas - Inglés",
          "Sala de Audiovisuales",
          "Cafetería - Bar",
          "Iglesia en honor al Divino Niño",
          "Biblioteca",
          "Aula de apoyo",
          'Sala de profesores "Fr. Manuel Chimbo"',
        ].map((facility, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-[#D2B48C]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-gray-700">{facility}</span>
            </div>
          </div>
        ))}
      </div>

      
        <StaffSection />
    

      {/* Imagen de la institución */}
      <div className="relative mt-12">
        <div className="absolute inset-0 bg-[#D2B48C] transform -rotate-3 rounded-lg"></div>
        <img
          src="/images/about-us.png"
          alt="Nuestra institución"
          className="relative z-10 rounded-lg shadow-lg w-full h-[400px] object-cover"
        />
      </div>
    </div>
  );
};
