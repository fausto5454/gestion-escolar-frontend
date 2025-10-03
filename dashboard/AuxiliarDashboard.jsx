import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

const AuxiliarDashboard = () => {
  const navigate = useNavigate();

  // Menú con botón "Cerrar sesión" como un item especial
  const menuItems = [
    { label: "Registro de Asistencia", path: "/auxiliar/asistencia" },
    { label: "Gestión de Aulas", path: "/auxiliar/aulas" },
    {
      label: "Cerrar sesión",
      action: () => {
        // Aquí puedes limpiar sesión si tienes
        navigate("/login");
      },
      isButton: true, // para saber que no es link normal
    },
  ];

  return (
    <Layout menuItems={menuItems}>
      <h1 className="text-2xl font-bold">Panel del Auxiliar de Educación</h1>
      <p>Gestiona asistencia y aulas aquí.</p>
    </Layout>
  );
};

export default AuxiliarDashboard;
