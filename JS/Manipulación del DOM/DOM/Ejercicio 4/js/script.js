
// Obtenemos el elemento <h1> por su ID
let tituloH1 = document.getElementById('titulo');

// Obtenemos el botón por su ID
let cambiarBoton = document.getElementById('cambiarBoton');

// Definimos una función para cambiar el título
function cambiarTitulo() {
    // Pedimos al usuario que introduzca el nuevo título
    let nuevoTitulo = prompt('Introduce el nuevo título:');
    
    // Verificamos si se proporcionó un título y si el usuario no hizo clic en "Cancelar"
    if (nuevoTitulo !== null) {
        // Cambiamos el contenido del elemento <h1> con el nuevo título
        tituloH1.textContent = nuevoTitulo;
    }
}

// Asociamos la función al evento 'click' del botón
cambiarBoton.addEventListener('click', cambiarTitulo);