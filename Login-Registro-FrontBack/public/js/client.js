// Asegúrate de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    // Manejar el envío del formulario de inicio de sesión
    if ('#loginForm') {
        loginForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            
            if (data.exists) {
                window.location.href = '/indexAlex';
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Correo o contraseña incorrectos!'
                });
            }
        });
    }

    // Manejar el envío del formulario de registro
    if ('#registerForm') {
        registerForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const response = await fetch('/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });
            const data = await response.json();

            if (data.registered) {
                Swal.fire({
                    icon: 'success',
                    title: 'Registro exitoso',
                    text: 'Ahora puedes iniciar sesión'
                }).then(() => {
                    window.location.href = '/login';
                });
            } else if (data.error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: data.error
                });
            }
        });
    }
});
