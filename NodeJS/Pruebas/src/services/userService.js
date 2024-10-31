// Simular una bdd con un array de datos
const users = [
    { id: 1, name: 'Alexander Hernandez', email: 'alex@gmail.com'},
    { id: 2, name: 'Carlos Campo', email: 'ccampo2005@hotmail.com'}
];

// Función para obtener todos los usuarios
const getAllUsers = () => {
    return users;
};


// Función para encontrar un usuario por su ID
const getUserById = (id) => {
    return users.find(user => user.id === id)
};


// Exportar las funciones para que puedan ser usadas en otros módulos
module.exports = {
    getAllUsers,
    getUserById
};