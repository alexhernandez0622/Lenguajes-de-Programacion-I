// Definimos el módulo matemático
// Exportamos cada función de manera individual para que se pueda usar en otros archivos.


// Función para sumar dos números
function add(a, b) {
    return a + b; // Retorna la suma de los números
  }
  
  // Función para restar dos números
  function subtract(a, b) {
    return a - b; // Retorna la resta de los números
  }
  
  // Función para multiplicar dos números
  function multiply(a, b) {
    return a * b; // Retorna la multiplicación de los números
  }
  
  // Función para dividir dos números
  function divide(a, b) {
    if (b === 0) { // Validamos si el divisor es 0 para evitar división por cero
      return "Error: División por cero";
    }
    return a / b; // Retorna la división de los números
  }
  
  // Exportamos las funciones como parte del módulo
  // Esto permite que otros archivos puedan importar estas funciones y usarlas.
  module.exports = {
    add,
    subtract,
    multiply,
    divide
  };
  