import React, { useEffect, useState } from "react";
import axios from "axios";

export const FacebookPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const fetchFirstAlbumPhotos = async () => {
      const pageId = import.meta.env.VITE_FACEBOOK_PAGE_ID;
      const accessToken = import.meta.env.VITE_FACEBOOK_PAGE_TOKEN;

      try {
        const albumsResponse = await axios.get(
          `https://graph.facebook.com/v11.0/${pageId}/albums?access_token=${accessToken}`
        );

        const albums = albumsResponse.data.data;

        if (albums.length > 0) {
          const firstAlbumId = albums[0].id;

          const photosResponse = await axios.get(
            `https://graph.facebook.com/v11.0/${firstAlbumId}/photos?fields=images&limit=15&access_token=${accessToken}`
          );

          setPhotos(photosResponse.data.data);
          setNextPage(photosResponse.data.paging?.next || null);
        } else {
          setError("No se encontraron álbumes.");
        }
      } catch (error) {
        setError("Error al obtener las fotos de Facebook.");
      } finally {
        setLoading(false);
      }
    };

    fetchFirstAlbumPhotos();
  }, []);

  const fetchNextPage = async () => {
    if (!nextPage) return;

    try {
      setLoading(true);

      const response = await axios.get(nextPage);

      setPhotos((prevPhotos) => [...prevPhotos, ...response.data.data]);
      setNextPage(response.data.paging?.next || null);
    } catch (error) {
      setError("Error al cargar más fotos.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {loading && <div className="text-center p-4">Cargando...</div>}
      {error && <div className="text-center p-4 text-red-500">{error}</div>}
      <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="group relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
            onClick={() => setSelectedPhoto(photo.images[0].source)}
          >
            <img
              src={photo.images[0].source}
              alt="Facebook Album Photo"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100">
                Ver más
              </p>
            </div>
          </div>
        ))}
      </div>
      {nextPage && !loading && (
        <div className="text-center my-6">
          <button
            onClick={fetchNextPage}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 shadow-md"
          >
            Cargar más fotos
          </button>
        </div>
      )}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
            >
              ✕
            </button>
            <img
              src={selectedPhoto}
              alt="Selected"
              className="max-w-full max-h-screen rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};
