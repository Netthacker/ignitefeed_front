import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(){
    return (
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar src="https://github.com/netthacker.png" />
                <div className={styles.authorInfo}>
                    <strong>Lucas Brigido</strong>
                    <span>Developer</span>
                </div>
            </div>

            <time title='23 de Junho às 19:30h' dateTime="2022-06-23 19:30:00">Publicado há 1h</time>
        

        </header>

        <div className={styles.content}>
            <p>E aí negada</p>
            <p>Tamo junto</p>
            <p>Primeiro Post</p>
            <p>
                <a href='#'>#novoprojeto</a>{' '}
                <a href='#'>#mexendonoVite</a>{' '}
                <a href='#'>#Funcionalidades</a>
            </p>
        </div>

        <form className={styles.commentForm}>
            <strong>
                Deixe seu feedback
            </strong>
            <textarea 
                placeholder='Deixe um comentário'
            />
            <footer>
                <button type="submit">
                    Publicar
                </button>
            </footer>
        </form>

        <div className={styles.commentList}>
            <Comment />
            <Comment />
        </div>

    </article>
    )
}

