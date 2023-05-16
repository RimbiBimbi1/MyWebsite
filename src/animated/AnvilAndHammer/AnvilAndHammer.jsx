import styles from './AnvilAndHammer.module.css';

export const AnvilAndHammer = ({fired}) => {
  return (

    <div className={styles.container}>
      <div className={`${styles.hammer} ${fired?styles.swung:""}` }/>
      <div className={styles.sparks}>
        <div className={`${styles.spark} ${fired?styles.flying:""}`}></div>
        <div className={`${styles.spark} ${fired?styles.flying:""}`}></div>
        <div className={`${styles.spark} ${fired?styles.flying:""}`}></div>
      </div>

      <div className={styles.anvil}/>
    </div>

  );

};