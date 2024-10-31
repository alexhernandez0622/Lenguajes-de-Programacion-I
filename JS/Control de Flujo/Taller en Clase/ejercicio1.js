// Solicita al usuario ingresar un número y lo convierte en un valor numérico, luego lo almacena en la variable 'numero'.
let numero = Number(prompt("Ingrese un número: "));

// Crea un arreglo llamado 'arreglo' con números del 1 al 10.
let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Inicializa una variable 'contador' con un valor de 0, que se usará para contar cuántas veces aparece 'numero' en 'arreglo'.
let contador = 0;

// Inicia un bucle 'for...of' que recorre cada elemento del arreglo 'arreglo'.
for (let numeroArreglo of arreglo) {
  // Comprueba si 'numeroArreglo' es igual a 'numero'.
  if (numeroArreglo === numero) {
    // Si son iguales, incrementa la variable 'contador' en 1, lo que significa que se encontró una coincidencia.
    contador++;
  }
}

// Imprime un mensaje en la consola que muestra cuántas veces aparece 'numero' en 'arreglo'.
console.log("El número " + numero + " aparece " + contador + " veces en el arreglo");
