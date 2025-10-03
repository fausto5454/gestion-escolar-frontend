import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

const TeacherDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aquí puedes limpiar tokens, datos de usuario, etc.
    localStorage.removeItem('authToken'); 
    navigate("/login");
  };

  const menuItems = [
    { label: "Mis Clases", path: "/docente/clases" },
    { label: "Asistencia", path: "/docente/asistencia" },
    { label: "Calificaciones", path: "/docente/calificaciones" },
    { 
      label: "Cerrar sesión",
      action: handleLogout,
      isButton: true,
    },
  ];

  return (
    <Layout menuItems={menuItems}>
      <h1 className="text-2xl font-bold">Panel del Docente</h1>
      <p>Bienvenido, aquí puedes gestionar tus clases y estudiantes.</p>
    </Layout>
  );
};

export default TeacherDashboard;