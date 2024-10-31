import React from 'react'; // Importa React
import ReactDOM from 'react-dom/client'; // Importa ReactDOM
import App from './App'; // Importa el componente principal App
import './styles.css'; // Importa los estilos

// Renderiza el componente App dentro del elemento con id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
