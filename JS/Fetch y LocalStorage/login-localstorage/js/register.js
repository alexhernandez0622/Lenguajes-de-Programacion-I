  // Function to handle registration
  function register() {
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // Verificar si el nombre de usuario ya existe en el localStorage
    if (localStorage.getItem(newUsername)) {
        showErrorMessage('Username already exists. Please choose a different one.');
    } else {
       // Guardar el nuevo usuario en el localStorage
        const newUser = { username: newUsername, password: newPassword };
        localStorage.setItem(newUsername, JSON.stringify(newUser));
        showSuccessMessage('Registration successful! You can now log in.');
        // Redireccionar al formulario de inicio de sesión
        window.location.href = "login.html";
    }
}

// Función para mostrar un mensaje de éxito con SweetAlert2
function showSuccessMessage(message) {
    Swal.fire({
        icon: "success",
        title: "Registro Exitoso",
        showConfirmButton: false,
        timer: 300000, // Duración en milisegundos (10 segundos)
        showConfirmButton: false // No mostrar el botón de confirmación
    });
}

// Función para mostrar un mensaje de error con SweetAlert2
function showErrorMessage(message) {
    Swal.fire({
        icon: "error",
  title: "Oops...",
  text: "Los datos que ingresas ya existen, intenta con otro!",
  timer: 300000, // Duración en milisegundos (10 segundos)
  showConfirmButton: false // No mostrar el botón de confirmación
    });
}
