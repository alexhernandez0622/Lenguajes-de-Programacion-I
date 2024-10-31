// server.js
const express = require('express'); // Importar express
const connectDB = require('./config/db'); // Importar la función de conexión a DB
const userRoutes = require('./routes/user.routes'); // Importar las rutas de usuario
require('dotenv').config(); // Cargar variables de entorno

const app = express(); // Crear la aplicación Express
connectDB(); // Conectar a la base de datos

app.use(express.json()); // Middleware para parsear JSON
app.use('/api/users', userRoutes); // Usar rutas de usuarios

const PORT = process.env.PORT || 5000; // Definir el puerto
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`); // Mensaje de inicio
});
