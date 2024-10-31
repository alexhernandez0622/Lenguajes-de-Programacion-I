// Definimos la variable 'diaUsuario' con el día que queremos evaluar
let diaUsuario = 'Jueves';  // Puedes cambiar este valor a cualquier día de la semana

// Función para determinar si un día es laborable o no
function esDiaLaborable(dia) {
    // Utilizamos switch para determinar si el día ingresado es laborable o no
    switch (dia) {
        case 'Lunes':
        case 'Martes':
        case 'Miércoles':
        case 'Jueves':
        case 'Viernes':
            return dia + ' es un día laborable'; // Retornamos que el día es laborable
        case 'Sábado':
        case 'Domingo':
            return dia + ' no es un día laborable'; // Retornamos que el día no es laborable
        default:
            return 'Día no válido'; // En caso de un valor fuera de rango, retornamos "Día no válido"
    }
}

// Convertimos la entrada del usuario a Capitalize para que coincida con los casos del switch
diaUsuario = diaUsuario.charAt(0).toUpperCase() + diaUsuario.slice(1).toLowerCase();

// Mostramos el resultado en la consola
console.log(esDiaLaborable(diaUsuario));
