/**
 * Enunciado: Filtrar números pares de un array usando función flecha y loop
 * @type {number[]} array2 - Array de números a filtrar
 */
const array2 = [10, 15, 20, 25, 30];

/**
 * Solución: Función que filtra los números pares de un array.
 */
const paresArray = array => array.filter(num => num % 2 === 0);

// Imprimir resultado del filtro
console.log(paresArray(array2)); // Salida esperada: [10, 20, 30]


