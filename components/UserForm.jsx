// UserForm.jsx
import React from "react";

const UserForm = ({ formData, handleChange, handleSubmit, onCancel }) => {
  // Determina si el formulario está en modo de edición o creación
  const isEditing = formData && formData.id;

  return (
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">
        {isEditing ? "Editar Usuario" : "Crear Nuevo Usuario"}
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Campo para el nombre */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nombre
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

        {/* Campo para el email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
          </label>
          <input
            type="email"
            id="email" 
            name="email" 
            value={formData.email || ""}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
        />
        </div>

        {/* Campo para la contraseña (solo en modo de creación) */}
        {!isEditing && (
        <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
             </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password || ""}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
              required
            />
         </div>
        )}

        {/* Campo para el rol */}
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-gray-700">
            Rol
          </label>
          <select
            id="role"
            name="role"
            value={formData.role || ""}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            required
          >
            <option value="">Selecciona un rol</option>
            <option value="Admin">Admin</option>
            <option value="Docente">Docente</option>
            <option value="Estudiante">Estudiante</option>
            <option value="Padre">Padre</option>
            <option value="Auxiliar">Auxiliar</option>
          </select>
        </div>

        {/* Botones de acción */}
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
            {isEditing ? "Guardar Cambios" : "Crear Usuario"}
          </button>
       </div>
      </form>
    </div>
  );
};

export default UserForm;
