// Función que genera un número entero aleatorio entre "min" (inclusive) y "max" (exclusivo).
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Se declara una variable llamada "array" y se inicializa con un array vacío.
let array = [];

// Se inicia un bucle "for" con una variable de control "i" inicializada en 1.
// El bucle se ejecutará mientras "i" sea menor o igual a 10.
for (let i = 1; i <= 10; i++) {
    // En cada iteración del bucle, se llama a la función "getRandomInt(1, 100)" para generar un número aleatorio entre 1 (inclusive) y 100 (exclusivo).
    // Luego, ese número aleatorio se agrega al final del array "array" utilizando el método "push()".
    array.push(getRandomInt(1, 100));
}

// Cierra el bucle "for".

// Imprime el contenido del array "array" en la consola.
// Después de que se ejecuta el bucle, el array contendrá 10 números enteros aleatorios entre 1 y 100, y estos números se mostrarán en la consola.
console.log(array);
