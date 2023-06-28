import styles from './cardPortifolio.module.css'
import { motion } from "framer-motion";

type CardPortifolioProps = {
    imagem: any;
    nome: string;
    desc: string;
    data:string;
    id:string;
  };

  function showBotaoPort(id:string){
    const el = document.getElementById(id);
    if(el){
    el.classList.add('showBotaoPort');
    el.classList.remove('hideBotaoPort')
}
}

function hideBotaoPort(id:string){
    const el = document.getElementById(id);
    if(el){
    el.classList.add('hideBotaoPort');
    el.classList.remove('showBotaoPort');
}
}

function CardPortifolio({ imagem, nome, desc, data, id }: CardPortifolioProps) {

  return (
      <motion.div className={styles.PortifolioCard}
      onMouseOver={() => showBotaoPort(id)}
      onMouseOut={() => hideBotaoPort(id)}
      >        
      <img className={styles.imgPort} src={imagem} alt={nome} draggable='false'/>
      <motion.div
      id={id} 
      className={`${styles.balaoPort} ${'hideBotaoPort'}`}><p className={styles.pBalaoPort}>{data}</p><button className={styles.botaoBalaoPort}>Ver mais</button></motion.div>
      </motion.div>

  )
}

export default CardPortifolio