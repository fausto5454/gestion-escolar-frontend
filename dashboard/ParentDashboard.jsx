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