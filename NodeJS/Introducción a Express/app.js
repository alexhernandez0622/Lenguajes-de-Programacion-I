// Importa el módulo Express.
const express = require('express');

// Crea una instancia de la aplicación Express.
const app = express();

// Define el puerto en el que escuchará el servidor.
const port = 3000;

// Configura EJS como el motor de plantillas.
app.set('view engine', 'ejs');

// Configura la carpeta 'public' para servir archivos estáticos como CSS.
app.use(express.static('public'));

// Importa las rutas desde el archivo index.js dentro de la carpeta 'routes'.
const indexRouter = require('./routes/index');

// Usa las rutas definidas en 'index.js' para las peticiones a la raíz ('/').
app.use('/', indexRouter);

// Inicia el servidor y escucha las peticiones en el puerto definido.
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
