import styles from './Header.module.css';
import { useTheme } from '../../hooks/useTheme';
import { themes } from '../../common/themes';
import { Link } from 'react-router-dom';

export const Header = () => {
  const { theme, setTheme } = useTheme();

  const cycleThemes = () => {
    if (theme === themes[0]) {
      setTheme(themes[1]);
    } else setTheme(themes[0]);
  };

  return <nav className={`row ${styles.Header}`}>
    <ul className={`row ${styles.menu}`}>
      <li>
        <Link to='https://www.linkedin.com/in/michał-szczepański-9b9927266/'
              target={'_blank'}
              rel={'noreferrer'}

        >
          <h2>Michał Szczepański</h2>
        </Link>
      </li>
      <li>
        <Link to='/'>Strona główna</Link>
      </li>
      <li>
        <Link to='/projects'>Projekty</Link>
      </li>
      <li>
        <Link to='/hobby'>Hobby</Link>
      </li>
      <li>
        <Link to='/contact'>Kontakt</Link>
      </li>
      <li
        onClick={() => cycleThemes()}
        className={styles.themeIcon}
      >
        <span>{theme.icon}</span>
      </li>
    </ul>

  </nav>;
};