// archivo que obtendra las rutas

// Importar el paquete de express
const express = require('express');

// Crear una instancia de un router (ruta) de express
const router = express.Router();

// Definir la ruta para la página de inicio
router.get('/', (req, res) => {
    // Renderizar la vista de 'home.ejs' y le pondremos un título dinámico
    res.render('home', {title: 'Esta es la Página de Inicio'});
});

// Exportar el archivo para que pueda ser utilizado en otros archivos
module.exports = router;