// Importar el paquete de express
const express = require('express');

// Crear una instancia para que reciba el servidor de Express
const app = express();

// Definir el puerto en donde se desplegara el servidor
const port = 3200;

// Configurar el EJS como el motor de plantillas de mi aplicación web
app.set('view engine', 'ejs');

// Configurar la carpeta public para servir los archivos estáticos
app.use(express.static('public'));

// Importar las rutas desde el archivo index.js dentro de la carpeta routes
const indexRouter = require('./routes/index');

// Usar las rutas definidad de index.js para las peticiones a la raíz
app.use('/' , indexRouter);

// Iniciar el servidor y que proyecte los datos en el puerto que especificamos
app.listen(port, () => {
    console.log(`Servidor escuchando en el http://localhost:${port}`);
})



