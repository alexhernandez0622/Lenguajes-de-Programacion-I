// Definimos el módulo de lista de tareas
// Cada función permite añadir, eliminar y listar tareas en la consola.

let todoList = []; // Inicializamos una lista vacía para las tareas

// Función para añadir una tarea a la lista
function addTask(task) {
    todoList.push(task); // Añade la tarea al final de la lista
    console.log(`Tarea añadida: "${task}"`); // Confirma que se añadió la tarea
}

// Función para eliminar una tarea de la lista usando el índice
function removeTask(index) {
    if (index >= 0 && index < todoList.length) { // Validamos si el índice es válido
        const removed = todoList.splice(index, 1); // Eliminamos la tarea por el índice
        console.log(`Tarea eliminada: "${removed[0]}"`); // Confirmamos la eliminación
    } else {
        console.log('Índice fuera de rango'); // Mensaje de error si el índice no es válido
    }
}

// Función para listar todas las tareas actuales
function listTasks() {
    console.log('Lista de tareas:');
    todoList.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`); // Muestra cada tarea con su índice
    });
}

// Exportamos las funciones para que puedan ser usadas en otros archivos
module.exports = {
    addTask,
    removeTask,
    listTasks
};
