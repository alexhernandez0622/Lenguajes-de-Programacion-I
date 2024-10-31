// Crear un programa que me permita adivinar un número pero que tenga un límite de intentos (3)

// Inicializar la variable que tendrá los intentos
let intentos = 0;

// Inicializar la función para verificar los intentos del usuario y comprobar el número adivinar
function checkGuess() 
{
    // Verificar si se han alcanzado los 3 intentos
    if(intentos >= 3) {
        Swal.fire({
            icon: 'info',
            title: '!Fin de intentos!',
            text: 'Has agotado tus intentos. El número adivinar era' + numeroAleatorio + '.',
        });
        // Reiniciar el contador de intentos
        intentos = 0;
        return;
    }
    // Incrementar el número de intentos
    intentos++;

    // Generar un número aleatorio entre 1 y 10
    let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    console.log(numeroAleatorio);

    // Obtener el valor ingresado por el usuario en el campo de entrada
    const numeroAdivinado = parseInt(document.getElementById("guess").value);

    // Comprobar si el número ingresado es igual al # adivinar.
    if(numeroAdivinado === numeroAleatorio) {
        Swal.fire({
            icon: 'success',
            title: '!Felicidades!',
            text: `Adivinaste el número en ${intentos} intentos.`,
        });
        // Reiniciar el contador de intentos
        intentos = 0;
    } else {
        let mensaje= "No adivinaste el número";

        // Comprobar si el número ingresado es mayor o menor que el que se tiene que adivinar
        if(numeroAdivinado > numeroAleatorio){
            mensaje += " El numero que ingresaste es mayor.";
        } else {
            mensaje += " El numero que ingresaste es menor."
        }
        Swal.fire({
            icon: 'error',
            title: '!Sorry!',
            text: `${mensaje} Llevas ${intentos} de 3 intentos`,
        });
    }
}
