/*Usando operadores ternarios, realiza un ejercicio en donde me diga que si el valor es par o impar */

// Inicializar la variable
let numero = 7;
let esPar;

if(numero % 2 === 0) {
    esPar = true;
} else {
    esPar = false;
}

console.log(esPar ? "Si es un numero par" : "No es un número par");

/*
// Inicializar una variable que se utilizará cómo operador ternario 
let esPar = numero % 2 === 0 ? true : false;

// Impresión en la consola de un mensaje que depende del valor de la variable esPar
console.log(esPar ? "Es un número par" : "Es un número impar");*/
