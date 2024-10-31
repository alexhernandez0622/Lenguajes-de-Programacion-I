// config/db.js
const mongoose = require('mongoose');
require('dotenv').config(); // Cargar variables de entorno desde .env

// Conectar a MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB conectado');
    } catch (error) {
        console.error('Error de conexión:', error.message);
        process.exit(1); // Salir si hay un error
    }
};

module.exports = connectDB; // Exportar la función de conexión
