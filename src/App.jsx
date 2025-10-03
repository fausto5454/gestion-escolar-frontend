<<<<<<< HEAD
import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Login (carga directa porque es muy ligero)
import Login from "./Login.jsx";

// Lazy load de dashboards (mejor rendimiento)
const AdminDashboard = lazy(() => import("../dashboard/AdminDashboard.jsx"));
const TeacherDashboard = lazy(() => import("../dashboard/TeacherDashboard.jsx"));
const StudentDashboard = lazy(() => import("../dashboard/StudentDashboard.jsx"));
const ParentDashboard = lazy(() => import("../dashboard/ParentDashboard.jsx"));
const AuxiliarDashboard = lazy(() => import("../dashboard/AuxiliarDashboard.jsx"));

// Lazy load para el módulo de gestión de usuarios
const UserManagement = lazy(() => import("../dashboard/UserManagement.jsx"));
const AcademicManagement = lazy(() => import("../dashboard/AcademicManagement.jsx"));

// Componente para proteger rutas según autenticación y rol
const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("token");
  const userRol = localStorage.getItem("rol")?.trim().toLowerCase();
=======
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
>>>>>>> 0ffb3716a33ab13948139a1981f5ab894079ea17

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
<<<<<<< HEAD
    <Suspense fallback={<div className="p-4">Cargando...</div>}>
      <Routes>
        {/* Ruta de Login */}
        <Route path="/" element={<Login />} />

        {/* Rutas para el Admin */}
        <Route path="/admin" element={<ProtectedRoute allowedRoles={["admin"]}>
            <AdminDashboard />
          </ProtectedRoute>}>
          <Route path="usuarios" element={<UserManagement />} />
          <Route path="academico" element={<AcademicManagement/>} />
          <Route path="reportes" element={<div>Reportes</div>} />
        </Route>

        {/* Docente */}
        <Route path="/docente" element={<ProtectedRoute allowedRoles={["docente"]}>
            <TeacherDashboard />
          </ProtectedRoute>}>
          <Route path="clases" element={<div>Mis Clases</div>} />
          <Route path="asistencia" element={<div>Asistencia</div>} />
          <Route path="calificaciones" element={<div>Calificaciones</div>} />
        </Route>

        {/* Estudiante */}
        <Route path="/estudiante" element={<ProtectedRoute allowedRoles={["estudiante"]}>
            <StudentDashboard />
          </ProtectedRoute>}>
          <Route path="cursos" element={<div>Mis Cursos</div>} />
          <Route path="notas" element={<div>Mis Notas</div>} />
          <Route path="asistencia" element={<div>Asistencia</div>} />
        </Route>

        {/* Padre */}
        <Route path="/padre" element={<ProtectedRoute allowedRoles={["padre"]}>
            <ParentDashboard />
          </ProtectedRoute>}>
          <Route path="notas" element={<div>Notas de mi hijo</div>} />
          <Route path="asistencia" element={<div>Asistencia de mi hijo</div>} />
          <Route path="mensajes" element={<div>Mensajes</div>} />
        </Route>

        {/* Auxiliar */}
        <Route path="/auxiliar" element={<ProtectedRoute allowedRoles={["auxiliar"]}>
            <AuxiliarDashboard />
          </ProtectedRoute>}>
          <Route path="asistencia" element={<div>Registro de Asistencia</div>} />
          <Route path="aulas" element={<div>Gestión de Aulas</div>} />
        </Route>

        {/* Redirección por defecto */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;
=======
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
>>>>>>> 0ffb3716a33ab13948139a1981f5ab894079ea17
