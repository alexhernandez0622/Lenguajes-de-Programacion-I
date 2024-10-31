// Solicita al usuario ingresar un número y lo convierte en un valor numérico, luego lo almacena en la variable 'numero'.
let numero = Number(prompt("Ingrese un número: "));

// Inicia un bucle 'for' que recorre números desde 2 hasta 'numero'.
for (let i = 2; i <= numero; i++) {
  // Inicializa una variable 'esPrimo' en 'true'. Se usará para verificar si 'i' es un número primo.
  let esPrimo = true;

  // Inicia un bucle 'for' que recorre números desde 2 hasta la raíz cuadrada de 'i'.
  for (let j = 2; j <= Math.sqrt(i); j++) {
    // Comprueba si 'i' es divisible por 'j'. Si es divisible, 'i' no es primo, por lo que 'esPrimo' se establece en 'false' y se sale del bucle.
    if (i % j === 0) {
      esPrimo = false;
      break;
    }
  }

  // Si 'esPrimo' sigue siendo 'true', significa que 'i' es un número primo, por lo que se muestra en la consola.
  if (esPrimo) {
    console.log(i);
  }
}
