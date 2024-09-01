import React, { useState, useEffect } from 'react';

const RetryWrapper = ({ children, maxRetries = 5, retryDelay = 1000 }) => {
  const [showComponent, setShowComponent] = useState(false);
  const [retries, setRetries] = useState(0);

  useEffect(() => {
    let retryTimeout;

    const attemptRender = () => {
      try {
        // Aquí puedes incluir la lógica para comprobar si el componente ha cargado correctamente
        // Por simplicidad, vamos a simular esto con una condición aleatoria
        if (Math.random() > 0.2) {
          setShowComponent(true);
          return;
        } else {
          throw new Error('Failed to load');
        }
      } catch (error) {
        if (retries < maxRetries) {
          retryTimeout = setTimeout(() => {
            setRetries(retries + 1);
            attemptRender();
          }, retryDelay);
        }
      }
    };

    attemptRender();

    return () => clearTimeout(retryTimeout);
  }, [retries, maxRetries, retryDelay]);

  return showComponent ? children : <div>Loading...</div>;
};

export default RetryWrapper;
