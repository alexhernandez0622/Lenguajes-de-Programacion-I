// Importart el moudlo de express para usarlo como servidor
const express = require('express');
// Crear una instancia para inicializar el servidor
const app = express();
// Definimos el puerto en el que se ejecutará el servidor
const port = 3300;
// Importar las rutas del arhcivo index.js
const routes = require('../routes/index');

// Usamos las rutas del archivo , para importarlas en el servidor
app.use('/' , routes);

//Middleware por si de pronto hay errores
app.use((err, req, res, next) => {
    res.status(500).json({ message: 'Algo salió mal en el servidor, corrigelo'});
});

// Iniciar el servidor para que escuche el puerto que especificamos
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});