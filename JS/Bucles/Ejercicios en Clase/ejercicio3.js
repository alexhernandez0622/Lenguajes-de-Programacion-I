// Enunciado: Filtrar y mostrar solo los números pares de un array.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  // Se define un array de números.

// Solución:
const pares = [];
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    pares.push(numeros[i]);  // Se añaden números pares al array 'pares'.
  }
}
console.log("Números pares:", pares);  // Se imprime el array de números pares.
