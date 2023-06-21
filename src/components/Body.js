import React from 'react';

const Body = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        
        <h1 className="text-3xl font-bold mb-4">Welcome to our humble abode</h1>
        <p className="text-gray-700 mb-8">Explora nuestras increíbles ofertas y encuentra el destino perfecto para tus próximas vacaciones.</p>
        
        
        <div className="grid grid-cols-2 gap-4">
          
          <div className="bg-white shadow-md p-4">
            <h2 className="text-xl font-bold mb-2">Paquete de playa en Cancún</h2>
            <p className="text-gray-700 mb-4">Disfruta de las hermosas playas de Cancún con nuestro paquete turístico todo incluido.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded shadow">Ver detalles</button>
          </div>
          
          
          <div className="bg-white shadow-md p-4">
            <h2 className="text-xl font-bold mb-2">Tour cultural en Roma</h2>
            <p className="text-gray-700 mb-4">Descubre la historia y cultura de Roma con nuestro tour guiado por los principales sitios turísticos.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded shadow">Ver detalles</button>

          </div>
        </div>
        
        {/* Más contenido del cuerpo */}
        {/* ... */}
      </div>
    </div>
  );
};

export default Body;
