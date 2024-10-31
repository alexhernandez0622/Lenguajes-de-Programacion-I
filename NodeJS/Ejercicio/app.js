// Inicializaremos una variable que nos inicie el despliegue del servidor
const express = require("express");

// Proporcionar la ruta de los archivos y elementos que utilizaremos en el proyecto
const path = require("path");

// Creando una aplicación que se desplegará en el servidor de express (live server)
const app = express();

// Establecer el middleware para servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Ruta para la página de inicio
app.get("/", (req, res)=> {
    /* 
    El join nos ayuda a unir todos los argumentos
    El path nos ayuda a ubicar los archivos que queremos insertar
    El sendFile nos ayuda a transferir el archivo a la ruta dada
     */
    res.sendFile(path.join(__dirname, "index.html"));
});

// Activar las conexiones para desplegar nuestro aplicativo en un puerto
const PORT = process.env.PORT || 4000; // Usando el puerto definido en la variable de entorno o el puerto 4000
app.listen(PORT, () => {
    console.log("El servidor está corriendo en el puerto", PORT);
});
