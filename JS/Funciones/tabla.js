// Importa el módulo readline de Node.js para interactuar con la entrada del usuario
const readline = require('readline');

// Crea una interfaz de lectura (readline interface) para leer datos desde la entrada estándar (stdin) y escribir en la salida estándar (stdout)
const rl = readline.createInterface({
  input: process.stdin,  // Utiliza la entrada estándar para leer datos (teclado)
  output: process.stdout  // Utiliza la salida estándar para escribir datos (consola)
});

// Define una función llamada tablaMultiplicacion
function tablaMultiplicacion() {
  // Solicita al usuario que ingrese un número y espera a respuesta
  rl.question('Ingrese el número: ', (numero) => {
    // Convierte la entrada del usuario (que está en formato de cadena) a un número entero
    numero = parseInt(numero);

    // Inicia un bucle que se ejecutará 10 veces, i se incrementa de 1 a 10
    for (let i = 1; i <= 10; i++) {
      /* Muestra en la consola la multiplicación del número ingresado por el usuario y 
      el valor actual de i en formato de cadena */
      console.log(`${numero} x ${i} = ${numero * i}`);
    }

    // Cierra la interfaz de lectura, lo que permite que el programa termine
    rl.close();
  });
}

// Invoca (llama) la función tablaMultiplicacion para ejecutarla
tablaMultiplicacion();

