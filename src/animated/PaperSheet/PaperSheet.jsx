import styles from './PaperSheet.module.css';
import before from './before.jpg';

export const PaperSheet = () => {
  return (
    <div className={styles.container}>
      <a href="https://github.com/RimbiBimbi1/IPT" target={'_blank'}>
        <img src={before} alt="Zdjęcie przed obróbką" className={styles.photo} />
      </a>

      {/*<span className={}></span>*/}
    </div>
  );
};