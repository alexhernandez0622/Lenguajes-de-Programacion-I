/**
 * Enunciado: Contar la cantidad de elementos mayores a un valor en un array usando función flecha y loop
 * @type {number[]} array6 - Array de números para la operación
 * @type {number} valorUmbral - Umbral para comparar con los elementos del array
 */
const array6 = [10, 25, 15, 30, 5];
const valorUmbral = 20;

/**
 * Solución: Función que cuenta la cantidad de elementos mayores a un valor en un array.
 * @param {number[]} array - Array de números para la operación
 * @param {number} umbral - Umbral para comparar con los elementos del array
 * @returns {number} - Cantidad de elementos mayores al umbral
 */
const contarMayores = (array, umbral) => array.reduce((count, num) => (num > umbral ? count + 1 : count), 0);

// Imprimir resultado de la cuenta de elementos mayores al umbral
console.log(contarMayores(array6, valorUmbral)); // Salida esperada: 2

