import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation(); // Obtiene la ubicación actual

  // Función para aplicar una clase de estilo activa a la sección actual
  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-[#FFA000] font-semibold" // Resalta el enlace activo
      : "hover:text-[#FFA000] transition-colors"; // Estilo por defecto
  };

  return (
    <header className="bg-[#2196F3] text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/images/logo.png"
              alt="Logo Institucional"
              className="w-24 h-24 rounded-full"
            />
            <div className="text-sm md:text-base">
              <div className="font-bold">Unidad Educativa Franciscana</div>
              <div>Fray Cristobal Zambrano</div>
            </div>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className={getLinkClass("/")}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/about" className={getLinkClass("/about")}>
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/news" className={getLinkClass("/news")}>
                  Noticias
                </Link>
              </li>
              <li>
                <Link to="/contact" className={getLinkClass("/contact")}>
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
