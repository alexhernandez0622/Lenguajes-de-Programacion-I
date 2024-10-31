/* Filtrar los números pares de un array usando el arrow functions (función flecha)*/

//Definir la variable con el arreglo de datos
const array3 = [10, 15, 20, 25, 30];

//Inicializar la función que e filtrará los números pares que están en el array
const paresArray = array => array.filter(num => num % 2 === 0);

// Imprimir el resultado del filtro
// Salida esperada: [10, 20, 30]
console.log(paresArray(array3));
