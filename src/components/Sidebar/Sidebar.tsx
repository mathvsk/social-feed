import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";

import BackGroundImage from "../../assets/wallpaper.png"

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src={BackGroundImage}
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/mathvsk.png"/>

        <strong>Matheus</strong>
        <span>Web developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}