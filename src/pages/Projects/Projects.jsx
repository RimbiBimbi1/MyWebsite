import styles from './Projects.module.css';
import backgrounds from '../../common/backgrounds.module.css';
import sectorStyles from '../../common/sector.module.css';
import { JustResearchLogo } from '../../animated/JustResearchLogo/JustResearchLogo';

export const Projects = () => {
    return <>
      <header>
        <h2>Projekty grupowe</h2>
      </header>
      <article className={`${backgrounds.brightGradient}`}>
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
            </main>
          </section>
          <section className={`${sectorStyles.narrow}`}>
            <JustResearchLogo />
          </section>
        </main>
      </article>

      <header>
        <h3>Projekty własne</h3>
      </header>
      <article className={`${backgrounds.brightGradient}`}>
        <main className={`${sectorStyles.sector}`}>
          <section className={`${sectorStyles.wide}`}>
            <header>
              <h3>
                gnNews (03.2023)
              </h3>
            </header>
            <main>
              <div>Stworzony w ramach procesu rekrutacyjnego, prosty agregator news'ów wykorzystujący newsAPI.</div>
              <div>Wykorzystane technologie:
              </div>
              <ul>
                <li>React</li>
                <li>Redux</li>
                <li></li>
              </ul>

              Design
              inspirowany stroną <a
              href='https://gnstudio.pl' rel={'noreferrer'} target={'_blank'}>gnStudio</a>.

            </main>
          </section>
          <section className={`${sectorStyles.narrow}`}>
            <JustResearchLogo />
          </section>
        </main>
      </article>
      <article className={`${backgrounds.brightGradient}`}>
        <main className={`${sectorStyles.sector}`}>
          <section className={`${sectorStyles.wide}`}>
            <header>
              <h3>
                gnNews (11.2022 - 06.2023)
              </h3>
            </header>
            <main>
              Projekt grupowy stworzony w ramach przedmiotu "Programowanie Zespołowe".
              JustResearch to tablica ogłoszeń poświęcona badaniom naukowym. Ma na celu pomóc badaczom znaleźć osoby
              chętne do wzięcia udziału w badaniu.
            </main>
          </section>
          <section className={`${sectorStyles.narrow}`}>
            <JustResearchLogo />
          </section>
        </main>

      </article>
    </>;
  }
;
;