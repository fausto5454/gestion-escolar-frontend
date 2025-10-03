// UserList.jsx
import React from "react";

const UserList = ({ users, handleEdit, handleDelete }) => {
  return (
    <div className="overflow-x-auto rounded-lg shadow-md">
      <table className="min-w-full rounded-lg overflow-hidden">
        <thead className="bg-slate-700 text-white">
          <tr className="text-center">
            <th className="py-3 px-6 text-xs font-semibold uppercase tracking-wider">Nombre</th>
            <th className="py-3 px-6 text-xs font-semibold uppercase tracking-wider">Email</th>
            <th className="py-3 px-6 text-xs font-semibold uppercase tracking-wider">Rol</th>
            <th className="py-3 px-6 text-xs font-semibold uppercase tracking-wider">Acciones</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50 transition-colors duration-150 text-center">
              <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
              <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-600">{user.email}</td>
              <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-600">{user.role}</td>
              {/*         CORRECCIÓN: Se eliminó `text-right` y se agregó `flex justify-center` */}
              <td className="py-4 px-6 whitespace-nowrap text-sm font-medium space-x-2 flex justify-center">
                <button 
                  onClick={() => handleEdit(user)} 
                  className="text-indigo-600 hover:text-indigo-900 font-medium"
                >
                  Editar
                </button>
                <button 
                  onClick={() => handleDelete(user)}
                  className="text-red-600 hover:text-red-900 font-medium"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
