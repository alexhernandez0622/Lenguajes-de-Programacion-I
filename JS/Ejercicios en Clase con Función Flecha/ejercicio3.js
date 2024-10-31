/**
 * Enunciado: Encontrar el número máximo en un array usando función flecha y loop
 * @type {number[]} array4 - Array de números donde encontrar el máximo
 */
const array4 = [8, 16, 5, 12, 20];

/**
 * Solución: Función que encuentra el número máximo en un array.
 * @param {number[]} array - Array de números donde encontrar el máximo
 * @returns {number} - Número máximo en el array
 */
const maximoArray = array => Math.max(...array);

// Imprimir resultado del máximo
console.log(maximoArray(array4)); // Salida esperada: 20
