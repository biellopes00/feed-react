import styles from './Sidebar.module.css';
import {PencilLine } from "phosphor-react";
import { Avatar } from './Avatar';


export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
            />

            <div className={styles.profile}>
                <Avatar src="https://pbs.twimg.com/profile_images/1171036876293189633/-wZe0cdW_400x400.jpg" />

                <strong>Gabriel Lopes</strong>
                <span>Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine  size={20}/>
                    Editar seu perfil
                </a>
            </footer>

        </aside>
    )
}