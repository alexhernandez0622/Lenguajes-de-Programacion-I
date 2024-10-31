 // Seleccionar el botón por su ID
 const deleteButton = document.getElementById('deleteButton');
    
 // Añadir un event listener al botón para que ejecute una función al hacer clic
 deleteButton.addEventListener('click', () => {
   // Mostrar una alerta de confirmación utilizando SweetAlert2
   Swal.fire({
     title: '¿Estás seguro?',
     text: "No podrás revertir esto",
     icon: 'warning',
     showCancelButton: true,
     confirmButtonText: 'Sí, eliminar',
     cancelButtonText: 'No, cancelar'
   }).then((result) => {
     // Si el usuario confirma la eliminación
     if (result.isConfirmed) {
       // Eliminar el elemento del DOM
       document.getElementById('itemToDelete').remove();
       // Mostrar una alerta de éxito
       Swal.fire(
         '¡Eliminado!',
         'El elemento ha sido eliminado.',
         'success'
       );
     }
   });
 });