import backgrounds from '../../common/backgrounds.module.css';
import sectorStyles from '../../common/sector.module.css';
import { AnvilAndHammer } from '../../animated/AnvilAndHammer/AnvilAndHammer';

import photo from '../../images/photo.png';
import { UmkLogo } from '../../animated/UmkLogo/UmkLogo';
import { useEffect, useRef, useState } from 'react';
import { GitHubLogo } from '../../animated/GitHubLogo/GitHubLogo';
import { useTheme } from '../../hooks/useTheme';

export const Home = () => {
  const themeName = useTheme()?.theme?.name;
  const [fired, setFired] = useState(0);

  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const hobbyRef = useRef(null);

  const [aboutTop, setAboutTop] = useState(null);
  const [educationBottom, setEducationBottom] = useState(null);
  const [projectsBottom, setProjectsBottom] = useState(null);
  const [hobbyBottom, setHobbyBottom] = useState(null);

  useEffect(() => {
    setAboutTop(aboutRef.current.getBoundingClientRect().top + window.scrollY);
    setEducationBottom(educationRef.current.getBoundingClientRect().bottom + window.scrollY);
    setProjectsBottom(projectsRef.current.getBoundingClientRect().bottom + window.scrollY);
    setHobbyBottom(hobbyRef.current.getBoundingClientRect().bottom + window.scrollY);

    return () => {
      window.onscroll = () => {};
    };
  }, []);

  window.onscroll = () => {
    const top = window.scrollY;
    const bottom = top + window.innerHeight;

    const headerOffset = top + aboutTop;
    if (
      bottom > hobbyBottom ||
      headerOffset > hobbyBottom - hobbyRef.current.getBoundingClientRect().height
    ) {
      setFired(3);
    } else if (
      bottom > projectsBottom ||
      headerOffset > projectsBottom - projectsRef.current.getBoundingClientRect().height
    ) {
      setFired(2);
    } else if (
      bottom > educationBottom ||
      headerOffset > educationBottom - educationRef.current.getBoundingClientRect().height
    ) {
      setFired(1);
    } else setFired(0);
  };

  return (
    <>
      <article className={`${sectorStyles.sector}`} ref={aboutRef}>
        <section className={`${sectorStyles.wide}`}>
          [To po prawo to moje zdjęcie] Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Accusamus aliquam autem consectetur delectus, deserunt dolorum expedita harum id iure
          labore, natus nemo neque nulla odio quia quis, repellendus vero? Atque esse fugiat ipsa
          laboriosam reiciendis? Aut expedita maiores maxime ullam vitae. Delectus dolorum esse
          maiores minus praesentium quod vitae voluptatem.
        </section>
        <section className={`${sectorStyles.narrow} ${sectorStyles.linkImage}`}>
          <img src={photo} alt="Moje zdjęcie" title={'Moje zdjęcie'} />
        </section>
      </article>

      <article
        ref={educationRef}
        className={`${sectorStyles.sector} ${sectorStyles.reversed} ${backgrounds.blueGradient} ${
          themeName === 'dark' ? backgrounds.dark : ''
        }`}
      >
        <section
          className={`${sectorStyles.wide} ${sectorStyles.fading} ${
            fired === 1 ? '' : sectorStyles.faded
          }`}
        >
          <header>
            <h3>Wykształcenie</h3>
          </header>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam autem
          consectetur delectus, deserunt dolorum expedita harum id iure labore, natus nemo neque
          nulla odio quia quis, repellendus vero? Atque esse fugiat ipsa laboriosam reiciendis? Aut
          expedita maiores maxime ullam vitae. Delectus dolorum esse maiores minus praesentium quod
          vitae voluptatem.
        </section>
        <section className={`${sectorStyles.narrow}`}>
          <UmkLogo fired={fired === 1} />
        </section>
      </article>

      <article
        ref={projectsRef}
        className={`${sectorStyles.sector} ${sectorStyles.closable} ${
          fired === 2 ? sectorStyles.closed : ''
        }`}
      >
        <section className={`${sectorStyles.wide}`}>
          <header>
            <h3>Projekty</h3>
          </header>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam autem
          consectetur delectus, deserunt dolorum expedita harum id iure labore, natus nemo neque
          nulla odio quia quis, repellendus vero? Atque esse fugiat ipsa laboriosam reiciendis? Aut
          expedita maiores maxime ullam vitae. Delectus dolorum esse maiores minus praesentium quod
          vitae voluptatem.
        </section>
        <section className={`${sectorStyles.narrow}`}>
          <GitHubLogo />
        </section>
      </article>

      <article
        ref={hobbyRef}
        className={`${sectorStyles.sector} ${sectorStyles.reversed} ${backgrounds.planks} ${
          themeName === 'dark' ? backgrounds.dark : ''
        }`}
      >
        <section
          className={`${sectorStyles.wide} ${sectorStyles.fading} ${
            fired === 3 ? '' : sectorStyles.faded
          }`}
        >
          <header>
            <h3>Hobby</h3>
          </header>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam autem
          consectetur delectus, deserunt dolorum expedita harum id iure labore, natus nemo neque
          nulla odio quia quis, repellendus vero? Atque esse fugiat ipsa laboriosam reiciendis? Aut
          expedita maiores maxime ullam vitae. Delectus dolorum esse maiores minus praesentium quod
          vitae voluptatem.
        </section>
        <section className={`${sectorStyles.narrow}`}>
          <AnvilAndHammer fired={fired === 3} />
        </section>
      </article>
    </>
  );
};
