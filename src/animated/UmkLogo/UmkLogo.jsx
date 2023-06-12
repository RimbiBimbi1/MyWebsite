import styles from './UmkLogo.module.css';

import logo from './umkLogo.svg';

export const UmkLogo = ({ fired }) => {
  return (
    <div className={`${styles.worldKeepOnTurnin} ${fired ? styles.causeItWontBeTooLong : ''}`}>
      <a
        href="https:/www.mat.umk.pl/"
        target={'_blank'}
        title={'Naciśnij, aby przejść do strony WMiI'}
      >
        <img src={logo} alt="logo UMK" />
      </a>

      {/*<span className={}></span>*/}
    </div>
  );
};
