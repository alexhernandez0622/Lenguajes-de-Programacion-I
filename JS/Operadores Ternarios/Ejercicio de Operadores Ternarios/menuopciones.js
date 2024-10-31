let diaDeLaSemana = "Lunes";
let actividad;

switch (diaDeLaSemana) {
    case "Lunes":
        actividad = "Reunión de equipo de trabajo";
        break;
    case "Miercoles":
        actividad = "Clase de Python";
        break;
    default:
        actividad = "Día Libre, a descansar se dijo!!";
}

console.log(`Hoy es ${diaDeLaSemana}, y la actividad es: ${actividad}`);


// Usando el operador ternario
/*let diaDeLaSemana = "Lunes";
let actividad =
  diaDeLaSemana === "Lunes"
    ? "Reunión de equipo"
    : diaDeLaSemana === "Miércoles"
    ? "Clase de yoga"
    : "Día libre";

console.log(`Hoy es ${diaDeLaSemana}, y la actividad es: ${actividad}`);*/
