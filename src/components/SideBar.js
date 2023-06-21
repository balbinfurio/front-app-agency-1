import React from 'react';
import { useState } from 'react';
import './Sidebar.css';
import { FaBars } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars className="text-gray-600 w-6 h-6" />
      </div>
      <ul className="sidebar-menu">
        <li className="sidebar-menu-item">Agencias</li>
        <li className="sidebar-menu-item">Hoteles</li>
        <li className="sidebar-menu-item">Abonos</li>
        <li className="sidebar-menu-item">Tours</li>
        <li className="sidebar-menu-item">Reservas</li>
      </ul>
    </div>
  );
};

export default Sidebar;
