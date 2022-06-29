import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar";


import './global.css';
import styles from './App.module.css';
import { Post } from "./components/Post";

const posts =[
  {
    id: 1,
    author:{
      avatarUrl: 'https://ted-conferences-speaker-photos-production.s3.amazonaws.com/yoa4pm3vyerco6hqbhjxly3bf41d',
      name: 'Bill Gates',
      role: 'Founder of Microsoft'
    },
    content: [
      {type: 'paragraph', content: 'I really enjoyed your project, congratulations!'},
      
    ],
    publishedAt:new Date('2022-06-13 11:30:00')
  }
];

export function App() {
    return (
      <>
        <Header/>
        <div className={styles.wrapper}>
          <Sidebar />
          
          <main>
           {posts.map(post =>{
            return(
              <Post
              key={post.id}
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


