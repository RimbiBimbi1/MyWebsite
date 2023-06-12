import styles from './JustResearchLogo.module.css';
import logo from './logo512.png';

export const JustResearchLogo = () => {
  return (
    <div className={styles.container}>
      <a href="https://github.com/UMK-PZ2022-Zesp01" target={'_blank'} rel={'noreferrer'}>
        <img src={logo} alt="logo JustResearch" />
      </a>
    </div>
  );
};
