/*Declara una variable llamada "tareas" e inicializa un array vacío. Luego, utiliza funciones de flecha para agregar tareas y mostrar la lista de tareas en un documento HTML.*/

// Declarar una variable que inicializará un arreglo vacío

// Se inicializa un arreglo con los corchetes []
let tareas = [];

// Usaremos funciones de flecha para agregarTarea
const agregarTarea = () => {
    // Obtenemos el elemento de entrada con el id "tarea"
    const tareaInput = document.getElementById("tarea");

    // Obtenemos el valor del campo de entrada
    const tareaTexto = tareaInput.value;

    // Verificamos que el valor no esté vacío
    if (tareaTexto !== "") {
        // Agregamos la tarea al array 'tareas'
        tareas.push(tareaTexto);

        // Limpiamos el campo de entrada
        tareaInput.value = "";

        // Llamamos a la función para mostrar la lista actualizada
        mostrarListatareas();
    }
};

// Utilizaremos funciones de flecha para mostrarListatareas
const mostrarListatareas = () => {
    // Obtenemos el elemento con el id "lista-tareas"
    const listaTareas = document.getElementById("lista-tareas");

    // Limpiamos el contenido html del elemento listaTareas
    listaTareas.innerHTML = "";

    // Recorremos el array 'tareas'
    for (let i = 0; i < tareas.length; i++) {
        // Obtenemos la tarea actual en el índice i
        const tarea = tareas[i];

        // Creamos un nuevo elemento <li> en el documento
        const li = document.createElement("li");

        // Establecemos el texto del elemento <li> con el valor de la tarea
        li.textContent = tarea;

        // Añadimos el elemento <li> a la lista de tareas
        listaTareas.appendChild(li);
    }
};