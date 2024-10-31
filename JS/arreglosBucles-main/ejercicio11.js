/*Crear un programa que me permita encontrar el número máximo en un array*/

//Definir la variable con el arreglo de datos
const array1 = [8, 25, 40, 80, 101];

// Inicializar la función que buscará el numero máximo del array
// los (...) hace referencia al spread operator (copiar datos)
const maximoArray = array => Math.min(...array);

//Imprimir resultado del # máximo
// Salida esperada: 101
console.log(maximoArray(array1));