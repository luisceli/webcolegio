import React, { useState, useEffect, useCallback } from "react";
import {
  Users,
  MapPin,
  Building,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const staffMembers = [
  {
    headerImage: "/images/logo.png",
    profileImage: "/placeholder.svg?height=200&width=200",
    name: "P. Juan Carlos Mina",
    role: "Rector",
    stats: [
      { icon: Users, value: "1200", label: "Estudiantes" },
      { icon: MapPin, value: "Loja", label: "Ciudad" },
      { icon: Building, value: "Particular", label: "Tipo" },
    ],
  },
  // ... Add more staff members here (32 total)
].concat(
  Array(31)
    .fill(null)
    .map((_, index) => ({
      headerImage: "/images/school-front.jpg",
      profileImage: "/placeholder.svg?height=200&width=200",
      name: `Docente ${index + 2}`,
      role: "Profesor/a",
      stats: [
        { icon: Users, value: "30", label: "Alumnos" },
        { icon: MapPin, value: "Loja", label: "Ciudad" },
        { icon: Building, value: "Académico", label: "Área" },
      ],
    }))
);

export const StaffSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const itemsPerPage = {
    desktop: 4,
    tablet: 2,
    mobile: 1,
  };
  // Get current window width and determine items to show
  const [itemsToShow, setItemsToShow] = useState(itemsPerPage.desktop);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(itemsPerPage.desktop);
      } else if (window.innerWidth >= 768) {
        setItemsToShow(itemsPerPage.tablet);
      } else {
        setItemsToShow(itemsPerPage.mobile);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((current) =>
      current + itemsToShow >= staffMembers.length ? 0 : current + itemsToShow
    );
  }, [itemsToShow]);

  const prevSlide = () => {
    setCurrentIndex((current) =>
      current - itemsToShow < 0
        ? staffMembers.length - itemsToShow
        : current - itemsToShow
    );
  };

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(nextSlide, 5000); // Change slides every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const visibleStaff = staffMembers.slice(
    currentIndex,
    currentIndex + itemsToShow
  );
  return (
    <section className=" py-10 relative ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#654321] mb-12">
          Nuestras Autoridades y Personal Docente
        </h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleStaff.map((member, index) => (
              <div
                key={currentIndex + index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300"
              >
                {/* Header Image */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={member.headerImage}
                    alt={`Instalaciones - ${member.role}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Profile Section */}
                <div className="relative px-4 pt-16 pb-4 text-center">
                  {/* Profile Image */}
                  <div className="absolute left-1/2 -translate-x-1/2 -top-12">
                    <div className="w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-lg">
                      <img
                        src={member.profileImage}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Name and Role */}
                  <h3 className="text-lg font-bold text-[#654321]">
                    {member.name}
                  </h3>
                  <p className="text-[#D2B48C] font-medium mb-4">
                    {member.role}
                  </p>

                  {/* Stats */}
                  <div className="flex justify-between items-center px-2 pt-4 border-t border-gray-200">
                    {member.stats.map((stat, statIndex) => (
                      <div
                        key={statIndex}
                        className="flex flex-col items-center"
                      >
                        <stat.icon className="w-4 h-4 text-[#654321] mb-1" />
                        <span className="text-xs font-medium text-gray-600">
                          {stat.value}
                        </span>
                        <span className="text-xs text-gray-500">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white p-2 rounded-full shadow-lg text-[#654321] hover:text-[#D2B48C] transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white p-2 rounded-full shadow-lg text-[#654321] hover:text-[#D2B48C] transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Autoplay Control */}
        <div className="text-center mt-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-[#654321] hover:text-[#D2B48C] transition-colors"
          >
            {isAutoPlaying ? "Pausar" : "Reproducir"} presentación
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({
            length: Math.ceil(staffMembers.length / itemsToShow),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index * itemsToShow)}
              className={`h-2 rounded-full transition-all ${
                index === Math.floor(currentIndex / itemsToShow)
                  ? "w-4 bg-[#654321]"
                  : "w-2 bg-[#D2B48C]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
