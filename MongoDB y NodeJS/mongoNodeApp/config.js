// Archivo de configuración de MongoDB

// config.js

const mongoose = require('mongoose');
require('dotenv').config(); // Cargar variables de entorno

// Función para conectar a MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Conectado a MongoDB');
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
    }
};

module.exports = connectDB;
