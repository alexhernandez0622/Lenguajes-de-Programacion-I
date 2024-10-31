/**
 * Enunciado: Multiplicar cada elemento de un array por 2 usando función flecha y loop
 * @type {number[]} array3 - Array de números a duplicar
 */
const array3 = [3, 6, 9, 12, 15];


// Utiliza el método map en el array de entrada
  // para aplicar una función a cada elemento del array
const duplicarArray = array => array.map(num => num * 2);

// Imprimir resultado de la duplicación
console.log(duplicarArray(array3)); // Salida esperada: [6, 12, 18, 24, 30]
