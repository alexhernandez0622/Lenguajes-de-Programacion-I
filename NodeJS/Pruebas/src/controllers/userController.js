// Este archivo manejará las solicitudes de los usuarios en base a los services que se inicializaron

// Importamos el servicio de usuarios
const userService = require('../services/userService');

// Función para manejar la solicitud de obtener todos los usuarios
const handleGetAllUsers = () => {
    const users = userService.getAllUsers();
    console.log('Lista de los Usuarios es: ' , users);
};

// Función para manejar la solicitud de obtener un usuario por ID
const handleGetUserById = (id) => {
    const user = userService.getUserById(id);
    // Si el id existe, que nos muestre cuál es el usuario
    if(user) {
        console.log(`Usuario encontrado es: `, user);
    } else {
        console.log(`Usuario no asignado con el id ${id}`);
    }
};

// Exportamos las funciones del controlador
module.exports = {
    handleGetAllUsers,
    handleGetUserById
};

