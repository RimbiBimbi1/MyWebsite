import styles from './Contact.module.css';
import backgrounds from '../../common/backgrounds.module.css';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';

export const Contact = () => {
  const themeName = useTheme()?.theme?.name;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const isDialogOpen = useLocation()?.search === '?successful=true';

  const dialogRef = useRef(null);

  const handleResetClicked = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleModalClosed = () => {
    if (dialogRef.current.open) dialogRef.current.close();
  };

  useEffect(() => {
    if (!dialogRef.current.open && isDialogOpen) dialogRef.current.showModal();
  }, [isDialogOpen]);

  return (
    <div
      className={`${backgrounds.brightGradient} ${themeName === 'dark' ? backgrounds.dark : ''} `}
    >
      <h3>Wyślij mi maila</h3>
      <p>
        (Wysyłanie maili z poziomu poniższego formularza działa, jednak nie gwarantuję, że
        kiedykolwiek maile te odczytam. W sprawach pilnych polecam skorzystać chociażby z{' '}
        <a
          className={styles.link}
          target={'_blank'}
          rel={'noreferrer'}
          href="https://www.linkedin.com/in/michał-szczepański-9b9927266/"
          title={'Naciśnij, aby przejsć do mojego profilu na LinkedIn'}
        >
          LinkedIn
        </a>
        .)
      </p>

      <main>
        <form
          action={'https://public.herotofu.com/v1/3e3a85a0-08f0-11ee-8025-97a9fb2f29da'}
          method={'post'}
          acceptCharset={'UTF-8'}
          className={styles.form}
          autoComplete={'off'}
        >
          <dialog className={styles.overlay} ref={dialogRef}>
            <div className={'column'}>
              <h3>
                Wiadomość wysłana. <br />
                Postaram się odpisać w najbliższym czasie :)
              </h3>
              <button type={'button'} onClick={handleModalClosed}>
                Ok
              </button>
            </div>
          </dialog>
          <div className={'column'}>
            <label htmlFor="name">Imię</label>
            <input
              value={name}
              onChange={event => {
                setName(event.target.value);
              }}
              name="Name"
              id="name"
              type="text"
              placeholder={'Andrzej'}
              required
            />
          </div>
          <div className={'column'}>
            <label htmlFor="email">Adres email</label>
            <input
              value={email}
              onChange={event => {
                setEmail(event.target.value);
              }}
              name="Email"
              id="email"
              type="email"
              placeholder={'andrzejnowak@poczta.xy'}
              required
            />
          </div>
          <div className={'column'}>
            <label htmlFor="message">Treść wiadomości</label>
            <textarea
              value={message}
              onChange={event => {
                setMessage(event.target.value);
              }}
              name={'Message'}
              id={'message'}
              type={'text'}
              placeholder={'Dzień dobry, \n\n gdzie się pan zaopatruje w węgiel?'}
            />
          </div>
          <div className={`row ${styles.buttons}`}>
            <button type={'button'} onClick={handleResetClicked}>
              Wyczyść
            </button>
            <button type={'submit'}>Wyślij wiadomość</button>
          </div>
          {/*<div>*/}
          {/*  <input type="submit" value="Download CTA" />*/}
          {/*  <div*/}
          {/*    // style={{*/}
          {/*    //   textIndent: '-99999px',*/}
          {/*    //   whiteSpace: 'nowrap',*/}
          {/*    //   overflow: 'hidden',*/}
          {/*    //   position: 'absolute',*/}
          {/*    // }}*/}
          {/*    // aria-hidden="true"*/}
          {/*  >*/}
          {/*    <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" />*/}
          {/*  </div>*/}
          {/*</div>*/}
        </form>
      </main>
    </div>
  );
};
