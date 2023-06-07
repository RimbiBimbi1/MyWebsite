import styles from './Projects.module.css';
import backgrounds from '../../common/backgrounds.module.css';
import sectorStyles from '../../common/sector.module.css';
import { JustResearchLogo } from '../../animated/JustResearchLogo/JustResearchLogo';
import { PaperSheet } from '../../animated/PaperSheet/PaperSheet';
import cookie from '../../animated/Cookie/cookie.png';
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
              Projekt grupowy stworzony w ramach przedmiotu "Programowanie Zespołowe".
              JustResearch to tablica ogłoszeń poświęcona badaniom naukowym. Ma na celu pomóc badaczom znaleźć osoby
              chętne do wzięcia udziału w badaniu.
              <div className={"column"}>
                <Tags>{['JS','React','Netlify', 'GoogleMaps Api']}</Tags>
                <Tags>{['Kotlin','Spring', 'MongoDB', 'GCP', 'JWT']}</Tags>
              </div>

            </main>
          </section>
          <section className={`${sectorStyles.narrow}`}>
            <JustResearchLogo />
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
              Aplikacja stworzona do testowania i zapoznania się z algorytmami służącymi do przetwarzania obrazu.
              Docelowo ma ona obliczać wymiary obiektu umieszczonego na kartce A4.
              Wyciągnięte wnioski wykorzystam przy mojej pracy inżynierskiej.
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
              <div>
                Stworzony w ramach procesu rekrutacyjnego, prosty agregator news'ów wykorzystujący newsAPI.
                Design
                inspirowany stroną <a
                  href='https://gnstudio.pl' rel={'noreferrer'} target={'_blank'}>gnStudio</a>.
                </div>
              <Tags>{['JavaScript', 'React', 'Redux', 'Jest']}</Tags>
            </main>
          </section>
          <section className={`${sectorStyles.narrow}`}>
            <JustResearchLogo />
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
              <div>Prosta aplikacja do prokrastynacji i gwałtownego zużycia microswitch'a w swojej myszy. Może też
                posłyżyć do testowania makr.
              </div>
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