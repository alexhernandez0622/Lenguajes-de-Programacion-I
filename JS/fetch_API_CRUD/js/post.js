document.addEventListener('DOMContentLoaded', function() 
{
    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function(event) 
    {
        event.preventDefault(); // Evita que se envíe el formulario de forma tradicional

        // Obtener los valores de los campos del formulario
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const email = document.getElementById('email').value;
        const edad = document.getElementById('edad').value;
        const sexo = document.getElementById('sexo').value;
        const clave = document.getElementById('clave').value;

        // Crear un objeto con los datos del formulario
        const datos = 
        {
            nombre: nombre,
            apellido: apellido,
            email: email,
            edad: edad,
            sexo: sexo,
            clave: clave
            
        };

        // Configurar las opciones para la solicitud POST
        const opciones = 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        };

        // URL a la que se enviarán los datos
        const url = 'http://localhost:8080/CRUDRepo/CrearPersona'; // Coloca tu URL correcta aquí

        // Realizar la solicitud POST utilizando fetch
        fetch(url, opciones)
            .then(response => response.json())
            .then(data => {
                console.log('Respuesta del servidor:', data);
                // Aquí puedes agregar cualquier acción adicional después de enviar los datos
            })
            .catch(error => console.error('Error al enviar los datos:', error));
    });
});
