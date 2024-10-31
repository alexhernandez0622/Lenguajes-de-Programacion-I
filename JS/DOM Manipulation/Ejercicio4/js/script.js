// Selecciona el elemento del DOM con el ID 'addTask' y agrega un evento 'click' a este elemento
document.getElementById('addTask').addEventListener('click', () => {
  
    // Utiliza la biblioteca Swal.fire para mostrar un cuadro de diálogo
    Swal.fire({
      title: 'Agregar una nueva tarea', // Título del cuadro de diálogo
      input: 'text', // Tipo de entrada (campo de texto)
      showCancelButton: true, // Muestra el botón de cancelar
      inputValidator: (value) => { // Valida la entrada del usuario
        if (!value) { // Si el valor está vacío
          return '¡Necesitas escribir algo!'; // Mensaje de error si el campo está vacío
        }
      }
    }).then((result) => { // Maneja el resultado del cuadro de diálogo
      if (result.isConfirmed) { // Si el usuario confirma la entrada
        const task = result.value; // Toma el valor ingresado
        const taskList = document.getElementById('taskList'); // Selecciona el elemento del DOM con el ID 'taskList'
        const listItem = document.createElement('li'); // Crea un nuevo elemento 'li'
        listItem.textContent = task; // Establece el texto del elemento 'li' con el valor de la tarea
        
        // Agrega un evento 'click' al elemento 'li' para eliminar la tarea
        listItem.addEventListener('click', () => {
          // Utiliza la biblioteca Swal.fire para mostrar un cuadro de diálogo de confirmación
          Swal.fire({
            title: '¿Eliminar tarea?', // Título del cuadro de diálogo
            showCancelButton: true, // Muestra el botón de cancelar
            confirmButtonText: 'Eliminar', // Texto del botón de confirmación
            cancelButtonText: 'Cancelar' // Texto del botón de cancelar
          }).then((result) => { // Maneja el resultado del cuadro de diálogo
            if (result.isConfirmed) { // Si el usuario confirma la eliminación
              taskList.removeChild(listItem); // Elimina el elemento 'li' de la lista de tareas
            }
          });
        });
        
        taskList.appendChild(listItem); // Agrega el elemento 'li' a la lista de tareas
      }
    });
  });
  