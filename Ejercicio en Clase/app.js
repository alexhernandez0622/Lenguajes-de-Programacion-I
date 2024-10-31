// Inicializar una variable que nos inicie el servidor de express
const express = require("express");
// Proporciona la ruta de los archivos y elementos que utilizaremos en el ejercicio
const path = require("path");
// Crear una variable que desplegara el servidor de express (live server)
const app = express();

// Establecer el middleware para servir los archivos estaticos 
app.use(express.static('public'))

// Crear la ruta para la página de inicio
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname , "index.html"));
});

// Activar las conexiones para desplegar nuestro aplicativo en un puerto
const PORT = process.env.PORT || 4000;
app.listen(PORT , () => {
    console.log("El servidor esta corriendo en el puerto", PORT);
});
