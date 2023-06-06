import styles from './Home.module.css';
import backgrounds from '../../common/backgrounds.module.css';
import sectorStyles from '../../common/sector.module.css'
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
    setEducationHeight(educationRef.current.getBoundingClientRect().bottom + window.scrollY);
    setProjectsHeight(projectsRef.current.getBoundingClientRect().bottom + window.scrollY);
    setHobbyHeight(hobbyRef.current.getBoundingClientRect().bottom + window.scrollY);

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
    <article className={`${sectorStyles.sector}`}>
      <section className={`${sectorStyles.wide}`}>
        {/*<h3>O mnie</h3>*/}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam autem consectetur delectus, deserunt
        dolorum expedita harum id iure labore, natus nemo neque nulla odio quia quis, repellendus vero? Atque esse
        fugiat ipsa laboriosam reiciendis? Aut expedita maiores maxime ullam vitae. Delectus dolorum esse maiores minus
        praesentium quod vitae voluptatem.
      </section>
      <section className={`${sectorStyles.narrow}`}>
        <img className={styles.photo} src={photo} alt='Moje zdjęcie' />
      </section>
    </article>

    <article ref={educationRef}
             className={`${sectorStyles.sector} ${backgrounds.blueGradient} ${themeName === 'dark' ? backgrounds.dark : ''}`}>
      <section className={`${sectorStyles.narrow}`}>
        <UmkLogo fired={fired === 1} />
      </section>
      <section className={`${sectorStyles.wide} ${sectorStyles.fading} ${fired === 1 ? '' : sectorStyles.faded}`}>
        <header>
          <h3>Wykształcenie</h3>
        </header>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam autem consectetur delectus, deserunt
        dolorum expedita harum id iure labore, natus nemo neque nulla odio quia quis, repellendus vero? Atque esse
        fugiat ipsa laboriosam reiciendis? Aut expedita maiores maxime ullam vitae. Delectus dolorum esse maiores minus
        praesentium quod vitae voluptatem.
      </section>
    </article>

    <article ref={projectsRef}
             className={`${sectorStyles.sector} ${sectorStyles.closable} ${fired === 2 ? sectorStyles.closed : ''}`}>
      <section className={`${sectorStyles.wide}`}>
        <header>
          <h3>Projekty</h3>
        </header>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam autem consectetur delectus, deserunt
        dolorum expedita harum id iure labore, natus nemo neque nulla odio quia quis, repellendus vero? Atque esse
        fugiat ipsa laboriosam reiciendis? Aut expedita maiores maxime ullam vitae. Delectus dolorum esse maiores minus
        praesentium quod vitae voluptatem.
      </section>
      <section className={`${sectorStyles.narrow}`}>
        <GitHubLogo />
      </section>

    </article>

    <article ref={hobbyRef}
             className={`${sectorStyles.sector} ${backgrounds.planks} ${themeName === 'dark' ? backgrounds.dark : ''}`}>
      <section className={`${sectorStyles.narrow}`}>
        <AnvilAndHammer fired={fired === 4} />
      </section>
      <section className={`${sectorStyles.wide} ${sectorStyles.fading} ${fired === 4 ? '' : sectorStyles.faded}`}>
        <header>
          <h3>Hobby</h3>
        </header>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam autem consectetur delectus, deserunt
        dolorum expedita harum id iure labore, natus nemo neque nulla odio quia quis, repellendus vero? Atque esse
        fugiat ipsa laboriosam reiciendis? Aut expedita maiores maxime ullam vitae. Delectus dolorum esse maiores minus
        praesentium quod vitae voluptatem.
      </section>
    </article>

    <article className={`${sectorStyles.sector}`}>
    </article>

  </>;
};