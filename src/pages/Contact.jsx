import React, { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
    // Resetear el formulario
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-[#2196F3] mb-6">Contáctanos</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">
            Estamos aquí para responder a tus preguntas y escuchar tus
            comentarios. No dudes en ponerte en contacto con nosotros.
          </p>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Dirección</h2>
            <p>Calle Loja y Fray Cristóbal Zambrano</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Teléfono</h2>
            <p>(072) 200 560 </p>
            <p>(072) 200 185</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Email</h2>
            <p>uefraycristobalzambrano@gmail.com</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 "
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2196F3] focus:ring focus:ring-[#2196F3] focus:ring-opacity-50"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2196F3] focus:ring focus:ring-[#2196F3] focus:ring-opacity-50"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#2196F3] focus:ring focus:ring-[#2196F3] focus:ring-opacity-50"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#2196F3] text-white py-2 px-4 rounded-md hover:bg-[#1976D2] transition-colors duration-300"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
};
