import './global.css'
import styles from './App.module.css';

import {Header} from "./components/Header.jsx";
import {Sidebar} from "./components/Sidebar.jsx";

export function App() {
  return (
    <>
        <Header />
        <div className={styles.wrapper}>
            <Sidebar />
            <main>
                <h1>Main Content</h1>
            </main>
        </div>
    </>
  )
}
