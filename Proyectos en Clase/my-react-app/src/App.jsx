import { useState } from "react";
import AlertButton from "./components/AlertButton";
import Greeting from "./components/Greeting";


function App() {
    // Estado para almacenar el nombre del usuario
    const [name, setName] = useState('');
    // Funcion para actualizar el estado con el nombre ingresado
    const handleNameChange = (event) => {
        setName(event.target.value); // Actualizando el estado por el valor que reciba en el input
    };
    
    return (
        <div className="app-container">
            <h1>Aplicación de saludo personalizado</h1>
            <input 
            type="text"
            placeholder="Ingresa tu nombre completo" 
            value={name}
            onChange={handleNameChange} // LLama a la funcion cuando cambia el valor ingresado del input
            /> 
            <Greeting name={name}/>
            <AlertButton name={name}/>
        </div>
    );
}

export default App;