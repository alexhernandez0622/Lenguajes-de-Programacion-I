/*Crear un pop-up que le pregunte al usuario si desea recibir notificaciones y que me muestre un msj de si esta de acuerdo o no */

//Inicializar la librería de sweetAlert
Swal.fire({
    title: '¿Quieres recibir noticias de nuestra empresa?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Si',
    cancelButtonText: 'No',
}).then((result) => {
    // Verificar la respuesta del usuario
    if(result.isConfirmed) {
        // Mostrar el mensaje de acuerdo
        Swal.fire('!Acuerdo!', 'Recibirás notificaciones', 'success');
    } else {
        // Mostrar mensaje de desacuerdo
        Swal.fire('!Estás en Desacuerdo', 'No recibirás notificaciones', 'info');
    }
});