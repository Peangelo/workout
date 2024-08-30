import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {

    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Ola fisiculturistas,
                </h1>
                <p className={styles.paragrafo}>
                Nosso site oferece uma seleção de treinos específicos de CrossFit, projetados para atender a todos os níveis de habilidade. Se você está começando ou já é um praticante avançado, encontrará programas de treino variados e desafiadores para melhorar sua força, resistência e condicionamento físico. Explore nossas opções e leve seu treino para o próximo nível!
                </p>
            </div>
            <div className={styles.imagens}>
                
                <img 
                    className={styles.circuloColorido} 
                    src={circuloColorido} 
                    aria-hidden={true} 
                    alt='circuloColorido'
                />

                <img 
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt='Minha foto'
                />

            </div>
        </div>
    )
}