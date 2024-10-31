// userController.js
// Este archivo maneja las solicitudes de los usuarios y usa el servicio correspondiente

// Importamos el servicio de usuarios
const userService = require('../services/userService');

// Función para manejar la solicitud de obtener todos los usuarios
const handleGetAllUsers = () => {
  const users = userService.getAllUsers();
  console.log('List of users:', users);
};

// Función para manejar la solicitud de obtener un usuario por ID
const handleGetUserById = (id) => {
  const user = userService.getUserById(id);
  if (user) {
    console.log(`User found:`, user);
  } else {
    console.log(`User with ID ${id} not found.`);
  }
};

// Exportamos las funciones del controlador
module.exports = {
  handleGetAllUsers,
  handleGetUserById
};
