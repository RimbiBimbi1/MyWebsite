import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export const ScrollTop = () => {
  const path = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return <Outlet />;
};
