import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-sm">&copy; 2023 Top Company. Todos los derechos reservados.</p>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-gray-300 hover:text-white">Inicio</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Acerca de</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Servicios</a></li>
          <li><a href="#" className="text-gray-300 hover:text-white">Contacto</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

