// Función para eliminar una persona mediante su ID
const eliminarPersona = () => {
    // Obtiene el ID ingresado por el usuario
    const id = document.getElementById('idInput').value;

    // URL del endpoint DELETE con el ID proporcionado
    const url = `http://localhost:8080/CRUDRepo/EliminarPersona/${id}`;

    // Solicitud DELETE al servidor
    fetch(url, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            // Si la respuesta es exitosa, recargar los datos de la tabla
            cargarDatos();
        } else {
            // Si hay un error en la respuesta, mostrar mensaje de error
            console.error('Error al eliminar la persona:', response.status);
        }
    })
    .catch(error => console.error('Error en la solicitud DELETE:', error));
};

// Función para cargar los datos de las personas en la tabla
const cargarDatos = () => {
    const url = 'http://localhost:8080/CRUDRepo/ConsultarPersonas';

    fetch(url)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.error('Error al cargar los datos:', error));
};

// Función para mostrar los datos en la tabla HTML
const mostrarData = (data) => {
    let body = "";

    for (let i = 0; i < data.length; i++) {
        body += `<tr><td>${data[i].id}</td><td>${data[i].nombre}</td><td>${data[i].edad}</td></tr>`;
    }

    document.getElementById('data').innerHTML = body;
};

// Cargar datos al cargar la página
window.onload = cargarDatos;
