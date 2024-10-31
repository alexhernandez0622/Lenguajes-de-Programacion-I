/**
 * Enunciado: Sumar los índices de un array con sus elementos usando función flecha y loop
 * @type {number[]} array5 - Array de números para la operación
 */
const array5 = [4, 7, 2, 9, 5];

/**
 * Solución: Función que suma los índices con sus respectivos elementos en un array.
 * @param {number[]} array - Array de números para la operación
 * @returns {number} - Resultado de la suma de índices con elementos
 */
const sumaIndicesArray = array => array.reduce((total, num, index) => total + index + num, 0);

// Imprimir resultado de la suma de índices con elementos
console.log(sumaIndicesArray(array5)); // Salida esperada: 30