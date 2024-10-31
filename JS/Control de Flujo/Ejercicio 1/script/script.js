function checkGuess() {
    // Generar un número aleatorio entre 1 y 10
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    console.log(numeroAleatorio)

    // Obtener el valor ingresado por el usuario
    const numeroAdivinado = parseInt(document.getElementById("guess").value);
   

    // Comprobar si el número adivinado es igual al número aleatorio
    if (numeroAdivinado === numeroAleatorio) {
      alert("¡Felicidades! Adivinaste el número.");
    } else {
      let mensaje = "No adivinaste el número.";

      // Comprobar si el número adivinado es mayor o menor al número aleatorio
      if (numeroAdivinado > numeroAleatorio) {
        mensaje += " El número que ingresaste es mayor.";
      } else {
        mensaje += " El número que ingresaste es menor.";
      }

      alert(mensaje);
    }
  }