/* Calcular la suma de todos los elementos en un array de datos*/

//Definir la variable
//Inicializamos el arreglo de datos dentro de la variable
const numeros = [10, 20, 5, 30, 15]; 
//  Se inicializa una variable para almacenar la suma
let suma = 0;

// Inicializar el bucle
for(let i=0; i < numeros.length; i++)
{
    // Se suma cada elemento del array al resultado acumulado
    suma += numeros[i];
}
console.log("La suma de los elementos es de ", suma);
