// app.js

const connectDB = require('./config'); // Conectar a MongoDB
const User = require('./models/User'); // Importar el modelo de usuario

// Función principal asíncrona
const main = async () => {
    await connectDB(); // Conectar a MongoDB

    // Crear un usuario
    const newUser = new User({ name: 'John Doe', email: 'johndoe@example.com', age: 30 });
    await newUser.save(); // Guardar en MongoDB
    console.log('Usuario creado:', newUser);

    // Leer usuarios
    const users = await User.find();
    console.log('Usuarios:', users);

    // Actualizar usuario
    const updatedUser = await User.findOneAndUpdate(
        { email: 'johndoe@example.com' }, // Buscar por email
        { age: 31 },                      // Cambiar la edad
        { new: true }                     // Devolver el usuario actualizado
    );
    console.log('Usuario actualizado:', updatedUser);

    // Eliminar usuario
    await User.deleteOne({ email: 'johndoe@example.com' });
    console.log('Usuario eliminado');
};

main(); // Ejecutar función principal
