import styles from './habilidade.module.css'

type HabilidadeProps = {
    imagem: string;
    nome : string;
}

function Habilidade({imagem, nome}:HabilidadeProps){
    return (

        <div className={styles.habilidadeDiv}>
        <p className={styles.habilidadeNome}>{nome}</p>
        <img className={styles.habilidadeImg} src={imagem} alt={nome} />
        </div>
    )
}

export default Habilidade