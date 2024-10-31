let intentos = 0;

function checkGuess() {
    // Verificar si se han alcanzado los 3 intentos
    if (intentos >= 3) {
        Swal.fire({
            icon: 'info',
            title: '¡Fin de intentos!',
            text: 'Has agotado tus 3 intentos. El número era ' + numeroAleatorio + '.',
        });

        // Reiniciar el contador de intentos
        intentos = 0;
        return;
    }

    // Incrementar el número de intentos
    intentos++;

    // Generar un número aleatorio entre 1 y 10
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    console.log(numeroAleatorio)

    // Obtener el valor ingresado por el usuario
    const numeroAdivinado = parseInt(document.getElementById("guess").value);

    // Comprobar si el número adivinado es igual al número aleatorio
    if (numeroAdivinado === numeroAleatorio) {
        Swal.fire({
            icon: 'success',
            title: '¡Felicidades!',
            text: `Adivinaste el número en ${intentos} intentos.`,
        });

        // Reiniciar el contador de intentos
        intentos = 0;
    } else {
        let mensaje = "No adivinaste el número.";

        // Comprobar si el número adivinado es mayor o menor al número aleatorio
        if (numeroAdivinado > numeroAleatorio) {
            mensaje += " El número que ingresaste es mayor.";
        } else {
            mensaje += " El número que ingresaste es menor.";
        }

        Swal.fire({
            icon: 'error',
            title: '¡Oops!',
            text: `${mensaje} Llevas ${intentos} de 3 intentos permitidos.`,
        });
    }
}
