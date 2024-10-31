document.addEventListener('DOMContentLoaded', getUsers); // Cargar usuarios al iniciar

// Función para obtener todos los usuarios
async function getUsers() {
    const response = await fetch('/api/users');
    const users = await response.json();
    const userTableBody = document.querySelector('#userTable tbody');
    userTableBody.innerHTML = ''; // Limpiar tabla antes de añadir

    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
                <button onclick="updateUser(${user.id})">Actualizar</button>
                <button onclick="deleteUser(${user.id})">Eliminar</button>
            </td>
        `;
        userTableBody.appendChild(row); // Añadir fila a la tabla
    });
}

// Función para crear un nuevo usuario
document.getElementById('userForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Evitar el envío del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
    });

    const data = await response.json();
    if (response.ok) {
        swal('Usuario creado', `Nombre: ${data.name}`, 'success');
        getUsers(); // Actualizar lista de usuarios
        document.getElementById('userForm').reset(); // Limpiar formulario
    } else {
        swal('Error', data.error, 'error');
    }
});

// Función para actualizar un usuario
async function updateUser(id) {
    const name = prompt("Nuevo Nombre:");
    const email = prompt("Nuevo Email:");

    if (name && email) {
        const response = await fetch(`/api/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email }),
        });

        const data = await response.json();
        if (response.ok) {
            swal('Usuario actualizado', `Nombre: ${data.name}`, 'success');
            getUsers(); // Actualizar lista de usuarios
        } else {
            swal('Error', data.error, 'error');
        }
    } else {
        swal('Actualización cancelada', '', 'info');
    }
}

// Función para eliminar un usuario
async function deleteUser(id) {
    const confirmed = confirm("¿Estás seguro de eliminar este usuario?");
    if (confirmed) {
        const response = await fetch(`/api/users/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            swal('Usuario eliminado', '', 'success');
            getUsers(); // Actualizar lista de usuarios
        } else {
            const data = await response.json();
            swal('Error', data.error, 'error');
        }
    }
}