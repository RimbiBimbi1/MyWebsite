import styles from './Layout.module.css';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import { Outlet } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
export const Layout = () => {
  const {theme} = useTheme()
  return (
      <div className={`${styles.container} ${theme.colors}`}>
        <Header />
        <Outlet />
        <Footer />
      </div>

  );

};