// Enunciado: Crear una función que imprima los números del 1 al n.
// Función: imprimirNumeros
// Parámetro: n (número)

function imprimirNumeros(n) {
    // Declaración de la función con un parámetro: n.
    for (let i = 1; i <= n; i++) {
      // Inicia un bucle que itera desde 1 hasta n (inclusive).
      console.log(i); 
      // Imprime el valor actual de i en cada iteración.
    }
  }
  
  // Uso de la función:
  imprimirNumeros(5); 
  // Llamada a la función con el argumento 5.
  