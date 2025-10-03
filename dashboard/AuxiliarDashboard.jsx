<<<<<<< HEAD
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
          Panel del Auxiliar de Educación
        </h1>
        <p className="mb-6">Bienvenido, has iniciado sesión como <strong>Auxiliar de Educación</strong>.</p>

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
