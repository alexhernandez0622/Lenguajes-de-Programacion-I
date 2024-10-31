// Inicializaremos una variable que nos inicie el despliegue del servidor
const express = require("express");
const bodyParser = require('body-parser');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const path = require("path");
const app = express();
const port = 4003;

// Crea una conexión a la base de datos MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bellezaplus'
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conexión a la base de datos establecida');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Asegúrate de que Express pueda analizar JSON
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login', 'login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'register', 'register.html'));
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const query = 'SELECT * FROM usuario WHERE correo = ?';
    db.query(query, [email], (err, result) => {
        if (err) {
            throw err;
        }
        if (result.length > 0) {
            const hashedPassword = result[0].contraseña; // Asegúrate de que el campo de la contraseña es correcto
            bcrypt.compare(password, hashedPassword, (err, bcryptResult) => {
                if (bcryptResult) {
                    res.json({ exists: true });
                } else {
                    res.json({ exists: false });
                }
            });
        } else {
            res.json({ exists: false });
        }
    });
});

app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;
    const saltRounds = 10;
    const inserUserQuery = 'INSERT INTO usuario (nombre, correo, password) VALUES (?, ?, ?)';

    const checkCorreoQuery = 'SELECT * FROM usuario WHERE correo = ?';
    db.query(checkCorreoQuery, [email], (err, result) => {
        if (err) {
            throw err;
        }
        if (result.length > 0) {
            return res.status(400).json({ error: 'El correo de usuario ya está en uso' });
        }
        bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
            if (err) {
                throw err;
            }
            db.query(inserUserQuery, [name, email, hashedPassword], (err, result) => {
                if (err) {
                    throw err;
                }
                res.json({ registered: true });
            });
        });
    });
});

app.get('/getUsers', (req, res) => {
    db.query('SELECT * FROM usuario', (err, result) => {
        if (err) {
            console.error('Error al obtener la lista de usuarios:', err);
            return res.status(500).json({ error: 'Error al obtener la lista de usuarios' });
        }
        res.json(result);
    });
});

app.get('/indexAlex', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'indexAlex.html'));
});

app.get('/logout', (req, res) => {
    res.redirect('/login');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
