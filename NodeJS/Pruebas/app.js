// Módulo principal de la aplicacion que integra los archivos externos

// Importamos el controlador de los usuarios
const userController = require('./src/controllers/userController');

// Simulamos las solicitudes para mostrar en funcionamiento los módulos externos
console.log('Cargando todos los usuarios...');
userController.handleGetAllUsers();

console.log('Cargando usuario con id 1...');
userController.handleGetUserById(1);

console.log('Cargando usuario con id 3...');
userController.handleGetUserById(3);


