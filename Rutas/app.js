// Importamos el módulo personalizado desde la carpeta 'modules/mathModule.js'
// Usamos './' para indicar que es una ruta relativa y luego la carpeta donde se encuentra el módulo
const math = require('./modules/mathModule');

// Usamos la función 'add' del módulo para sumar dos números
let sum = math.add(10, 5);
console.log(`Suma: ${sum}`); // Mostramos el resultado de la suma

// Usamos la función 'subtract' del módulo para restar dos números
let difference = math.subtract(10, 5);
console.log(`Resta: ${difference}`); // Mostramos el resultado de la resta

// Usamos la función 'multiply' del módulo para multiplicar dos números
let product = math.multiply(10, 5);
console.log(`Multiplicación: ${product}`); // Mostramos el resultado de la multiplicación

// Usamos la función 'divide' del módulo para dividir dos números
let quotient = math.divide(10, 5);
console.log(`División: ${quotient}`); // Mostramos el resultado de la división
