import styles from './resume.module.css'
import { TypeAnimation } from 'react-type-animation';
import { useRef, useEffect, useState } from 'react';
import Redes from './redes'
import { motion, useInView } from "framer-motion";

function Type1(){
    
      return <h1 className={styles.h1R}><TypeAnimation
        sequence={['Olá, sou o Leonardo Guerra']}
        cursor={false}
        speed={1} 
        /></h1>
}

function Type2(){
    
      return <TypeAnimation 
      sequence={['Sou ']}
      cursor={false}
    /> ;
}

function Type3(){
    return <TypeAnimation className={styles.type}
    sequence={[
      // Same substring at the start will only be typed out once, initially
      'Desenvolvedor Full Stack',
      1000, // wait 1s before replacing "Mice" with "Hamsters"
      'Estudante',
      1000,
      'Focado',
      1000,
      'Proativo',
      1000,
      'Desenvolvedor Full Stack.',
      1000
    ]}
    wrapper="span"
    speed={30} 
  />
}

function Resume(){

  const ref = useRef(null);
  const isInViewLoop = useInView(ref);

    const [showType2, setShowType2] = useState(false);
    const [showType3, setShowType3] = useState(false);
    const [showDiv, setShowDiv] = useState(false)

    useEffect(() => {
      const timeout = setTimeout(() => {
        setShowType2(true);
      }, 3000);
  
      return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
          setShowType3(true);
        }, 3400);
    
        return () => clearTimeout(timeout);
      }, []);

      useEffect(() => {
        const timeout = setTimeout(() => {
          setShowDiv(true);
        }, 5200);
    
        return () => clearTimeout(timeout);
      }, []);

      useEffect(() => {
        if (isInViewLoop) {
          const elementos = document.querySelectorAll(".select");
          elementos.forEach((elemento) => {
            elemento.classList.remove("select");
          });
          const resumoHeader = document.getElementById("resumoHeader");
          if (resumoHeader) {
            resumoHeader.classList.add("select");
          }
        
        }
      }, [isInViewLoop]);
    return(
        <section  className={styles.sectionResume} id="resumo">
        <div>
          <div ref={ref}>
        <Type1 />
        </div>
        <h2 className={styles.types2}>{showType2 && <Type2 />}
        {showType3 && <Type3/>}</h2>
        
        { showDiv && <motion.div className={styles.redes}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
          scale: {
            type: "spring",
            damping: 5,
            stiffness: 100,
            restDelta: 0.001
          }
          }}>
      <Redes/>
      </motion.div>}
        </div>
        </section>
    )
}

export default Resume