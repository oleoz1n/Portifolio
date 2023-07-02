import CardPortifolio from "./cardPortifolio"
import styles from './portifolio.module.css'
import gs1 from '/gs1.png'
import htmlSVG from '/html.svg'
import tsSVG from '/ts.svg'
import jsSVG from '/js.svg'
import figmaSVG from '/figma.svg'
import reactSVG from '/react.svg'
import cssSVG from '/css.svg'

function Portifolio(){
    return (
    <section id="portifolio" className={styles.sectionP}>
        <h1>Portifolio</h1>
    <CardPortifolio
    imagem={gs1}
    nome="Global Solution FIAP"
    desc="123"
    data='06/2023'
    id='gs1'
    tecs={[htmlSVG, cssSVG]}/> 
    
    </section>
    )
}

export default Portifolio