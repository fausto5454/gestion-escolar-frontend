import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

const StudentDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aquí puedes limpiar tokens, datos de usuario, etc.
    localStorage.removeItem('authToken'); 
    navigate("/login");
  };

  const menuItems = [
    { label: "Mis Cursos", path: "/estudiante/cursos" },
    { label: "Mis Notas", path: "/estudiante/notas" },
    { label: "Asistencia", path: "/estudiante/asistencia" },
    { 
      label: "Cerrar sesión",
      action: handleLogout,
      isButton: true,
    },
  ];

  return (
    <Layout menuItems={menuItems}>
      <h1 className="text-2xl font-bold">Panel del Estudiante</h1>
      <p>Consulta tus cursos, notas y asistencia aquí.</p>
    </Layout>
  );
};

export default StudentDashboard;