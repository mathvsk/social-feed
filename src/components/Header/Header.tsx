import styles from "./Header.module.css";

import igniteLogo from "../../assets/logo-ignite-feed.svg";

export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="logotipo da aplicação" />
        </header>
    );
}