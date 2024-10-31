// Importamos el módulo 'chalk' instalado usando npm para dar estilo a la consola
const chalk = require('chalk');

// Importamos el módulo de tareas personalizado desde la carpeta 'modules'
const todo = require('./modules/todoModule');

// Usamos 'chalk' para imprimir un mensaje inicial estilizado
console.log(chalk.blue('Bienvenido al gestor de tareas!'));

// Añadimos algunas tareas usando el módulo 'todo'
todo.addTask('Aprender Node.js');
todo.addTask('Practicar ejercicios de JavaScript');
todo.addTask('Hacer un proyecto personal');

// Listamos todas las tareas
console.log(chalk.green('Tareas actuales:'));
todo.listTasks(); // Llama a la función que muestra la lista de tareas

// Eliminamos una tarea por índice (en este caso, la segunda tarea: índice 1)
console.log(chalk.yellow('\nEliminando la segunda tarea...'));
todo.removeTask(1);

// Listamos las tareas después de la eliminación
console.log(chalk.green('\nTareas después de la eliminación:'));
todo.listTasks();
