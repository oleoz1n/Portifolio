import styles from "./cardPortifolio.module.css";
import CardTecnologias from "./cardTecnologias";
import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../../modal";

type CardPortifolioProps = {
  imagem: any;
  nome: string;
  desc: any;
  data: string;
  id: string;
  tecs: any;
  linkSite: string;
  linkGithub: string;
};

function CardPortifolio({
  imagem,
  nome,
  desc,
  data,
  id,
  tecs,
  linkSite,
  linkGithub,
}: CardPortifolioProps) {
  const [isHovered, setHovered] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <motion.div
      className={styles.centralizaModal}
      animate={{
        zIndex: openModal? 1000 : 1000,
        opacity: openModal? 1: 0,
      }}
      transition={{
        duration: openModal? .3 : .5
      }}
      >
        <Modal
          isOpen={openModal}
          setModalOpen={() => setOpenModal(!openModal)}
          linkSite={linkSite}
          linkGithub={linkGithub}
          imagem={imagem}
          title={nome}
          data={data}
        >
          {desc}
        </Modal>
      </motion.div>
      <motion.div
        className={styles.PortifolioCard}
        onMouseOver={() => {
          setHovered(true);
        }}
        onMouseOut={() => {
          setHovered(false);
        }}
        
        animate={{ 
          scale: isHovered ? 1.16 : 1,
          zIndex: isHovered ? 12 : 0
        }}
        transition={{
          duration:openModal ? 0 : isHovered ? .2 : .5
        }}
      >
        <motion.img
          animate={{
            filter: isHovered ? "brightness(1)" : "brightness(0.3)",
          }}
          transition={{ duration: isHovered ? 0.5 : 0.8 }}
          className={styles.imgPort}
          src={imagem}
          alt={nome}
          onClick={() => {
            setOpenModal(true), setHovered(false);
          }}
          draggable="false"
        />
        <motion.div
          className={styles.tecnologias}
          animate={{
            opacity: isHovered ? 0 : 1,
            display: isHovered ? 'none': 'flex'
          }}
          transition={{ duration: isHovered ? 0.5 : 1.5 }}
        >
          <p className={styles.titleCard}>{nome}</p>
          <div>
            <CardTecnologias tecs={tecs} />
          </div>
        </motion.div>
        <motion.div
          id={id}
          initial={false}
          animate={{ y: isHovered ? -8 : -100, 
            opacity: isHovered ? 1 : 0 }}
          transition={{ duration: isHovered ? 0.5 : 0.8 }}
          className={`${styles.balaoPort} ${"hideBotaoPort"}`}
        >
          <p className={styles.pBalaoPort}>{data}</p>
          <button className={styles.botaoBalaoPort} onClick={() => {
            setOpenModal(true), setHovered(false);
          }}>Ver mais</button>
        </motion.div>
      </motion.div>
    </>
  );
}

export default CardPortifolio;
