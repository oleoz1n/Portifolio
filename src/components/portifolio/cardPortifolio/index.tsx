import styles from './cardPortifolio.module.css'
import { useState } from 'react';
import { motion } from "framer-motion";

type CardPortifolioProps = {
    imagem: any;
    nome: string;
    desc: string;
    data:string;
    id:string;
  };

function CardPortifolio({ imagem, nome, desc, data, id }: CardPortifolioProps) {

  const [isHovered, setHovered] = useState(false)

  return (
      <motion.div className={styles.PortifolioCard}
      onMouseOver={() => {setHovered(true)}}
      onMouseOut={() => {setHovered(false)}}
      animate={{
        filter: isHovered ? 'brightness(1)' : 'brightness(0.5)',
      }}
      transition={{ duration: isHovered ? 1 : 2}}
      >        
      <img className={styles.imgPort} src={imagem} alt={nome} draggable='false'
      
      />
      <motion.div
      id={id} 
      initial={false}
      animate={{ y: isHovered ? -8 : -100,
      opacity: isHovered ? 1 : 0}}
      transition={{ duration: isHovered ? 1 : 2}}
      className={`${styles.balaoPort} ${'hideBotaoPort'}`}><p className={styles.pBalaoPort}>{data}</p><button className={styles.botaoBalaoPort}>Ver mais</button></motion.div>
      </motion.div>

  )
}

export default CardPortifolio