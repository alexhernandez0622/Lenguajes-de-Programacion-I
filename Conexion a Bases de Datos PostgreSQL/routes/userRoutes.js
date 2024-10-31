const express = require('express'); // Importar express
const router = express.Router(); // Crear un router
const userController = require('../controllers/userController'); // Importar controlador de usuarios

// Definir las rutas para el CRUD de usuarios
router.get('/', userController.getUsers); // Obtener todos los usuarios
router.post('/', userController.createUser); // Crear un nuevo usuario
router.put('/:id', userController.updateUser); // Actualizar un usuario
router.delete('/:id', userController.deleteUser); // Eliminar un usuario

module.exports = router; // Exportar el router
