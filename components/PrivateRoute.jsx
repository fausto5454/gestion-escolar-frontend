import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("token");
  const userRol = localStorage.getItem("rol")?.trim().toLowerCase();

  // Usuario no autenticado → Login
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // Usuario autenticado pero sin permiso
  if (allowedRoles && !allowedRoles.includes(userRol)) {
    console.warn("Acceso denegado para el rol:", userRol);
    return <Navigate to="/" replace />;
  }

  // Usuario autorizado
  return children;
};

export default PrivateRoute;
