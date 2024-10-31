// Definimos una función llamada "calificarEstudiante" que recibe tres parámetros: nota1, nota2 y nota3.
function calificarEstudiante(nota1, nota2, nota3) {
    // Asignamos un porcentaje a cada nota.
    const PORCENTAJE_NOTA1 = 0.3;
    const PORCENTAJE_NOTA2 = 0.3;
    const PORCENTAJE_NOTA3 = 0.4;

    // Calculamos el promedio ponderado de las tres notas.
    let promedioPonderado = (nota1 * PORCENTAJE_NOTA1) + (nota2 * PORCENTAJE_NOTA2) + (nota3 * PORCENTAJE_NOTA3);
    
    // Comprobamos si el promedio ponderado es mayor que 3.0.
    if (promedioPonderado > 3.0) {
        // Si el promedio ponderado es mayor que 3.0, mostramos "Aprobó" por consola.
        console.log("Aprobó");
    } else {
        // Si el promedio ponderado no es mayor que 3.0, mostramos "Reprobó" por consola.
        console.log("Reprobó");
    }
}

// Llamamos a la función "calificarEstudiante" con tres notas específicas (por ejemplo, 4.5, 3.0 y 2.8).
calificarEstudiante(4.5, 3.0, 2.8);
