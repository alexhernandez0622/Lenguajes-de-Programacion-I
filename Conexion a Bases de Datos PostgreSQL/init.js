// Archivo de inicialización (puedes llamarlo 'init.js')
const sequelize = require('./config/database'); // Importar la configuración de la base de datos
const User = require('./models/User'); // Importar el modelo User

async function init() {
    await sequelize.sync(); // Sincronizar el modelo con la base de datos
    console.log('Base de datos inicializada.');
}

init(); // Llamar a la función de inicialización
