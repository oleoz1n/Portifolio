import styles from './cardPortifolio.module.css'
import CardTecnologias from './cardTecnologias';
import { useState } from 'react';
import { motion } from "framer-motion";

type CardPortifolioProps = {
    imagem: any;
    nome: string;
    desc: string;
    data: string;
    id: string;
    tecs: any;
  };

function CardPortifolio({ imagem, nome, desc, data, id, tecs }: CardPortifolioProps) {

  const [isHovered, setHovered] = useState(false)

  return (
      <motion.div className={styles.PortifolioCard}
      onMouseOver={() => {setHovered(true)}}
      onMouseOut={() => {setHovered(false)}}
      >        
      <motion.img
      animate={{
        filter: isHovered ? 'brightness(1)' : 'brightness(0.3)'
      }}
      transition={{ duration: isHovered ? .5 : .8}}
      className={styles.imgPort} src={imagem} alt={nome} draggable='false'/>
      <motion.div 
      className={styles.tecnologias}
      animate={{
        opacity: isHovered ? 0 : 1
      }}
      transition={{ duration: isHovered ? .5 : 1.5}}
      >
        <p className={styles.titleCard}>{nome}</p>
      <div>
      <CardTecnologias 
      tecs={tecs}/>
      </div>
      </motion.div>
      <motion.div
      id={id} 
      initial={false}
      animate={{ y: isHovered ? -8 : -100,
      opacity: isHovered ? 1 : 0}}
      transition={{ duration: isHovered ? .5 : .8}}
      className={`${styles.balaoPort} ${'hideBotaoPort'}`}><p className={styles.pBalaoPort}>{data}</p><button className={styles.botaoBalaoPort}>Ver mais</button></motion.div>
      </motion.div>

  )
}

export default CardPortifolio