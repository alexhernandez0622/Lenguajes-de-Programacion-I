// app.js
// Archivo principal de la aplicación que integra los módulos personalizados

// Importamos el controlador de usuarios
const userController = require('./src/controllers/userController');

// Simulamos solicitudes para mostrar cómo se usan los módulos
console.log('Fetching all users...');
userController.handleGetAllUsers();

console.log('Fetching user by ID 1...');
userController.handleGetUserById(1);

console.log('Fetching user by ID 3...');
userController.handleGetUserById(3);
