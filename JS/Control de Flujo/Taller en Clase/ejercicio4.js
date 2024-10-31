// Función que verifica si un número dado es primo o no
function esPrimo(numero) {
    // Verifica si el número es menor o igual a 1, en cuyo caso no es primo
    if (numero <= 1) 
    return false;
    
    // Itera desde 2 hasta la raíz cuadrada del número
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      // Si el número es divisible por i, no es primo
      if (numero % i === 0) {
        return false;
      }
    }
    
    // Si el bucle no ha encontrado divisores, el número es primo
    return true;
  }
  
  // Función que genera un array con los primeros n números primos
  function generarPrimos(n) {
    // Array para almacenar los números primos
    const primos = [];
    
    // Inicializa el número en 2, que es el primer número primo
    let numero = 2;
  
    // Continúa hasta que se hayan obtenido los primeros n números primos
    while (primos.length < n) {
      // Si el número actual es primo, agrégalo al array
      if (esPrimo(numero)) {
        primos.push(numero);
      }
      
      // Incrementa el número para verificar el siguiente
      numero++;
    }
  
    // Devuelve el array con los primeros n números primos
    return primos;
  }
  
  // Número de primos que deseamos obtener
  const n = 10;
  
  // Llama a la función para generar los primeros n números primos
  const primerosPrimos = generarPrimos(n);
  
  // Imprime el array resultante en la consola
  console.log(primerosPrimos);
  