// src/components/AcademicForm.jsx
import React from "react";

const AcademicForm = ({ formData, handleChange, handleSubmit, onCancel }) => {
  const isEditing = formData && formData.id;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">
        {isEditing ? "Editar Curso" : "Crear Nuevo Curso"}
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nombre del Curso
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name || ""}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div>
          <label htmlFor="teacher" className="block text-sm font-medium text-gray-700">
            Profesor
          </label>
          <input
            type="text"
            id="teacher" 
            name="teacher" 
            value={formData.teacher || ""}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        
        <div>
          <label htmlFor="students" className="block text-sm font-medium text-gray-700">
            Número de Estudiantes
          </label>
          <input
            type="number"
            id="students" 
            name="students" 
            value={formData.students || ""}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>

        <div className="flex justify-end space-x-2 mt-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            {isEditing ? "Guardar Cambios" : "Crear Curso"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AcademicForm;
