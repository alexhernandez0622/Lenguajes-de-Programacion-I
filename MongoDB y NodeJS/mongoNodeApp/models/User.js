// models/User.js

const mongoose = require('mongoose');

// Esquema de usuario
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true }
});

// Modelo de usuario basado en el esquema
const User = mongoose.model('User', userSchema);

module.exports = User;
