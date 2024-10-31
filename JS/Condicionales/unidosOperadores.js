// Pedimos al usuario que ingrese su edad y almacenamos el valor en la variable "edad"
let edad = parseInt(prompt("Por favor, ingresa tu edad:"));

// Pedimos al usuario que ingrese si tiene un documento de identidad válido y almacenamos el valor en la variable "documentoValido"
let documentoValido = prompt("¿Tienes cédula de ciudadanía? (responde 'sí' o 'no'):");

// Verificamos si la edad es mayor o igual a 18 Y si tiene un documento de identidad válido
/*La función toLowerCase() en JavaScript es un método que se utiliza para convertir una cadena de texto a minúsculas. */
if (edad >= 18 && documentoValido.toLowerCase() === 'sí') {
    // Si ambas condiciones son verdaderas, imprimimos que es elegible para solicitar el pasaporte
    console.log("Eres elegible para solicitar el pasaporte");
} 
// Verificamos si la edad es menor de 18 Y si tiene un documento de identidad válido
else if (edad < 18 && documentoValido.toLowerCase() === 'sí') {
    // Si la primera condición es falsa pero la segunda es verdadera, imprimimos que es demasiado joven para solicitar el pasaporte
    console.log("Eres demasiado joven para solicitar el pasaporte");
} 
// Verificamos si la edad es mayor o igual a 18 Y si no tiene un documento de identidad válido
else if (edad >= 18 && documentoValido.toLowerCase() !== 'sí') {
    // Si la primera condición es verdadera pero la segunda es falsa, imprimimos que no es elegible y necesita un documento de identidad válido
    console.log("No eres elegible para solicitar el pasaporte, necesitas un documento de identidad válido");
} 
// Si ninguna de las condiciones anteriores es verdadera, significa que la edad es menor de 18 y no tiene un documento de identidad válido
else {
    // En este caso, imprimimos que no es elegible y necesita ser mayor de edad y tener un documento de identidad válido
    console.log("No eres elegible para solicitar el pasaporte, necesitas ser mayor de edad y tener un documento de identidad válido");
}
