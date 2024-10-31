import PropTypes from 'prop-types';

// Crear el componente para mostrar el mensaje de bienvenida en el pop-up
function Greeting({ name }) {
    return(
        <div className="greeting">
            {name ? <h2>Hola, {name}</h2> : <h2>Hola, visitante</h2>}
        </div>
    );
}

Greeting.propTypes = {
    name: PropTypes.string,
};

export default Greeting;
