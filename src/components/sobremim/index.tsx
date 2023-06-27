import styles from './sobremim.module.css'

function Sobremim(){
    return (
        <section className={styles.sectionS}>
        <h2 className={styles.titleS}>Sobre mim</h2>
        <p className={styles.pSobre}>
        Desenvolvedor Full Stack com experiência em <span>TypeScript</span>, <span>JavaScript</span>, <span>React</span>, <span>HTML</span>, <span>CSS</span> e <span>Python</span>.
        Apaixonado pelo desenvolvimento de componentes reutilizáveis. Também possui experiência em projetos gerenciados por Metodologias Ágeis.
        Estudando Análise e Desenvolvimento de Sistemas pela FIAP.
        </p>
        </section>
    )
}

export default Sobremim