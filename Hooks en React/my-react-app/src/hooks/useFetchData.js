// src/hooks/useFetchData.js

import { useState, useEffect } from 'react';

// Hook personalizado para realizar una solicitud de datos
const useFetchData = (url) => {
  const [data, setData] = useState(null);    // Estado para almacenar datos
  const [loading, setLoading] = useState(true); // Estado para saber si está cargando
  const [error, setError] = useState(null);    // Estado para errores

  useEffect(() => {
    // Función para hacer la solicitud de datos
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Error al cargar datos');
        const result = await response.json();
        setData(result);  // Almacena los datos
      } catch (err) {
        setError(err.message);  // Almacena cualquier error
      } finally {
        setLoading(false);  // Finaliza la carga
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };  // Retorna los datos y estados
};

export default useFetchData;
