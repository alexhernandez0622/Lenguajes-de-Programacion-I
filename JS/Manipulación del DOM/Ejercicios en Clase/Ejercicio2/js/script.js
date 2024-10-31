function mostrarDatos() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;

    // Utilizar SweetAlert para mostrar los datos
    Swal.fire({
        title: 'Datos del formulario',
        html: 'Nombre: ' + nombre + '<br>Email: ' + email,
        icon: 'success'
    });
}