// Importar la libreria de sweetalert2
import Swal from 'sweetalert2';
// Importar el prop-types
import PropTypes from 'prop-types';

// Crear el componente para inicializar la ventana emergente
function AlertButton({ name }) {
    // Inicializar el alert
    const showAlert = () => {
        Swal.fire({
            title: 'Holaa',
            text: `Bienvenido a la aplicación, ${name || 'visitante'}`,// Muestra el nombre o el visitante
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
    };
    return (
        <button onClick={showAlert} className="alert-button">Mostrar Saludo</button>
    );
}

// Valida si el campo de entrada , esta recibiendo una cadena de texto
AlertButton.propTypes = {
    name: PropTypes.string,
}


export default AlertButton