/**
 * Enunciado: Comprobar si todos los elementos de un array son positivos usando función flecha y loop
 * @type {number[]} array9 - Array de números para la comprobación
 */
const array9 = [5, -3, 8, 10, 6];

/**
 * Solución: Función que verifica si todos los elementos de un array son positivos.
 * @param {number[]} array - Array de números para la comprobación
 * @returns {boolean} - true si todos los elementos son positivos, false de lo contrario
 */
const todosPositivos = array => array.every(num => num > 0);

// Imprimir resultado de la comprobación
console.log(todosPositivos(array9)); // Salida esperada: false

