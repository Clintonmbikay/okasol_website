import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Vérifier que window existe (SSR compatible)
    if (typeof window !== 'undefined') {
      // Utiliser setTimeout pour s'assurer que le DOM est prêt
      setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 0);
    }
  }, [pathname]);

  return null;
}
