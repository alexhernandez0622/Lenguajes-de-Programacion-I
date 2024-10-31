// src/App.jsx

import { useState } from 'react';
import useFetchData from './hooks/useFetchData';
import AlertButton from './components/AlertButton';
import Swal from 'sweetalert2';
import './index.css';

const App = () => {
  const { data, loading, error } = useFetchData('https://jsonplaceholder.typicode.com/posts');
  const [showData, setShowData] = useState(false);

  // Función para alternar el estado de mostrar datos
  const toggleData = () => setShowData(prevState => !prevState);

  return (
    <div className="App">
      <h1>Explora Nuestros Posts Dinámicos</h1>

      {/* Botones siempre visibles */}
      <div className="button-container">
        <AlertButton />  {/* Botón para la alerta */}
        <button onClick={toggleData} className="data-button">
          {showData ? 'Ocultar Posts' : 'Mostrar Posts'}
        </button>
      </div>

      {/* Mensaje de carga, error o posts */}
      {loading && <p>Cargando posts interesantes...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Contenedor de posts, visible solo si showData es verdadero */}
      {showData && data && (
        <div className="posts-container">
          {data.slice(0, 5).map((item) => (
            <div key={item.id} className="post-card">
              <h3 className="post-title">📝 Post #{item.id}: {item.title}</h3>
              <p className="post-description">
                {item.body.length > 80 
                  ? item.body.slice(0, 80) + '...' 
                  : item.body}
              </p>
              <button 
                onClick={() => Swal.fire(`Detalles del Post #${item.id}`, item.body, 'info')}
                className="read-more"
              >
                Leer más
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
