// Inicializaremos una variable que nos iniciliace el servidor
const express = require("express");

//Le estoy proporcionando la ruta de los archivos y elementos qque utilizaremos en el proyecto
const path = require("path");

//Crearemos una aplicación con el servidor de express
const app = express();

app.use(express.static('public'));
//El "/" nos ayuda a ubicar todos los archivos que están dentro de mi proyecto
app.get("/", (req, res)=>{
    //el join nos ayuda a unir todos los argumentos que especifiquemos
    // El path nos ayuda a ubicar los archivos que queremos insertar
    //El sendFile nos ayuda a transferir el archivo a la ruta dada
    res.sendFile(path.join(__dirname + "/index.html"));
});

//Activaremos las conexiones
//El listen nos ayuda a activar la conexión
app.listen(4000, () => {
    console.log("el servidor corriendo en el puerto" , 4000);
});

