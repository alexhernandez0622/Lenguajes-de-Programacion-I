const { Model, DataTypes } = require('sequelize'); // Importar Model y DataTypes
const sequelize = require('../config/database'); // Importar la configuración de la base de datos

// Definir el modelo User
class User extends Model {}
User.init({
    name: {
        type: DataTypes.STRING, // Tipo de dato STRING
        allowNull: false, // No puede ser nulo
    },
    email: {
        type: DataTypes.STRING, // Tipo de dato STRING
        allowNull: false, // No puede ser nulo
        unique: true, // Debe ser único
    },
}, {
    sequelize, // Pasar la instancia de Sequelize
    modelName: 'User', // Nombre del modelo
});

// Exportar el modelo User
module.exports = User;
