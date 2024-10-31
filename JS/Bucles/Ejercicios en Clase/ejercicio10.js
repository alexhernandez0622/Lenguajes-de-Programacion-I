// Array de días de la semana
const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

// Inicializamos un contador
let dia = 0;

// Bucle do-while que recorre el array de días de la semana
do {
    // Switch que muestra el día correspondiente según el valor de dia
    switch (dia) {
        case 0:
            console.log("Hoy es " + diasSemana[dia]);
            break;
        case 6:
            console.log("Mañana será " + diasSemana[dia]);
            break;
        default:
            console.log("El siguiente día es " + diasSemana[dia]);
            break;
    }
    // Incrementamos dia para pasar al siguiente día
    dia++;
} while (dia < diasSemana.length);
