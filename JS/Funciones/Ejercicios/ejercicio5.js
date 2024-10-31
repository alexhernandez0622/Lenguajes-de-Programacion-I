// Enunciado: Crear una función que calcule el área de un rectángulo.
// Función: calcularAreaRectangulo
// Parámetros: base (número), altura (número)
// Retorno: El área del rectángulo.

function calcularAreaRectangulo(base, altura) {
    // Declaración de la función con dos parámetros: base y altura.
    const area = base * altura; 
    // Calcula el área del rectángulo.
    return area; 
    // Retorno del resultado.
  }
  
  // Uso de la función:
  const areaRectangulo = calcularAreaRectangulo(4, 5); 
  // Llamada a la función con los argumentos 4 y 5.
  console.log(areaRectangulo); 
  // Imprime el resultado en la consola.
  