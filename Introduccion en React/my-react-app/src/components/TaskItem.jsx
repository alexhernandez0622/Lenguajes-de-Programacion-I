// src/components/TaskItem.jsx
/*npm install 
 El error que aparece, "'text' is missing in props validation", se debe a que no se está validando el prop text en el componente TaskItem. Este aviso suele aparecer cuando se está utilizando ESLint con reglas que requieren la validación de las propiedades (props) en los componentes.

Para solucionar esto, puedes utilizar PropTypes para validar el tipo de text y asegurarte de que se pase correctamente al componente. Aquí te muestro cómo hacerlo:*/
import PropTypes from 'prop-types';

// Componente TaskItem que representa una tarea individual
export function TaskItem({ text }) {
  return (
    <li className="task-item">
      {text}
    </li>
  );
}

// Validación de la prop 'text' usando PropTypes
TaskItem.propTypes = {
  text: PropTypes.string.isRequired,
};
