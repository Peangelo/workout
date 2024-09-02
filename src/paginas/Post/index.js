import { Route, Routes, useParams } from "react-router-dom";
import dias from "json/dias.json";
import posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import "./Post.css";
import NaoEncontrada from "paginas/NaoEncontrada";
import PaginaPadrao from "componentes/PaginaPadrao";

export default function Dia() {
    const { id } = useParams(); // 'id' é o parâmetro da URL que corresponde ao dia da semana

    // Busca o dia da semana correspondente ao id na URL
    const dia = dias.find(dia => dia.id === Number(id));

    // Filtra os posts que correspondem aos treinos do dia específico
    const postsDoDia = posts.filter(post => post.diaId === Number(id));

    if (!dia) {
        return <NaoEncontrada />;
    }

    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route index element={
                    <>
                        {postsDoDia.length > 0 ? (
                            postsDoDia.map(post => (
                                <PostModelo
                                    key={dias.id}
                                    fotoCapa={`/assets/posts/${post.id}/capa.png`}
                                    titulo={dias.diaSemana}
                                >
                                    <div className="post-markdown-container">
                                        <ReactMarkdown>{post.texto}</ReactMarkdown>
                                    </div>
                                </PostModelo>
                            ))
                        ) : (
                            <p>Nenhum treino disponível para {dia.diaSemana}</p>
                        )}
                    </>
                } />
            </Route>
        </Routes>
    );
}
