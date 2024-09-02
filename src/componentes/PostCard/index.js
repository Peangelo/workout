import { Link } from "react-router-dom";
import styles from "./Post.module.css";
import BotaoPrincipal from "componentes/BotaoPrincipal";
import dias from "json/dias.json";

export default function PostCard({ post }) {
    // Encontrar o dia da semana correspondente ao post usando o id
    const dia = dias.find(dia => dia.id === post.id);

    return (
        <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
                <img
                    className={styles.capa}
                    src={`/assets/posts/${post.id}/capa.png`}
                    alt="Imagem de capa do post"
                />
                <h2 className={styles.titulo}>
                    {dia ? dia.diaSemana : "Dia não encontrado"}
                </h2>

                <BotaoPrincipal>Ver</BotaoPrincipal>
            </div>
        </Link>
    );
}
