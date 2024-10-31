// npm install sweetalert2
import Swal from 'sweetalert2'; // Importa SweetAlert2
/*npm install 
 El error que aparece, "'text' is missing in props validation", se debe a que no se está validando el prop text en el componente TaskItem. Este aviso suele aparecer cuando se está utilizando ESLint con reglas que requieren la validación de las propiedades (props) en los componentes.

Para solucionar esto, puedes utilizar PropTypes para validar el tipo de text y asegurarte de que se pase correctamente al componente. Aquí te muestro cómo hacerlo:*/
import PropTypes from 'prop-types';

function AlertButton({ name }) {
  // Función para mostrar el alert
  const showAlert = () => {
    Swal.fire({
      title: '¡Hola!',
      text: `Bienvenido a la aplicación, ${name || 'visitante'}!`, // Muestra el nombre o 'visitante'
      icon: 'success', // Tipo de alert
      confirmButtonText: 'Aceptar' // Texto del botón de confirmación
    });
  };

  return (
    <button onClick={showAlert} className="alert-button">
      Mostrar Saludo {/* Texto del botón */}
    </button>
  );
}

// Definición de las PropTypes
AlertButton.propTypes = {
  name: PropTypes.string,
};

export default AlertButton
