// src/components/AOSInitializer.tsx
import { useEffect } from 'react';
import 'aos/dist/aos.css'; // Importa el CSS de AOS
import AOS from 'aos';

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init(); // Inicializa AOS cuando el componente se monta
  }, []);

  return null; // Este componente no necesita renderizar nada
};

export default AOSInitializer;