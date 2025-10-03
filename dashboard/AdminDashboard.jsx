import React from "react";
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

export default AdminDashboard;
