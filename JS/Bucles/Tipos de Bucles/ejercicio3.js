// Este programa recorre una lista de números y utiliza break para detenerse en el número 7,
// y continue para saltarse los números pares
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let i = 0;

do {
    let numero = numeros[i];
    
    // Si el número es 7, terminamos el ciclo
    if (numero === 7) {
        console.log("Número 7 encontrado, terminando ciclo.");
        break; // Rompe el ciclo
    }
    
    // Si el número es par, lo saltamos
    if (numero % 2 === 0) {
        i++; // Incrementamos el índice antes de continuar
        continue; // Saltamos a la siguiente iteración
    }
    
    console.log("Número impar: " + numero);
    i++; // Incrementamos el índice
} // El while (i < numeros.length) asegura que el ciclo finalice una vez que se haya recorrido todo el arreglo, o antes si se encuentra el número 7 y se ejecuta el break.
while (i < numeros.length);
