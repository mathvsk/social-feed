import './global.css'
import styles from './App.module.css';

import {Header} from "./components/Header.jsx";
import {Sidebar} from "./components/Sidebar.jsx";
import {Post} from "./components/Post.jsx";

const posts = [
  {
    id: 1,
    author: {
      name: 'Julio Alcantara',
      avatarUrl: 'https://i.pravatar.cc/150?img=11',
      role: 'Java Senior Developer',
    },
    content: [
      { type: 'paragraph', content: 'Pessoal, alguém sabe se a Rocketseat está contratando?' },
      { type: 'paragraph', content: 'Estou procurando uma oportunidade de emprego como desenvolvedor Java Senior.' },
      { type: 'link', content: 'jane.design/doctorcare' },
      { type: 'hashTag', content: ['#rocketseat', '#job', '#java'] }
    ],
    publishedAt: new Date('2024-05-20 20:00:00'),
  },
  {
    id: 2,
    author: {
      name: 'Gabriel Lisboa',
      avatarUrl: 'https://i.pravatar.cc/150?img=9',
      role: 'ReactJS Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera, beleza?' },
      { type: 'paragraph', content: 'Estou fazendo o bootcamp da Rocketseat e está sendo muito massa! Alguém mais aí fazendo, comenta na publicação para trocarmos uma ideia.' },
      { type: 'link', content: 'example.design/doctorcare' },
      { type: 'hashTag', content: ['#rocketseat', '#nlw', '#nextlevelweek', "#ReactJS"] }
    ],
    publishedAt: new Date('2024-05-21 20:00:00'),
  }
]

export function App() {
  return (
    <>
        <Header />
        <div className={styles.wrapper}>
            <Sidebar />
            <main>
              {posts.map(post => {
                return (
                  <Post
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}
                  />
                )
              })}
            </main>
        </div>
    </>
  )
}
