 // Seleccionar el botón por su ID
 const alertButton = document.getElementById('alertButton');
    
 // Añadir un event listener al botón para que ejecute una función al hacer clic
 alertButton.addEventListener('click', () => {
   // Mostrar una alerta utilizando SweetAlert2
   Swal.fire({
     title: '¡Hola!',
     text: 'Bienvenido a la Clase de DOM',
     icon: 'success'
   });
 });