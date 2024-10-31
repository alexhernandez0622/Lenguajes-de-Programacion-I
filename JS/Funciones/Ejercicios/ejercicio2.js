// Enunciado: Crear una función que devuelva el cuadrado de un número.
// Función: obtenerCuadrado
// Parámetro: num (número)
// Retorno: El cuadrado de num.

function obtenerCuadrado(num) {
    // Declaración de la función con un parámetro: num.
    const cuadrado = num * num; 
    // Calcula el cuadrado del número.
    return cuadrado; 
    // Retorno del resultado.
  }
  
  // Uso de la función:
  const cuadradoDe5 = obtenerCuadrado(5); 
  // Llamada a la función con el argumento 5.
  console.log(cuadradoDe5); 
  // Imprime el resultado en la consola.
  