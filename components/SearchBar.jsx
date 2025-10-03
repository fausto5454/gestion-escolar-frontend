import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm, filterRole, setFilterRole }) => {
  return (
    <div className="flex space-x-4">
      <input
        type="text"
        placeholder="Buscar por nombre..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded-md"
      />
      <select
        value={filterRole}
        onChange={(e) => setFilterRole(e.target.value)}
        className="border p-2 rounded-md"
      >
        <option value="all">Todos los roles</option>
        <option value="Admin">Admin</option>
        <option value="Docente">Docente</option>
        <option value="Estudiante">Estudiante</option>
        <option value="Padre">Padre</option>
        <option value="Auxiliar">Auxiliar</option>
      </select>
    </div>
  );
};

export default SearchBar;