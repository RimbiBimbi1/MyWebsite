import styles from './Layout.module.css';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import { Outlet } from 'react-router-dom';

export const Layout = () => {

  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );

};