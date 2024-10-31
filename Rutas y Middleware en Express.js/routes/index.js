// routes/index.js

const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/auth');

// Ruta GET para la página de inicio
router.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a la API!' });
});

// Ruta GET protegida para el perfil
router.get('/profile', checkAuth, (req, res) => {
  res.json({ user: 'Jane Doe', age: 28 });
});

// Ruta POST para crear un nuevo usuario
router.post('/create', (req, res) => {
  const { name, job } = req.body;
  res.status(201).json({ message: 'Usuario creado con éxito', data: { name, job } });
});

// Ruta PUT para actualizar un usuario por ID
router.put('/update/:id', (req, res) => {
  const { id } = req.params;
  const { name, job } = req.body;
  res.json({ message: `Usuario con ID ${id} actualizado con éxito`, data: { id, name, job } });
});

// Ruta DELETE para eliminar un usuario por ID
router.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Usuario con ID ${id} eliminado con éxito` });
});

module.exports = router;
