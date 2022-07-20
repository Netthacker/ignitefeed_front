import styles from './Avatar.module.css';

//Utilizando desestruturação do js
export function Avatar ({hasBorder = true, src}){
/**
 * Conceito sem desestruturar aplicando as props 
 * const hasBorder = props.hasBorder !== false;
 * dentro do return, retira o props.hasBorder e deixa
 * só o hasBorder
 * 
 * Se desestruturar, passa dentro de chaves na
 * função acima e tira o props.
 * isso deixa a o js mais seguro
 * 
*/
    
    return(
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={src} 
            />
    )
}