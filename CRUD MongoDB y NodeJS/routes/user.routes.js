// routes/user.routes.js
const express = require('express'); // Importar express
const router = express.Router(); // Crear un enrutador
const userController = require('../controllers/user.controller'); // Importar el controlador de usuario

// Rutas para usuarios
router.post('/', userController.createUser); // Crear usuario
router.get('/', userController.getUsers); // Leer todos los usuarios
router.put('/:id', userController.updateUser); // Actualizar usuario
router.delete('/:id', userController.deleteUser); // Eliminar usuario

module.exports = router; // Exportar las rutas
