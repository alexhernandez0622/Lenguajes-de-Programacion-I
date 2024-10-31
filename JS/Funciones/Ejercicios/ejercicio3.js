// Enunciado: Crear una función que determine si un número es par o impar.
// Función: esPar
// Parámetro: num (número)
// Retorno: true si es par, false si es impar.

function esPar(num) {
    // Declaración de la función con un parámetro: num.
    return num % 2 === 0; 
    // Retorna true si el residuo de la división entre num y 2 es 0, indicando que es par.
  }
  
  // Uso de la función:
  const resultadoPar = esPar(6); 
  // Llamada a la función con el argumento 6.
  console.log(resultadoPar); 
  // Imprime el resultado en la consola.
  