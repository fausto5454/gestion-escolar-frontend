import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import AdminDashboard from '../dashboard/AdminDashboard.jsx';
import TeacherDashboard from '../dashboard/TeacherDashboard.jsx';
import StudentDashboard from '../dashboard/StudentDashboard.jsx';
import ParentDashboard from '../dashboard/ParentDashboard.jsx';
import AuxiliarDashboard from '../dashboard/AuxiliarDashboard.jsx';
import Login from './Login.jsx'; // Asegúrate de importar Login si no lo has hecho

const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem('token');
  const userRol = localStorage.getItem('rol')?.trim().toLowerCase();

  if (!token) {
    return <Navigate to="/" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(userRol)) {
    console.warn("Acceso denegado para el rol:", userRol);
    return <Navigate to="/" replace />;
  }

  return children;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/docente"
        element={
          <ProtectedRoute allowedRoles={["docente"]}>
            <TeacherDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/estudiante"
        element={
          <ProtectedRoute allowedRoles={["estudiante"]}>
            <StudentDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/padre"
        element={
          <ProtectedRoute allowedRoles={["padre"]}>
            <ParentDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/auxiliar"
        element={
          <ProtectedRoute allowedRoles={["auxiliar"]}>
            <AuxiliarDashboard />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
