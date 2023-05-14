import styles from './Layout.module.css'
import {Outlet} from 'react-router-dom';
import { Header } from '../Header/Header';
import { NavBar } from '../NavBar/NavBar';

export const Layout = () => {

  return(
    <div className={styles.Layout}>
      <Header></Header>
      <NavBar></NavBar>
      <div className={styles.body}><Outlet/></div>

    </div>
  )
};