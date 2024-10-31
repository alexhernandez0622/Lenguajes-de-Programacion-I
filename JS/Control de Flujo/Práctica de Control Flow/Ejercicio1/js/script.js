// Crear un pop-up que le pida al usuario que ingrese su nombre y muestre un mensaje de bienvenida

// Solicitar al usuario que ingrese su nombre
let nombre = prompt("Ingrese su nombre:");

// Verificar si el usuario ingresó un nombre
 if(nombre) {
    // Mostrar un mensaje de bienvenida
    Swal.fire({
        title: '!Bienvenido!',
        text: `Hola, ${nombre}`,
        icon: 'success',
    });
 } else {
    // Mostrar un mensaje de error si el usuario no ingreso un nombre
    Swal.fire({
        title: 'Error de Datos',
        text: 'Debes ingresar un nombre en el campo',
        icon: 'error',
    })
 }