import styles from './resume.module.css'
import { TypeAnimation } from 'react-type-animation';
import { useEffect, useState } from 'react';

function Type1(){
    
      return <h1><TypeAnimation
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

    const [showType2, setShowType2] = useState(false);
    const [showType3, setShowType3] = useState(false);

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

    return(
        <>
        <Type1/>
        <h2>{showType2 && <Type2 />}
        {showType3 && <Type3/>}</h2>
        </>
    )
}

export default Resume