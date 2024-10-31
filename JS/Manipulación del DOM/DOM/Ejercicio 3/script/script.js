function generarTabla() {
    // Esta línea obtiene los datos que se inserten en el campo del input por parte del usuario
    const numero = parseInt(document.getElementById("numero").value);
  
    // Muestra una alerta de SweetAlert2 antes de generar la tabla
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esto generará la tabla. ¿Deseas continuar?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, generar tabla',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      // Si el usuario hace clic en "Sí, generar tabla", procede a generar la tabla
      if (result.isConfirmed) {
        // el método querySelector necesita que le especifiquen qué tipo de elementos quieren capturar, ya sea un id, una clase o una etiqueta
        const tablaBody = document.querySelector("#tabla tbody");
  
        // Iniciamos un ciclo solamente que se realizará 10 veces y arrancará desde la posición o el índice 1
        for (let i = 1; i <= 10; i++) {
          // el valor con el que se va a multiplicar
          const resultado = numero * i;
          // Nos muestre en forma de tabla los resultados de las multiplicaciones
          const row = document.createElement("tr");
          const numeroCell = document.createElement("td");
          const resultadoCell = document.createElement("td");
  
          // Esta línea nos ayuda a mostrar el número que se insertó
          numeroCell.textContent = numero;
  
          // Esta línea nos ayuda a mostrar los resultados en la tabla
          resultadoCell.textContent = resultado;
  
          // El appendChild nos ayuda a ingresar los elementos de forma continua, o sea, un elemento por debajo de la otra
          row.appendChild(numeroCell);
          row.appendChild(resultadoCell);
          // TablaBody está capturando los datos de row y nos los muestra en una posición en específica del HTML para que se visualicen
          tablaBody.appendChild(row);
        }
      }
    });
  }
  