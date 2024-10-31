/* Concatenar dos arrays y eliminar los datos duplicados*/

// Definir las variables con los arreglos de datos
const array1 = [1, 2, 3];
const array2 = [3, 4, 5];
// Crear una copia del array1
let resultado = [...array1]; 

// Inicializar el bucle
for(let i = 0; i < array2.length; i++) {
    // Inicializamos el condicional
    if (!resultado.includes(array2[i])){
        // Se añaden elementos del array2 al resultado si no están duplicados
        resultado.push(array2[i]);
    }
}

console.log( "El array final es: ", resultado)
