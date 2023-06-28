import CardPortifolio from "./cardPortifolio"
import styles from './portifolio.module.css'
import gs1 from '/gs1.png'


function Portifolio(){
    return (
    <section id="portifolio" className={styles.sectionP}>
        <h1>Portifolio</h1>
    <CardPortifolio
    imagem={gs1}
    nome="Global Solution FIAP"
    desc="123"
    data='06/2023'
    id='gs1'/>
    </section>
    )
}

export default Portifolio