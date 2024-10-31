/**Crear un programa que me permita multiplicar cada elemento de un array por 2 */

// Inicializamos la variable con el arreglo de datos
const array2 = [3, 6, 9, 12, 15];

//Inicializar la función para recorrer y multiplicar los datos del array
//El .map se encargará de recorrer el arreglo
const productoArray = array => array.map(num => num * 2);

//Imprimir el resultado de la multiplicación
//Salida esperada: 6, 12, 18, 24, 30
console.log(productoArray(array2));


