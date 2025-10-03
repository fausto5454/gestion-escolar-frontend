<<<<<<< HEAD
import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

const ParentDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aquí puedes limpiar tokens, datos de usuario, etc.
    localStorage.removeItem('authToken'); 
    navigate("/login");
  };

  const menuItems = [
    { label: "Notas de mi hijo", path: "/padre/notas" },
    { label: "Asistencia de mi hijo", path: "/padre/asistencia" },
    { label: "Mensajes", path: "/padre/mensajes" },
    { 
      label: "Cerrar sesión",
      action: handleLogout,
      isButton: true,
    },
  ];

  return (
    <Layout menuItems={menuItems}>
      <h1 className="text-2xl font-bold">Panel del Padre de Familia</h1>
      <p>Consulta el progreso y asistencia de tu hijo aquí.</p>
    </Layout>
  );
};

export default ParentDashboard;
=======

import { useNavigate } from "react-router-dom";
export default function AdminDashboard() {
 
  const navigate = useNavigate();
  const handleLogout = () => {
    // Aquí podrías limpiar el localStorage si estás almacenando el login
    // localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <div className="p-8 bg-gradient-to-r from-green-400 to-yellow-200 min-h-screen">
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Panel del Padre de Familia
        </h1>
        <p className="mb-6">Bienvenido, has iniciado sesión como <strong>Padre de Familia</strong>.</p>

        <button
          onClick={handleLogout}
          className="bg-orange-500 text-white px-4 py-2 rounded-2xl hover:bg-green-500 transition"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}


>>>>>>> 0ffb3716a33ab13948139a1981f5ab894079ea17
