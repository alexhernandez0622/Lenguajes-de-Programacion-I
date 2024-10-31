// middleware/auth.js

// Middleware personalizado para verificar si el usuario está autorizado.
function checkAuth(req, res, next) {
    const { authorization } = req.headers;
  
    // Verificamos si la solicitud contiene un encabezado de autorización.
    if (authorization && authorization === 'Bearer secretToken') {
      // Si la autorización es válida, llamamos a 'next()' para que la solicitud continúe su curso.
      next();
    } else {
      // Si no hay autorización o es incorrecta, enviamos una respuesta con un código de estado 403 (Prohibido).
      res.status(403).json({ message: 'No autorizado' });
    }
  }
  
  // Exportamos el middleware para poder usarlo en otros archivos.
  module.exports = checkAuth;
  