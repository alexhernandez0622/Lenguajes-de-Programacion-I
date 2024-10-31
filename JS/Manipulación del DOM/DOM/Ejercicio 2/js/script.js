function mostrarDatos() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;

    if (nombre === '' || email === '') {
        Swal.fire({
            title: 'Error',
            text: 'Por favor, completa todos los campos',
            icon: 'error'
        });
        return; // Salimos de la función si hay campos vacíos
    }

    Swal.fire({
        title: 'Datos del formulario',
        html: 'Nombre: ' + nombre + '<br>Email: ' + email,
        icon: 'success',
        timer: 600000,  // 10 minutos en milisegundos
        timerProgressBar: true
    });
    

    // Si todo está bien, mostramos los datos de manera dinámica
    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = '<h2>Datos del formulario:</h2>' +
                             '<p><strong>Nombre:</strong> ' + nombre + '</p>' +
                             '<p><strong>Email:</strong> ' + email + '</p>';
    
    // Redireccionar a otra página después de mostrar los datos
    window.location.href = "index.html";
    
    // Podemos hacer más cosas después de mostrar los datos si es necesario
    // Por ejemplo, podemos limpiar el formulario
    document.getElementById("miFormulario").reset();
}

