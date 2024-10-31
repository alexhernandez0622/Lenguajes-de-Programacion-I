/* Encontrar el número mayor en un array de números*/

//Definir la variable con el array
const numeros = [50, 31, 18, 1, 2];
// Asignar el elemento a una variable
let mayor = numeros[0];

// Inicializar el bucle
for(let i=0; i < numeros.length; i++) {
    // Inicializamos el condicional
    if(numeros[i] > mayor) {
        // Se actualiza el numero mayor si se encuentra uno
        mayor = numeros[i];
    }
}
 console.log("El numero mayor es: ", mayor);
