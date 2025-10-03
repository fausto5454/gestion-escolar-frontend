import React from "react";
<<<<<<< HEAD
import { useNavigate, Outlet, useLocation } from "react-router-dom"; // Se agregó useLocation
import Layout from "./Layout";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Hook para obtener la ubicación actual

  const handleLogout = () => {
    localStorage.removeItem('authToken'); 
    navigate("/"); // Redirigir a la ruta de login
  };

  const menuItems = [
    { 
      label: "Gestión de Usuarios", 
      path: "/admin/usuarios"
    },
    { 
      label: "Gestión Académica", 
      path: "/admin/academico"
    },
    { 
      label: "Reportes", 
      path: "/admin/reportes"
    },
    { 
      label: "Cerrar sesión",
      action: handleLogout,
      isButton: true
    },
  ];

  // Comprobamos si la ruta actual es la principal del panel (/admin)
  const isDashboardHome = location.pathname === "/admin";

  return (
      <Layout menuItems={menuItems}>
      {/* Renderizado condicional:
        - Si estamos en la ruta /admin, muestra el contenido del panel.
        - Si no, el <Outlet /> mostrará el contenido de la ruta anidada.
      */}
      {isDashboardHome ? (
       <>
          <h1 className="text-2xl font-bold">Panel de Administración</h1>
          <p>Bienvenido, Administrador. Aquí puedes gestionar todo el sistema web.</p>
        </>
      ) : (
        <Outlet />
      )}
     </Layout>
  );
};
=======
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
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
          Panel del Administrador
        </h1>
        <p className="mb-6">Bienvenido, has iniciado sesión como <strong>Administrador</strong>.</p>

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

export default AdminDashboard;
