import styles from './Header.module.css';
import logo from '../assets/ignite-logo.svg';

export function  Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <img src={logo} alt="Logo Ignite feed" />
        <strong>Ignite Feed</strong>
      </div>
    </header>
  );
}