// Enunciado: Concatenar dos arrays y eliminar duplicados.
const array1 = [1, 2, 3];
const array2 = [3, 4, 5];
let resultado = [...array1];  // Se crea una copia de array1.

// Solución:
for (let i = 0; i < array2.length; i++) {
  if (!resultado.includes(array2[i])) {
    resultado.push(array2[i]);  // Se añaden elementos de array2 a resultado si no están duplicados.
  }
}
console.log("Array concatenado y sin duplicados:", resultado);
