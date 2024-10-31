// Importa el framework Express
const express = require('express');
// Importa el middleware bodyParser para analizar datos de solicitud en formato JSON
const bodyParser = require('body-parser');
// Importa el módulo MySQL para interactuar con la base de datos MySQL
const mysql = require('mysql');
// Importa la biblioteca bcrypt para el cifrado de contraseñas
const bcrypt = require('bcrypt');
// Importa el módulo path para manejar rutas de archivos y directorios
const path = require('path');

// Crea una instancia de la aplicación Express
const app = express();
// Establece el puerto en el que el servidor escuchará las solicitudes
const port = 3000;

// Crea una conexión a la base de datos MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blueplanet'
});

// Establece la conexión a la base de datos MySQL
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conexión a la base de datos establecida');
});

// Configura el middleware bodyParser para analizar datos de solicitud codificados en URL
app.use(bodyParser.urlencoded({ extended: true }));
// Configura Express para servir archivos estáticos desde el directorio 'public'
app.use(express.static('public'));

// Define la ruta para la página de inicio
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Define la ruta para la página de inicio de sesión
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login', 'login.html'));
});

// Define la ruta para la página de registro
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'register', 'registro.html'));
});

// Maneja las solicitudes POST para iniciar sesión
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const query = 'SELECT * FROM usuario WHERE username = ?';
    // Realiza una consulta a la base de datos para obtener el usuario con el nombre de usuario proporcionado
    db.query(query, [username], (err, result) => {
        if (err) {
            throw err;
        }
        // Verifica si se encontró un usuario con el nombre de usuario proporcionado
        if (result.length > 0) {
            const hashedPassword = result[0].password;
            // Compara la contraseña proporcionada con la contraseña almacenada usando bcrypt
            bcrypt.compare(password, hashedPassword, (err, bcryptResult) => {
                if (bcryptResult) {
                    // Si las contraseñas coinciden, devuelve un objeto JSON con exists: true
                    res.json({ exists: true });
                } else {
                    // Si las contraseñas no coinciden, devuelve un objeto JSON con exists: false
                    res.json({ exists: false });
                }
            });
        } else {
            // Si no se encuentra ningún usuario, devuelve un objeto JSON con exists: false
            res.json({ exists: false });
        }
    });
});

// Maneja las solicitudes POST para registrar un nuevo usuario
app.post('/register', (req, res) => {
    const { name, username, password } = req.body;
    const saltRounds = 10;
    const insertUserQuery = 'INSERT INTO usuario (name, username, password) VALUES (?, ?, ?)';
    
    // Verifica si el nombre de usuario ya está en uso
    const checkUsernameQuery = 'SELECT * FROM usuario WHERE username = ?';
    db.query(checkUsernameQuery, [username], (err, result) => {
        if (err) {
            throw err;
        }
        
        if (result.length > 0) {
            // Si el nombre de usuario ya está en uso, devuelve un error con un mensaje JSON
            return res.status(400).json({ error: 'El nombre de usuario ya está en uso' });
        }
        
        // Si el nombre de usuario no está en uso, procede con el registro
        bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
            if (err) {
                throw err;
            }

            // Inserta el nuevo usuario en la base de datos
            db.query(insertUserQuery, [name, username, hashedPassword], (err, result) => {
                if (err) {
                    throw err;
                }
                // Devuelve un objeto JSON con registered: true si el registro fue exitoso
                res.json({ registered: true });
            });
        });
    });
});

// Define la ruta para la página de inicio después del inicio de sesión
app.get('/home', (req, res) => {
    // Aquí puedes enviar el archivo home.html
    res.sendFile(path.join(__dirname, 'home.html'));
});

// Define una nueva ruta para cerrar sesión
app.get('/logout', (req, res) => {
    // Realiza cualquier tarea de cierre de sesión necesaria y redirige al usuario a la página de inicio de sesión
    res.redirect('/login');
});

// Escucha las solicitudes en el puerto especificado
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
