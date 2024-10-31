/*Crear un pop-up que le solicite al usuario su edad y muestre en un mensaje indicando si es mayor de edad*/

// Solicitar al usuario que ingrese su edad
let edad = prompt("Ingrese su edad");

// Verificar si la edad ingresada es mayor o igual a 18
if(edad >= 18) {
    //Mostrar un mensaje diciendo que eres mayor de edad
    Swal.fire({
        title: 'Mayor de Edad',
        text: 'Eres mayor de edad, puedes ingresar al casino',
        icon: 'success',
    });
} else {
    // Mostrar un mensaje informativo para menores de edad
    Swal.fire({
        title: 'Menor de Edad',
        text: 'Eres menor de edad, no puedes ingresar, sorry !!',
        icon: 'error'
    })
}