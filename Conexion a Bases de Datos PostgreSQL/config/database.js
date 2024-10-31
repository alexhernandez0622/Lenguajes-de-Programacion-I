// Importar Sequelize y dependencias
const { Sequelize } = require('sequelize');
require('dotenv').config(); // Cargar variables de entorno

// Crear una instancia de Sequelize para conectarse a PostgreSQL
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres', // Usar el dialecto PostgreSQL
});

// Probar la conexión
sequelize.authenticate()
    .then(() => console.log('Conexión a la base de datos establecida.'))
    .catch(err => console.error('No se pudo conectar a la base de datos:', err));

module.exports = sequelize; // Exportar la instancia de Sequelize
