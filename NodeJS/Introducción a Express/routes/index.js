// Importa el módulo Express.
const express = require('express');

// Crea una instancia de un Router de Express.
const router = express.Router();

// Define una ruta para la página de inicio ('/').
router.get('/', (req, res) => {
  // Renderiza la vista 'home.ejs' y pasa un título dinámico.
  res.render('home', { title: 'Página de Inicio' });
});

// Exporta el enrutador para que pueda ser utilizado en otros archivos.
module.exports = router;
