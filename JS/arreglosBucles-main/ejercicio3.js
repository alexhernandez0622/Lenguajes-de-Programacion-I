/*Filtrar y mostrar solo los números pares de un array*/

//Definir la variable con el arreglo de datos
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Inicializar otro arreglo de datos
const pares = [];

// Inicializar el bucle
for (let i=0; i < numeros.length; i++){
    // Inicializar un condicional
    if(numeros[i] % 2 === 0){
        // Se añade y actualiza el arreglo con los números pares encontrados
        pares.push(numeros[i]);
    }
}
console.log("Los numeros pares son: ", pares);