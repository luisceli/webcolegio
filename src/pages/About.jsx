import React from "react";

export const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#2196F3] mb-6">Sobre Nosotros</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">
            La Unidad Educativa Franciscana Fray Cristobal Zambrano es una
            institución comprometida con la formación integral de sus
            estudiantes, siguiendo los valores y principios franciscanos.
          </p>
          <p className="mb-4">Nuestra comunidad educativa se distingue por:</p>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
            <li>Excelencia académica</li>
            <li>Formación en valores cristianos</li>
            <li>Compromiso con la paz y el bien</li>
            <li>Desarrollo integral del estudiante</li>
          </ul>
          <p>
            Trabajamos día a día para formar líderes comprometidos con la
            sociedad y el medio ambiente, capaces de enfrentar los desafíos del
            mundo moderno con una sólida base ética y moral.
          </p>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-[#FFA000] transform -rotate-6 rounded-lg"></div>
          <img
            src="/images/escuela.png"
            alt="Nuestra institución"
            className="relative z-10 rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
