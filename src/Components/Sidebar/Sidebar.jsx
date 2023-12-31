import React from 'react';
import { FaHome, FaTh, FaAddressBook, FaHistory } from 'react-icons/fa';
import { FaRegAddressCard } from "react-icons/fa";
import { FaLaptopFile } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="bg-[#262E30] w-1/5 p-4 h-screen">
      <div className="flex items-center justify-center mb-8">
        <div className="bg-white h-1 w-3/4 rounded-full"></div>
      </div>
      <div className="flex flex-col space-y-4">
        <Link to='/'>
        <div className="flex items-center space-x-4">
          <FaHome className="text-white" />
          <span className="text-white">Inicio</span>
        </div>
        </Link>


        <Link to='/RegistroObjetos'>
        <div className="flex items-center space-x-4">
          <FaRegAddressCard className="text-white" />
          <span className="text-white">Registro Objetos</span>
        </div>
        </Link>

        <Link to='/muestraCardAprendiz'>                       {/* CREO LINK PARA COMPONENTE muestraCardAprendiz.jsx  */}
        <div className="flex items-center space-x-4">
          <FaTh className="text-white" />
          <span className="text-white">Carnet Aprendiz</span>
        </div>
        </Link>


        <Link to='/registroExterno'>
        <div className="flex items-center space-x-4">
          <FaAddressBook className="text-white" />
          <span className="text-white">Registro</span>
        </div>
        </Link>

        <Link to='/objetosregistrados'>
        <div className="flex items-center space-x-4">
          <FaLaptopFile className="text-white" />
          <span className="text-white">Objetos Registrados</span>
        </div>
        </Link>
        
        <Link to='/historial'>
        <div className="flex items-center space-x-4">
          <FaHistory className="text-white" />
          <span className="text-white">Historial</span>
        </div>
        </Link>
      </div>
      <div className="mt-auto ">
        <div className="flex items-center justify-center mt-8">
          <div className="bg-white h-1 w-3/4 rounded-full"></div>
        </div>
        <div className="flex items-center justify-center mt-8">
          <span className="text-white">Logo Empresa</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
