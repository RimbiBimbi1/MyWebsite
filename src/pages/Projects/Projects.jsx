import styles from './Projects.module.css';
import backgrounds from '../../common/backgrounds.module.css';
import sectorStyles from '../../common/sector.module.css';
import { JustResearchLogo } from '../../animated/JustResearchLogo/JustResearchLogo';
import { PaperSheet } from '../../animated/PaperSheet/PaperSheet';
import cookie from '../../images/cookie.png';
import gnNews from '../../images/gnNews.png';
import reactLogo from '../../images/react.svg';
import { Tags } from '../../components/Tags/Tags';

export const Projects = () => {
    return <>
      <header className={backgrounds.brightGradient}>
        <h2>Projekty grupowe</h2>
      </header>
      <article
        // className={`${backgrounds.brightGradient}`}
      >
        <main className={`${sectorStyles.sector}`}>
          <section className={`${sectorStyles.wide}`}>
            <header>
              <h3>
                JustResearch (11.2022 - 06.2023)
              </h3>
            </header>
            <main>
              <p>
                Projekt grupowy stworzony w ramach przedmiotu "Programowanie Zespołowe".<br />
                JustResearch to tablica ogłoszeń poświęcona badaniom naukowym.<br />
                Ma na celu pomóc badaczom znaleźć osoby chętne do wzięcia udziału w badaniu.
              </p>

              <div className={'column'}>
                <Tags>{['JS', 'React', 'Netlify', 'GoogleMaps Api']}</Tags>
                <Tags>{['Kotlin', 'Spring Boot', 'MongoDB', 'GCP', 'JWTs']}</Tags>
              </div>
            </main>
          </section>
          <section className={`${sectorStyles.narrow}`}>
            <JustResearchLogo />
          </section>
        </main>
      </article>

      <article
        // className={`${backgrounds.brightGradient}`}
      >
        <main className={`${sectorStyles.sector}`}>
          <section className={`${sectorStyles.wide}`}>
            <header>
              <h3>
                Tablica ogłoszeń (07.2022 - 09.2022)
              </h3>
            </header>
            <main>
              <p>
                Grupowy projekt zaliczeniowy. Pierwsza aplikacja z użyciem React.js. <br />
                Uwzględnienie tego projektu na stronie świadczy poniekąd o moim dystansie do siebie.
              </p>

              <div className={'column'}>
                <Tags>{['JS', 'React', 'mui']}</Tags>
                <Tags>{['Java', 'Spring Boot', 'PostgreSQL']}</Tags>
              </div>
            </main>
          </section>
          <section className={`${sectorStyles.narrow}`}>
            <a href='https://github.com/JasminEnjoyers'
               target={'_blank'}
               rel={'noreferrer'}
               className={styles.reactLogo}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348">
                <title>React Logo</title>
                <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
                <g stroke="#61dafb" strokeWidth="1" fill="none">
                  <ellipse rx="11" ry="4.2"/>
                  <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                  <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                </g>
              </svg>
            </a>
          </section>
        </main>
      </article>

      <header className={backgrounds.pinkGradient}>
        <h2>Projekty własne</h2>
      </header>

      <article className={``}>
        <main className={`${sectorStyles.sector}`}>
          <section className={`${sectorStyles.wide}`}>
            <header>
              <h3>
                Image Procesing TestBed (03.2023 - teraz)
              </h3>
            </header>
            <main>
              <p>
                Aplikacja stworzona do testowania i zapoznania się z algorytmami służącymi do przetwarzania obrazu.<br />
                Docelowo ma ona obliczać wymiary obiektu umieszczonego na kartce A4.<br />
                Wyciągnięte wnioski wykorzystam przy mojej pracy inżynierskiej.
              </p>

              <Tags>{['Java', 'OpenCV']}</Tags>
            </main>
          </section>
          <section className={`${sectorStyles.narrow}`}>
            <PaperSheet />
          </section>
        </main>

      </article>

      <article className={``}>
        <main className={`${sectorStyles.sector}`}>
          <section className={`${sectorStyles.wide}`}>
            <header>
              <h3>
                gnNews (04.2023)
              </h3>
            </header>
            <main>
              <p>
                Stworzony w ramach procesu rekrutacyjnego, prosty agregator news'ów wykorzystujący newsAPI.<br /><br />
                Design inspirowany stroną <a
                href='https://gnstudio.pl' rel={'noreferrer'} target={'_blank'}>gnStudio</a>.
              </p>
              <Tags>{['JavaScript', 'React', 'Redux', 'Jest']}</Tags>
            </main>
          </section>
          <section className={`${sectorStyles.narrow}`}>
            <a href='https://rimbibimbi1.github.io/TNAF-zajecia4-MS/'
               target={'_blank'}
               rel={'noreferrer'}
               className={sectorStyles.linkImage}>
              <img src={gnNews} alt='Cookie' />
            </a>
          </section>
        </main>
      </article>

      <article className={``}>
        <main className={`${sectorStyles.sector}`}>
          <section className={`${sectorStyles.wide}`}>
            <header>
              <h3>
                Simple Cookie Clicker (02.2023)
              </h3>
            </header>
            <main>
              <p>
                Prosta aplikacja do prokrastynacji i gwałtownego zużycia microswitch'a w swojej myszy. <br />
                Może też posłyżyć do testowania makr.
              </p>
              <Tags>{['JS', 'HTML5', 'CSS3']}</Tags>
            </main>
          </section>
          <section className={`${sectorStyles.narrow}`}>
            <a href='https://rimbibimbi1.github.io/TNAF-zajecia4-MS/'
               target={'_blank'}
               rel={'noreferrer'}
               className={sectorStyles.linkImage}>
              <img src={cookie} alt='Cookie' />
            </a>
          </section>
        </main>
      </article>

    </>;
  }
;
;