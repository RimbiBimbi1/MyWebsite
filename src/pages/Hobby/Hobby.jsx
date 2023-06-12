import styles from './Hobby.module.css';
import backgrounds from '../../common/backgrounds.module.css';

export const Hobby = () => {
  const photosPaths = Array.from(Array(7).keys()).map(item => `gallery/${item}.jpg`);

  const photos = photosPaths.map((path, index) => <img src={path} alt={`photo${index}`} />);

  const photosWithAnchors = photos.map((photo, index) => (
    <a href={`${photosPaths[index]}`} target={'_blank'} rel={'noreferrer'}>
      {photo}
    </a>
  ));

  const tiles = photosWithAnchors.map((photo, index) => (
    <div key={`tile${index}`} className={styles.tile}>
      {photo}
    </div>
  ));

  return (
    <>
      <article>
        <section>
          <header>
            <h3>Moje hobby</h3>
          </header>
          <p>
            Mam dość nietypową pasję, a jest nią kowalstwo. <br />
            Kuję różne, bardziej lub mniej użyteczne przedmioty: breloki, haczyki naścienne,
            korkociągi, ale także szczypce kowalskie, toporki i noże. <br />
          </p>
        </section>
        <section className={styles.gallery}>{tiles}</section>
      </article>
    </>
  );
};
