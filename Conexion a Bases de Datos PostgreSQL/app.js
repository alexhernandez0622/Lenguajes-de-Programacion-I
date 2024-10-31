// Importar dependencias
const express = require('express'); // Framework web
const dotenv = require('dotenv'); // Manejo de variables de entorno
const userRoutes = require('./routes/userRoutes'); // Rutas de usuarios
const app = express(); // Inicializar express

dotenv.config(); // Cargar variables de entorno

// Middleware para parsear JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Servir archivos estáticos

// Usar las rutas de usuarios
app.use('/api/users', userRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000; // Definir el puerto
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
