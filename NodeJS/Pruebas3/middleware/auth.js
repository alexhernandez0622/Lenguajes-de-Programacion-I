// Verificar si el usuario está autorizado

function checkAuth(req, res, next) {
    const {authorization} = req.headers;
    // Verificar si la solicitud contiene un encabezado de autorizacion
    if(authorization && authorization === "Bearer secretToken") {
        // Si la autorización es válida, llamamos a next para que la solicitud continue su curso
        next();
    } else {
        // Si no hay autorización o los datos son incorrectos, enviará un código de estado de 403
        res.status(403).json({message: 'Usuario no autorizado'});
    }
}

// Exportamos el middleware para poder usarlos en otros archivos
module.exports = checkAuth;