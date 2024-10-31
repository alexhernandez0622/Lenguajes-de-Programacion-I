// Enunciado: Crear un nuevo array con los cuadrados de los elementos del original usando función flecha y loop
// Definición de un array llamado array10 con valores [2, 4, 6, 8]
const array10 = [2, 4, 6, 8];

//  crea un nuevo array aplicando la función que eleva al cuadrado cada elemento del array original llamado array.
/*.map(): Es un método de los arrays en JavaScript que se utiliza para iterar sobre cada elemento del array y aplicar una función a cada uno de ellos. Este método devuelve un nuevo array con los resultados de aplicar la función a cada elemento del array original. */
const arrayCuadrados = array => array.map(num => num ** 2);

// Llamada a la función arrayCuadrados con el array array10 como argumento.
// El resultado se imprime en la consola.
console.log(arrayCuadrados(array10));
 // Salida esperada: [4, 16, 36, 64]
