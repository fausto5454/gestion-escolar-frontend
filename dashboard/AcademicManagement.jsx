// src/dashboard/AcademicManagement.jsx
import React, { useState, useEffect } from "react";
import AcademicTable from "../components/AcademicTable";
import AcademicForm from "../components/AcademicForm";

const AcademicManagement = () => {
  const [courses, setCourses] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({});
  // Nuevo estado para el modal de confirmación de eliminación
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [courseToDelete, setCourseToDelete] = useState(null);

  useEffect(() => {
    // Datos de prueba para simular cursos
    const dummyCourses = [
      { id: 1, name: "Matemáticas I", teacher: "Juan Perez", students: 30 },
      { id: 2, name: "Ciencias Sociales", teacher: "Maria Garcia", students: 25 },
      { id: 3, name: "Literatura", teacher: "Carlos Lopez", students: 28 },
    ];
    setCourses(dummyCourses);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      const updatedCourses = courses.map((course) =>
        course.id === formData.id ? { ...formData } : course
      );
      setCourses(updatedCourses);
    } else {
      const newCourse = {
        ...formData,
        id: Date.now(),
      };
      setCourses([...courses, newCourse]);
    }
    setIsFormVisible(false);
    setFormData({});
  };

  const handleEditClick = (courseToEdit) => {
    setFormData(courseToEdit);
    setIsFormVisible(true);
  };

  // Función para abrir el modal de confirmación
  const openDeleteModal = (course) => {
    setCourseToDelete(course);
    setIsDeleteModalOpen(true);
  };

  // Función para cerrar el modal
  const closeDeleteModal = () => {
    setCourseToDelete(null);
    setIsDeleteModalOpen(false);
  };

  // Función para confirmar la eliminación del curso
  const confirmDelete = () => {
    if (courseToDelete) {
      const updatedCourses = courses.filter((course) => course.id !== courseToDelete.id);
      setCourses(updatedCourses);
      closeDeleteModal();
    }
  };

  const handleCreateCourseClick = () => {
    setIsFormVisible(true);
    setFormData({});
  };

  const handleCancel = () => {
    setIsFormVisible(false);
    setFormData({});
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Gestión Académica</h1>
      <div className="bg-white p-6 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <button 
            onClick={handleCreateCourseClick} 
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Crear Curso
          </button>
        </div>
        
        {isFormVisible ? (
          <AcademicForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        ) : (
          <AcademicTable 
            courses={courses} 
            handleEdit={handleEditClick}
            handleDelete={openDeleteModal} // Ahora llama a la función que abre el modal
          />
        )}
      </div>

      {/*         Modal de confirmación para eliminar */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl w-96">
            <h3 className="text-lg font-bold">Confirmar Eliminación</h3>
            <p className="mt-4">¿Estás seguro de que quieres eliminar el curso "{courseToDelete?.name}"?</p>
            <div className="flex justify-end space-x-2 mt-6">
              <button 
                onClick={closeDeleteModal} 
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Cancelar
              </button>
              <button 
                onClick={confirmDelete} 
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AcademicManagement;
