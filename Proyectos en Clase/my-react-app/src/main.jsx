// Importar React
import React from "react";
// Importamos ReactDOM
import ReactDOM from 'react-dom/client';
// Importar el componente principal
import App from './App';
// Importamos los estilos
import './styles.css';

// Renderizar el componente App
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
