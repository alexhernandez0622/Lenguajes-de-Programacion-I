import { useState } from 'react'; // Importa el hook useState
import AlertButton from './components/AlertButton'; // Importa el componente AlertButton
import Greeting from './components/Greeting'; // Importa el componente Greeting

function App() {
  // Estado para almacenar el nombre del usuario
  const [name, setName] = useState(''); // Inicializa el estado con un string vacío

  // Función para actualizar el estado con el nombre ingresado
  const handleNameChange = (event) => {
    setName(event.target.value); // Actualiza el estado con el valor del input
  };

  return (
    <div className="app-container">
      <h1>Bienvenido a Mi Aplicación React</h1>
      <input
        type="text"
        placeholder="Ingresa tu nombre"
        value={name}
        onChange={handleNameChange} // Llama a la función cuando cambia el input
      />
      <Greeting name={name} /> {/* Pasa el nombre como prop al componente Greeting */}
      <AlertButton name={name} /> {/* Pasa el nombre como prop al componente AlertButton */}
    </div>
  );
}

export default App; // Exporta el componente App
