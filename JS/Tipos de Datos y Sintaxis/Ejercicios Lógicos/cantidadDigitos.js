// Definimos una función para contar la cantidad de dígitos de un número entero

/*toString() convierte un número en una cadena de texto. Por ejemplo, 123.toString() se convierte en "123"*/

/*
El return en la función contarDigitos(numero) se utiliza para devolver el resultado de contar la cantidad de dígitos en el número proporcionado.*/
function contarDigitos(numero) {
    let digitos = numero.toString().length;
    return digitos;
}

// Llamamos a la función con el número deseado
let numero = 12345;
let cantidadDigitos = contarDigitos(numero);

// Mostramos la cantidad de dígitos por consola
console.log("El número " + numero + " tiene " + cantidadDigitos + " dígitos.");
