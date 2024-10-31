const User = require('../models/User'); // Importar el modelo User

// Obtener todos los usuarios
exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll(); // Buscar todos los usuarios
        res.json(users); // Devolver los usuarios en formato JSON
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener usuarios' }); // Manejar errores
    }
};

// Crear un nuevo usuario
exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body); // Crear un nuevo usuario
        res.status(201).json(user); // Devolver el usuario creado
    } catch (error) {
        res.status(400).json({ error: 'Error al crear usuario' }); // Manejar errores
    }
};

// Actualizar un usuario
exports.updateUser = async (req, res) => {
    const { id } = req.params; // Obtener el ID del usuario a actualizar
    try {
        const user = await User.findByPk(id); // Buscar el usuario por ID
        if (!user) return res.status(404).json({ error: 'Usuario no encontrado' }); // Manejar caso no encontrado
        await user.update(req.body); // Actualizar el usuario
        res.json(user); // Devolver el usuario actualizado
    } catch (error) {
        res.status(400).json({ error: 'Error al actualizar usuario' }); // Manejar errores
    }
};

// Eliminar un usuario
exports.deleteUser = async (req, res) => {
    const { id } = req.params; // Obtener el ID del usuario a eliminar
    try {
        const user = await User.findByPk(id); // Buscar el usuario por ID
        if (!user) return res.status(404).json({ error: 'Usuario no encontrado' }); // Manejar caso no encontrado
        await user.destroy(); // Eliminar el usuario
        res.json({ message: 'Usuario eliminado' }); // Devolver mensaje de éxito
    } catch (error) {
        res.status(400).json({ error: 'Error al eliminar usuario' }); // Manejar errores
    }
};
