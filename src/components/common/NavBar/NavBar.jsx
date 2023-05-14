import styles from './NavBar.module.css'
export const NavBar = () => {

  return(
    <div className={styles.NavBar}>
      <ul className={styles.menu}>
        <li>Strona główna</li>
        <li>Moje projekty</li>
        <li>Zainteresowania</li>
        <li>Kontakt</li>
      </ul>
    </div>
  )
}