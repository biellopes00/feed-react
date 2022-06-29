import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';


interface CommentProps {
    content: string;
    onDeleteComment: (comment:string) => void;
}
export function Comment({content, onDeleteComment}:CommentProps){

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content);
    }
    
    return(
        <div className={styles.comment}>
            <Avatar alt="" hasBorder={false} src="https://pbs.twimg.com/profile_images/1171036876293189633/-wZe0cdW_400x400.jpg"  />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriel Lopes</strong>
                            <time dateTime="2022-05-11 17:51">Publicado há 1h</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={() => setLikeCount(likeCount + 1)}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>

                    </button>
                </footer>
            </div>
        </div>
    )
}