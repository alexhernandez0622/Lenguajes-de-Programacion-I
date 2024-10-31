// Enunciado: Sumar los elementos de las filas de una matriz.
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  const sumasFilas = [];
  

  // Inicio de un bucle for...of que itera sobre cada fila de la matriz
for (let fila of matriz) {
    // Declaración de una variable llamada sumaFila e inicialización en 0 para almacenar la suma de los elementos de la fila actual
    let sumaFila = 0;

    // Inicio de un bucle for...of anidado que itera sobre cada elemento de la fila actual
    for (let elemento of fila) {
        // Se suma cada elemento de la fila al valor acumulado en sumaFila
        sumaFila += elemento;
    }

    // Se añade la suma de la fila al array sumasFilas
    sumasFilas.push(sumaFila);
}

// Impresión en la consola de un mensaje que muestra las sumas de las filas almacenadas en el array sumasFilas
console.log("Sumas de las filas:", sumasFilas);

  