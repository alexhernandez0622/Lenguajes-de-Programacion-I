// Enunciado: Calcular la suma de todos los elementos en un array.
const numeros = [1, 2, 3, 4, 5];  // Se define un array de números.
let suma = 0;  // Se inicializa una variable para almacenar la suma.

// Solución:
for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];  // Se suma cada elemento del array al resultado acumulado.
}
console.log("La suma de los elementos es:", suma);  // Se imprime la suma.

