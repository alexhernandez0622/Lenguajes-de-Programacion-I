document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que se envíe el formulario de forma tradicional

        // Obtener los valores de los campos del formulario
        const id = document.getElementById('id').value;
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const edad = document.getElementById('edad').value;
        const sexo = document.getElementById('sexo').value;
        const clave = document.getElementById('clave').value;

        // Crear un objeto con los datos del formulario
        const datos = {
            id: id,
            nombre: nombre,
            apellido: apellido,
            email: email,
            edad: edad,
            sexo: sexo,
            clave: clave
        };

        // Configurar las opciones para la solicitud PUT
        const opciones = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        };

        // URL a la que se enviará la solicitud PUT
        const url = 'http://localhost:8080/CRUDRepo/ModificarPersona'; // Reemplaza con tu URL correcta

        // Realizar la solicitud PUT utilizando fetch
        fetch(url, opciones)
            .then(response => response.json())
            .then(data => {
                console.log('Respuesta del servidor (PUT):', data);
                // Puedes agregar acciones adicionales después de recibir la respuesta
            })
            .catch(error => console.error('Error al enviar la solicitud PUT:', error));
    });
});
