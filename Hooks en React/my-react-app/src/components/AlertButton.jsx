// src/components/AlertButton.jsx

// npm install sweetalert2
import Swal from 'sweetalert2';

// Componente de botón con alerta SweetAlert2
const AlertButton = () => {
  // Función para mostrar la alerta
  const showAlert = () => {
    Swal.fire({
      title: '¡Alerta con SweetAlert2!',
      text: 'Esta es una alerta personalizada en React',
      icon: 'success',
      confirmButtonText: '¡Perfecto!',
    });
  };

  return (
    <button onClick={showAlert} className="alert-button">
      Mostrar Alerta
    </button>
  );
};

export default AlertButton;
