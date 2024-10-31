// userService.js
// Este archivo maneja la lógica relacionada con los usuarios

// Simulamos una base de datos con un array de usuarios
const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ];
  
  // Función para obtener todos los usuarios
  const getAllUsers = () => {
    return users;
  };
  
  // Función para encontrar un usuario por su ID
  const getUserById = (id) => {
    return users.find(user => user.id === id);
  };
  
  // Exportamos las funciones para que puedan ser usadas en otros módulos
  module.exports = {
    getAllUsers,
    getUserById
  };
  