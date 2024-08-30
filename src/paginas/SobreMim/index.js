import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import styles from "./SobreMim.module.css"
import fotoSobreMim from "assets/minhafoto.jpg"

export default function SobreMim() {

    return (

        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        > 
            <h3 className={styles.subtitulo}>
                Ola, sou o Rafael
            </h3>
            <img
                src={fotoSobreMim}
                alt="foto minha sorrindo"
                className={styles.fotoSobreMim}
            >
            </img>
            <p className={styles.paragrafo}>     
            Olá, espero que estejam bem! Me chamo Rafael Peangelo de Souza Filho, tenho 22 anos e sou apaixonado por desenvolvimento de software.
            </p>
            <p className={styles.paragrafo}> 
            Minha história com programação começou no Instituto de Tecnologia de Barueri (ITB), quando fiz o ensino médio integrado ao curso de Informática. Eu aprendi lógica de programação e o básico de várias linguagens, como HTML/CSS, Java, C#. Pude tambem conhecer bancos de dados como SQL e Oracle.
            </p>
            <p className={styles.paragrafo}> 
            Com uma formação em Ciência da Computação na Universidade Paulista (UNIP) e experiência em automação de testes e desenvolvimento full-stack, tenho me dedicado a contribuir com equipes ágeis, buscando sempre aprender e crescer na área de tecnologia. 
            </p>
            <p className={styles.paragrafo}> 
            Ao longo da minha carreira, trabalhei com diversas tecnologias, desde linguagens de programação como Python, C#, JavaScript e Cobol, até ferramentas como Cypress e Selenium para automação de testes. Minha experiência inclui o desenvolvimento de soluções eficientes, otimização de processos e aplicação de metodologias ágeis como Scrum e Kanban.
            </p>
            <p className={styles.paragrafo}> 
            Atualmente, estou focado em fortalecer minhas habilidades tanto em programação quanto em qualidade de software, sempre buscando novas oportunidades para me especializar e colaborar em projetos que façam a diferença. Gosto de desafios e de estar em constante evolução, acreditando que cada projeto é uma chance de melhorar e trazer mais valor ao time.
            </p>
            <p className={styles.paragrafo}> 
            No tempo livre, também busco me aprofundar em novas tecnologias e melhorar meu conhecimento em React, para continuar me desenvolvendo como um profissional versátil.
            </p>
        </PostModelo>
    )
}