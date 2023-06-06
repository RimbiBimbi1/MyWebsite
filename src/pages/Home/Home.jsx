import styles from './Home.module.css';
import backgrounds from '../../common/backgrounds.module.css';
import { AnvilAndHammer } from '../../animated/AnvilAndHammer/AnvilAndHammer';

import photo from '../../images/photo.png';
import { UmkLogo } from '../../animated/UmkLogo/UmkLogo';
import { useEffect, useRef, useState } from 'react';
import { GitHubLogo } from '../../animated/GitHubLogo/GitHubLogo';
import { useTheme } from '../../hooks/useTheme';

export const Home = () => {
  const themeName = useTheme()?.theme?.name;
  const [fired, setFired] = useState(0);

  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const hobbyRef = useRef(null);

  const [educationHeight, setEducationHeight] = useState(null);
  const [projectsHeight, setProjectsHeight] = useState(null);
  const [hobbyHeight, setHobbyHeight] = useState(null);

  useEffect(() => {
    setEducationHeight(educationRef.current.getBoundingClientRect().bottom+ window.scrollY);
    setProjectsHeight(projectsRef.current.getBoundingClientRect().bottom+ window.scrollY);
    setHobbyHeight(hobbyRef.current.getBoundingClientRect().bottom+ window.scrollY);

  }, []);

  window.onscroll = () => {
    const position = window.innerHeight + window.scrollY;
    if (position > hobbyHeight) {
      setFired(4);
    } else if (position > projectsHeight) {
      setFired(2);
    } else if (position > educationHeight) {
      setFired(1);
    } else setFired(0);
  };


  return <>
    <div className={`${styles.HomeSector}`}>
      <div className={`${styles.wide}`}>
        {/*<h3>O mnie</h3>*/}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam autem consectetur delectus, deserunt
        dolorum expedita harum id iure labore, natus nemo neque nulla odio quia quis, repellendus vero? Atque esse
        fugiat ipsa laboriosam reiciendis? Aut expedita maiores maxime ullam vitae. Delectus dolorum esse maiores minus
        praesentium quod vitae voluptatem.
      </div>
      <div className={`${styles.narrow}`}>
        <img className={styles.photo} src={photo} alt='Moje zdjęcie' />
      </div>
    </div>

    <div ref={educationRef} className={`${styles.HomeSector} ${backgrounds.blueGradient} ${themeName==='dark'?backgrounds.dark:""}`}>
      <div className={`${styles.narrow}`}>
        <UmkLogo fired={fired === 1} />
      </div>
      <div className={`${styles.wide} ${styles.fading} ${fired === 1 ? '' : styles.faded}`}>
        <h3>Wykształcenie</h3>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam autem consectetur delectus, deserunt
        dolorum expedita harum id iure labore, natus nemo neque nulla odio quia quis, repellendus vero? Atque esse
        fugiat ipsa laboriosam reiciendis? Aut expedita maiores maxime ullam vitae. Delectus dolorum esse maiores minus
        praesentium quod vitae voluptatem.
      </div>
    </div>

    <div ref={projectsRef} className={`${styles.HomeSector} ${styles.closable} ${fired === 2 ? styles.closed : ''}`}>
      <div className={`${styles.wide}`}>
        <h3>Projekty</h3>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam autem consectetur delectus, deserunt
        dolorum expedita harum id iure labore, natus nemo neque nulla odio quia quis, repellendus vero? Atque esse
        fugiat ipsa laboriosam reiciendis? Aut expedita maiores maxime ullam vitae. Delectus dolorum esse maiores minus
        praesentium quod vitae voluptatem.
      </div>
      <div className={`${styles.narrow}`}>
        <GitHubLogo />
      </div>

    </div>

    <div ref={hobbyRef}
         className={`${styles.HomeSector} ${backgrounds.planks} ${themeName === 'dark' ? backgrounds.dark:""}`}>
      <div className={`${styles.narrow}`}>
        <AnvilAndHammer fired={fired === 4} />
      </div>
      <div className={`${styles.wide} ${styles.bouncing} ${fired === 4 ? styles.bounced : ''}`}>
        <h3>Hobby</h3>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam autem consectetur delectus, deserunt
        dolorum expedita harum id iure labore, natus nemo neque nulla odio quia quis, repellendus vero? Atque esse
        fugiat ipsa laboriosam reiciendis? Aut expedita maiores maxime ullam vitae. Delectus dolorum esse maiores minus
        praesentium quod vitae voluptatem.
      </div>
    </div>

    <div className={`${styles.HomeSector}`}>
    </div>

  </>;
};