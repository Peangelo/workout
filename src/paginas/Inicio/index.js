import styles from "./Inicio.module.css"
///import posts from "json/posts.json"
import PostCard from "componentes/PostCard";
import dias from "json/dias.json"

export default function Inicio() {

    return (
            <ul className={styles.posts}>
                {dias.map((post) => (
                    <li key={post.id}>
                         <PostCard post={post}/>    
                    </li>
                ))}
            </ul>
    )
}