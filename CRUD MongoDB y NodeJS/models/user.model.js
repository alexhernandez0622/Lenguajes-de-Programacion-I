// models/user.model.js
const mongoose = require('mongoose'); // Importar mongoose

// Crear el esquema del usuario
const userSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Campo obligatorio
    email: { type: String, required: true, unique: true }, // Campo obligatorio y único
});

// Exportar el modelo de usuario
module.exports = mongoose.model('User', userSchema);
