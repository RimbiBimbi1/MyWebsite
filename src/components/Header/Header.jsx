import styles from './Header.module.css';
import { useTheme } from '../../hooks/useTheme';

import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuSwitch = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`row ${styles.Header}`}>
      <Link
        to="https://www.linkedin.com/in/michał-szczepański-9b9927266/"
        target={'_blank'}
        rel={'noreferrer'}
        className={styles.banner}
      >
        <h2>Michał Szczepański</h2>
      </Link>
      <button type={'button'} onClick={handleMenuSwitch} className={styles.menuButton}>
        ...
      </button>
      <ul className={`row ${styles.menu} ${menuOpen ? styles.open : ''}`}>
        <li>
          <Link to="/" onClick={closeMenu}>
            Strona główna
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={closeMenu}>
            Projekty
          </Link>
        </li>
        <li>
          <Link to="/hobby" onClick={closeMenu}>
            Hobby
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>
            Kontakt
          </Link>
        </li>
        <li onClick={() => setTheme()} className={styles.themeIcon}>
          <span>{theme.icon}</span>
        </li>
      </ul>
    </nav>
  );
};
