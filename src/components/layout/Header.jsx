import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-[#FFA000] font-semibold"
      : "hover:text-[#FFA000] transition-colors";
  };

  return (
    <header className="bg-[#2196F3] text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/images/logoweb.jpg"
              alt="Logo Institucional"
              className="w-24 h-24 rounded-full"
            />
            <div className="text-sm md:text-base">
              <div className="font-bold">Unidad Educativa Franciscana</div>
              <div>Fray Cristobal Zambrano</div>
            </div>
          </Link>

          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

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

        {isMenuOpen && (
          <nav className="md:hidden bg-[#1976D2]">
            <ul className="flex flex-col space-y-4 p-4">
              <li>
                <Link
                  to="/"
                  className={getLinkClass("/")}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={getLinkClass("/about")}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className={getLinkClass("/news")}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Noticias
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={getLinkClass("/contact")}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};
