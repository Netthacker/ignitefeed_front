import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';


export function Comment(){
    return(
        
        <div className={styles.comment}>
            <Avatar hasBorder={false}
            src="https://github.com/netthacker.png" 
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>
                                Lucas Brigido
                            </strong>
                            <time title='23 de Junho às 19:30h' dateTime="2022-06-23 19:30:00">Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar Comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>
                        Muito bom o Post negada !!!
                    </p>
                </div>
            
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            
            </div>

        </div>
    )
}