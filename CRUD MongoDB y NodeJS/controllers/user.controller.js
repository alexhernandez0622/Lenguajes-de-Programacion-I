// controllers/user.controller.js
const User = require('../models/user.model'); // Importar el modelo de usuario

// Crear un nuevo usuario
exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body); // Crear una nueva instancia de usuario
        await user.save(); // Guardar el usuario en la base de datos
        res.status(201).json(user); // Enviar respuesta con el usuario creado
    } catch (error) {
        res.status(400).json({ message: error.message }); // Enviar error
    }
};

// Leer todos los usuarios
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find(); // Obtener todos los usuarios
        res.json(users); // Enviar respuesta con los usuarios
    } catch (error) {
        res.status(500).json({ message: error.message }); // Enviar error
    }
};

// Actualizar un usuario
exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Actualizar el usuario
        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' }); // Verificar si el usuario existe
        res.json(user); // Enviar respuesta con el usuario actualizado
    } catch (error) {
        res.status(400).json({ message: error.message }); // Enviar error
    }
};

// Eliminar un usuario
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id); // Eliminar el usuario
        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' }); // Verificar si el usuario existe
        res.json({ message: 'Usuario eliminado' }); // Enviar respuesta de éxito
    } catch (error) {
        res.status(500).json({ message: error.message }); // Enviar error
    }
};
