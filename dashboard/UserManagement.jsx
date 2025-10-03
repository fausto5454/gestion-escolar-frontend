// UserManagement.jsx
import React, { useState, useEffect } from "react";
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";
import SearchBar from "../components/SearchBar";

const UserManagement = () => {
  // Estado principal para almacenar la lista de usuarios
  const [users, setUsers] = useState([]);
  // Estado para controlar el formulario de búsqueda
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("all");
  // Estado para controlar la visibilidad del formulario de creación/edición
  const [isFormVisible, setIsFormVisible] = useState(false);
  // Estado para almacenar los datos del formulario (creación o edición)
  const [formData, setFormData] = useState({});
  // Nuevo estado para el modal de confirmación de eliminación
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  // Efecto para cargar los usuarios iniciales (datos de prueba)
  useEffect(() => {
    // Aquí es donde normalmente harías una llamada a la API para obtener los usuarios
    const dummyUsers = [
      { id: 1, name: "Juan Perez", email: "juan@example.com", role: "Docente" },
      { id: 2, name: "Maria Garcia", email: "maria@example.com", role: "Estudiante" },
      { id: 3, name: "Carlos Lopez", email: "carlos@example.com", role: "Admin" },
    ];
    setUsers(dummyUsers);
  }, []);

  // ----------------- Funciones del CRUD -----------------

  // Función para manejar los cambios en el formulario (input y select)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Función para manejar el envío del formulario (Crear o Actualizar)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
    // Lógica para ACTUALIZAR un usuario existente
      const updatedUsers = users.map((user) =>
        user.id === formData.id ? { ...formData } : user
      );
      setUsers(updatedUsers);
    } else {
      // Lógica para CREAR un nuevo usuario
      const newUser = {
        ...formData,
        id: Date.now(), // Asignamos un ID único
      };
      setUsers([...users, newUser]);
    }
    // Ocultar el formulario y limpiar los datos después de enviar
    setIsFormVisible(false);
    setFormData({});
  };

  // Función para manejar el clic en el botón "Editar"
  const handleEditClick = (userToEdit) => {
    setFormData(userToEdit);
    setIsFormVisible(true);
    };

  // Función para abrir el modal de confirmación de eliminación
  const openDeleteModal = (user) => {
    setUserToDelete(user);
    setIsDeleteModalOpen(true);
  };

  // Función para cerrar el modal
  const closeDeleteModal = () => {
    setUserToDelete(null);
    setIsDeleteModalOpen(false);
  };

  // Función para confirmar la eliminación
  const confirmDelete = () => {
    if (userToDelete) {
      const updatedUsers = users.filter((user) => user.id !== userToDelete.id);
      setUsers(updatedUsers);
      closeDeleteModal();
    }
  };

  // Función para mostrar el formulario de creación de usuario
  const handleCreateUserClick = () => {
    setIsFormVisible(true);
    setFormData({});
  };

  // Función para ocultar el formulario
  const handleCancel = () => {
    setIsFormVisible(false);
    setFormData({});
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Gestión de Usuarios</h1>
      <div className="bg-gray-100 p-6 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <SearchBar 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm}
            filterRole={filterRole}
            setFilterRole={setFilterRole}
          />
          <button 
            onClick={handleCreateUserClick} 
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Crear Usuario
          </button>
        </div>

        {isFormVisible ? (
          <UserForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        ) : (
          <UserList 
            users={users} 
            handleEdit={handleEditClick}
            handleDelete={openDeleteModal} // Se usa la nueva función para abrir el modal
          />
        )}
      </div>

      {/*         Modal de confirmación para eliminar */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl w-96">
            <h3 className="text-lg font-bold">Confirmar Eliminación</h3>
            <p className="mt-4">¿Estás seguro de que quieres eliminar a {userToDelete?.name}?</p>
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

export default UserManagement;
