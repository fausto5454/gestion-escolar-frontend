<<<<<<< HEAD
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
    <div className="p-8 bg-gradient-to-r from-green-500 to-yellow-200 min-h-screen">
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Panel del Docente
        </h1>
        <p className="mb-6">Bienvenido, has iniciado sesión como <strong>Docente</strong>.</p>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-2xl hover:bg-green-500 transition"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}


>>>>>>> 0ffb3716a33ab13948139a1981f5ab894079ea17
