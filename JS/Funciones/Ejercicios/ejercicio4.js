// Enunciado: Crear una función que concatene dos cadenas de texto.
// Función: concatenarCadenas
// Parámetros: cadena1 (string), cadena2 (string)
// Retorno: La concatenación de cadena1 y cadena2.

function concatenarCadenas(cadena1, cadena2) {
    // Declaración de la función con dos parámetros: cadena1 y cadena2.
    const resultado = cadena1 + cadena2; 
    // Concatenación de las dos cadenas.
    return resultado; 
    // Retorno del resultado.
  }
  
  // Uso de la función:
  const resultadoConcatenacion = concatenarCadenas("Hola", " Mundo"); 
  // Llamada a la función con dos cadenas.
  console.log(resultadoConcatenacion); 
  // Imprime el resultado en la consola.
  