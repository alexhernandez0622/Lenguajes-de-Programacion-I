// app.js

// Importamos el módulo 'express' para usarlo en nuestro servidor.
const express = require('express');

// Creamos una instancia de la aplicación Express.
const app = express();

// Definimos el puerto en el que se ejecutará el servidor.
const port = 3000;

// Middleware de Express para analizar el cuerpo de las solicitudes en formato JSON.
app.use(express.json());

// Importamos las rutas desde el archivo 'routes/index.js'.
const routes = require('./routes/index');

// Usamos las rutas importadas en la aplicación.
app.use('/', routes);

// Middleware de manejo de errores global.
app.use((err, req, res, next) => {
  res.status(500).json({ message: 'Algo salió mal en el servidor' });
});

// Iniciamos el servidor para que escuche en el puerto especificado.
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
