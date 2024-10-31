// Enunciado: Crear una función que calcule el promedio de una lista de números.
// Función: calcularPromedio
// Parámetro: numeros (array de números)
// Retorno: El promedio de los números en la lista.

function calcularPromedio(numeros) {
    // Declaración de la función con un parámetro: numeros (array).
    const sumatoria = numeros.reduce((acc, num) => acc + num, 0); 
    // Utiliza el método reduce para sumar todos los números en el array.
    const promedio = sumatoria / numeros.length; 
    // Calcula el promedio dividiendo la sumatoria entre la cantidad de números.
    return promedio; 
    // Retorno del resultado.
  }
  
  // Uso de la función:
  const listaNumeros = [10, 20, 30, 40, 50]; 
  // Lista de números.
  const promedioLista = calcularPromedio(listaNumeros); 
  // Llamada a la función con la lista de números.
  console.log(promedioLista); 
  // Imprime el resultado en la consola.
  