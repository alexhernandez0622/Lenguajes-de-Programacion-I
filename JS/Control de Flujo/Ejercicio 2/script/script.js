function calcularDescuento() {
    // Obtener el valor ingresado por el usuario
    const precio = parseFloat(document.getElementById("precio").value);

    let descuento;

    // Calcular el descuento basado en el precio
    if (precio >= 100000 && precio < 500000) {
      descuento = 10;
    } else if (precio >= 500000 && precio < 1000000) {
      descuento = 20;
    } else if (precio >= 1000000) {
      descuento = 30;
    } else {
      descuento = 0;
    }

    // Calcular el precio final después del descuento
    const precioFinal = precio - (precio * (descuento / 100));

    // Mostrar el resultado en el elemento <p> con id "resultado"
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.textContent = "El precio final con descuento es: $" + precioFinal.toFixed(2);
  }