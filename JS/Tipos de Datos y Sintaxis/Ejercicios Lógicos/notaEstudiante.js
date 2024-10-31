// Definimos una función llamada "calificarEstudiante" que recibe tres parámetros: nota1, nota2 y nota3.
function calificarEstudiante(nota1, nota2, nota3) {
    // Calculamos el promedio de las tres notas sumándolas y dividiéndolas entre 3.
    let promedio = (nota1 + nota2 + nota3) / 3;
    
    // Comprobamos si el promedio es mayor que 3.0.
    if (promedio > 3.0) {
        // Si el promedio es mayor que 3.0, mostramos "Aprobó" por consola.
        console.log("Aprobó");
    } else {
        // Si el promedio no es mayor que 3.0, mostramos "Reprobó" por consola.
        console.log("Reprobó");
    }
}

// Llamamos a la función "calificarEstudiante" con tres notas específicas (por ejemplo, 4.5, 3.0 y 2.8).
calificarEstudiante(1.5, 3.0, 2.8);
