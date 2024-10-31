import PropTypes from 'prop-types';

function Greeting({ name }) {
  return (
    <div className="greeting">
      {name ? <h2>Hola, {name}!</h2> : <h2>¡Hola, visitante!</h2>}
    </div>
  );
}

// Definición de las PropTypes
Greeting.propTypes = {
  name: PropTypes.string,
};

export default Greeting;
