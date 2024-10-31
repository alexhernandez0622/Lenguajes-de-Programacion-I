// Ejercicio: Utiliza una expresión regular para validar un formato de correo electrónico.
let correoElectronico = "usuario@dominio.com";
let expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (expresionRegular.test(correoElectronico)) {
  console.log("El formato del correo electrónico es válido.");
} else {
  console.log("El formato del correo electrónico no es válido.");
}
