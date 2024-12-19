import React, { useEffect, useState } from "react";
import axios from "axios";

export const FacebookPosts = ({ numberOfPosts }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // URL de la API de Facebook con tu token de acceso y el ID de tu página
    const pageId = import.meta.env.VITE_FACEBOOK_PAGE_ID; // Reemplaza con tu token de acceso
    console.log(pageId);
    const accessToken = import.meta.env.VITE_FACEBOOK_PAGE_TOKEN; // Reemplaza con el ID de tu página
    console.log(accessToken);
    const url = `https://graph.facebook.com/${pageId}/posts?access_token=${accessToken}&fields=message,created_time,attachments`;

    // Hacer la solicitud GET a la API de Facebook
    axios
      .get(url)
      .then((response) => {
        setPosts(response.data.data); // Guardamos las publicaciones en el estado
        setLoading(false); // Ya terminamos de cargar los datos
      })
      .catch((error) => {
        setError("Error al obtener las publicaciones de Facebook");
        setLoading(false);
      });
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  // Función para limitar el número de caracteres en el título
  const truncateText = (text, maxLength) => {
    if (text && text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  // Mostrar el estado de carga, error o las publicaciones
  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Limitar las publicaciones a 'numberOfPosts' si se pasa el prop
  const displayedPosts = numberOfPosts ? posts.slice(0, numberOfPosts) : posts;

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {displayedPosts.map((post) => (
        <div
          key={post.id}
          className="card bg-white rounded-lg shadow-md p-4 mb-6 flex flex-col"
        >
          {/* Título de la publicación limitado a un número de caracteres */}
          <h2 className="text-xl font-semibold text-gray-900 mt-2">
            {truncateText(post.message, 100)} {/* Limita a 100 caracteres */}
          </h2>

          {/* Fecha de publicación */}
          <p className="text-sm text-gray-500">
            {new Date(post.created_time).toLocaleString()}
          </p>

          {/* Imagen de la publicación */}
          {post.attachments &&
            post.attachments.data &&
            post.attachments.data[0].media && (
              <div className="mt-4 overflow-hidden rounded-lg">
                <img
                  src={post.attachments.data[0].media.image.src}
                  alt="Imagen de la publicación"
                  className="w-full h-48 object-cover"
                />
              </div>
            )}

          {/* Botón "Ver más" */}
          <a
            href={`https://www.facebook.com/${post.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-[#f59e0b] text-white py-2  w-40 rounded hover:bg-[#fda713] text-center m-auto"
          >
            Ver más
          </a>
        </div>
      ))}
    </div>
  );
};
