// Definir la URL de la API para realizar la solicitud GET
let url = 'https://jsonplaceholder.typicode.com/posts';

// Utilizar fetch para realizar la solicitud GET a la URL definida
fetch(url)
    // Convertir la respuesta de la API en formato JSON
    .then(response => response.json())
    // Llamar a la función mostrarData con los datos obtenidos
    .then(data => mostrarData(data))
    // Capturar y mostrar cualquier error ocurrido durante la solicitud o procesamiento
    .catch(error => console.log(error));

// Definir la función mostrarData para procesar y mostrar los datos en la tabla HTML
const mostrarData = (data) => {
    // Inicializar una variable para almacenar el contenido HTML de la tabla
    let body = "";
    // Recorrer cada objeto en el array de datos
    for (let i = 0; i < data.length; i++) {
        // Construir una fila de la tabla con los datos del objeto actual
        body += `<tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].title}</td>
                    <td>${data[i].body}</td>
                </tr>`;
    }
    // Insertar las filas construidas dentro del tbody de la tabla en el HTML
    document.getElementById('data').innerHTML = body;
}
