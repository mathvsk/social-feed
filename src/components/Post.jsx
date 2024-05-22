import styles from './Post.module.css';
import {Comment} from "./Comment.jsx";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/mathvsk.png"/>
          <div className={styles.authorInfo}>
            <strong>Matheus Viscki</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="09 de Abril às 08:00h" dateTime="2022-04-09 08:00:00">Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O
          nome do projeto é DoctorCare 🚀</p>
        <p>
          <a href="#">jane.design/doctorcare</a>
        </p>
        <p className={styles.hashtags}>
          <a href="">#novoprojeto</a>
          <a href="">#nlw</a>
          <a href="">#rocketseat</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comntário"/>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    </article>
  );
}