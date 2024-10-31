// Se crea un array llamado "nombres" para almacenar los nombres ingresados.
nombres = [];

// Función que se ejecuta cuando se intenta insertar un nombre en la lista.
function insertarNombre(evt) {
    // Previene que el formulario se envíe y la página se recargue.
    evt.preventDefault();

    // Obtiene el valor del campo de entrada de nombre.
    let nombre = document.getElementById("nombre").value;

    // Comprueba si el campo de nombre está vacío.
    if (nombre == "") {
        alert("El nombre no puede estar vacío");
    } else if (!existeNombre(nombre)) {
        // Si el nombre no existe en la lista, se crea una opción HTML para agregarlo a la lista.
        let opcion = "<li> " + nombre + "</li>";

        // Obtiene el elemento de lista por su ID.
        let lista = document.getElementById("lista-nombres");

        // Agrega la nueva opción a la lista de nombres en el documento HTML.
        lista.innerHTML += opcion;

        // Agrega el nombre a la lista de nombres en el array "nombres".
        nombres.push(nombre);

        // Muestra una alerta indicando que el nombre se ha insertado con éxito.
        alert("Se ha insertado el nombre");
    } else {
        // Muestra una alerta indicando que el nombre ya existe en la lista.
        alert("Existe el nombre");
    }
}

// Función que verifica si un nombre ya existe en la lista de nombres.
function existeNombre(nombre) {
// Utiliza el método "find" para buscar un nombre dentro del array "nombres".
// La función dentro de "find" compara cada elemento del array "nombres" con el nombre proporcionado (en minúsculas y sin espacios en blanco) para determinar si hay coincidencia.

// Esta línea de código compara dos cadenas de texto (nombres) después de aplicarles dos operaciones:
// 1. "element.trim()" elimina los espacios en blanco al principio y al final de la cadena.
// 2. "toLowerCase()" convierte toda la cadena a minúsculas para que la comparación sea insensible a las mayúsculas y minúsculas.

// La comparación verifica si la cadena "element" (un nombre del array) es igual a la cadena "nombre" (el nombre proporcionado) después de haber aplicado ambas operaciones.
const nombreEncontrado = nombres.find(element => element.trim().toLowerCase() === nombre.trim().toLowerCase());


    // Si se encuentra el nombre, devuelve true; de lo contrario, devuelve false.
    if (nombreEncontrado) {
        return true;
    } else {
        return false;
    }
}
