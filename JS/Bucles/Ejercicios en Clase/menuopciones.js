/*
// Declaración de una variable llamada diaDeLaSemana y asignación del valor "Lunes"
let diaDeLaSemana = "Lunes";

// Declaración de una variable llamada actividad sin asignarle un valor inicial
let actividad;

// Estructura de control switch que evalúa el valor de la variable diaDeLaSemana
switch (diaDeLaSemana) {
    // En caso de que diaDeLaSemana sea "Lunes"
    case "Lunes":
        // Asignación del valor "Reunión de equipo de trabajo" a la variable actividad
        actividad = "Reunión de equipo de trabajo";
        // Interrupción del switch para evitar la ejecución de los otros casos
        break;

    // En caso de que diaDeLaSemana sea "Miercoles"
    case "Miercoles":
        // Asignación del valor "Clase de Python" a la variable actividad
        actividad = "Clase de Python";
        // Interrupción del switch para evitar la ejecución de los otros casos
        break;

    // En caso de que diaDeLaSemana no coincida con ninguno de los casos anteriores
    default:
        // Asignación del valor "Día Libre, a descansar se dijo!!" a la variable actividad
        actividad = "Día Libre, a descansar se dijo!!";
}

// Impresión en la consola de un mensaje que incluye el valor de diaDeLaSemana y actividad
console.log(`Hoy es ${diaDeLaSemana}, y la actividad es: ${actividad}`);
*/

/*Realizar u*/
// Usando el operador ternario
let diaDeLaSemana = "Lunes";
let actividad =
  diaDeLaSemana === "Lunes" ? "Reunión de equipo"
    : diaDeLaSemana === "Miércoles"
    ? "Clase de yoga"
    : "Día libre";

console.log(`Hoy es ${diaDeLaSemana}, y la actividad es: ${actividad}`);
