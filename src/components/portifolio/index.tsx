import CardPortifolio from "./cardPortifolio"
import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import styles from './portifolio.module.css'
import gs1 from '/gs1.png'
import sabio from '/sabio.png'
import pokedex from '/pokedex.png'
import htmlSVG from '/html.svg'
// import tsSVG from '/ts.svg'
import apiSVG from '/api.svg'
import jsSVG from '/js.svg'
// import figmaSVG from '/figma.svg'
// import reactSVG from '/react.svg'
import cssSVG from '/css.svg'

function Portifolio(){

        const ref = useRef(null);
        const ref2 = useRef(null);
        const isInView = useInView(ref, { once: true });
        const isInViewLoop = useInView(ref2);


    const Gs1Desc = () => (
        <div className={styles.TextPortGap}>
        <p>
        Esse site foi desenvolvido por mim, durante a Global Solution do 1º semestre do curso de análise e desenvolvimento de sistemas da FIAP.</p>
        <ul>As Tecnologias Usadas Foram:</ul>
        <li className={styles.Listinside}>HTML</li>
        <li className={styles.Listinside}>CSS</li>
        </div>
      );

      const SabioDesc = () => (
        <div className={styles.TextPortGap}>
        <p>
        Esse site foi desenvolvido por mim, baseado em um site chamado "Pergunte ao Polvo", na época que criei o site, achava a ideia muito interessante.</p>
        <ul>As Tecnologias Usadas Foram:</ul>
        <li className={styles.Listinside}>HTML</li>
        <li className={styles.Listinside}>CSS</li>
        <li className={styles.Listinside}>JS</li>
        </div>
      );

      const PokedexDesc = () => (
        <div className={styles.TextPortGap}>
        <p>
        Esse site foi desenvolvido por mim, durante um curso da plataforma digital da DIO.</p>
        <ul>As Tecnologias Usadas Foram:</ul>
        <li className={styles.Listinside}>HTML</li>
        <li className={styles.Listinside}>CSS</li>
        <li className={styles.Listinside}>JS</li>
        <li className={styles.Listinside}>API REST</li>
        </div>
      );
      useEffect(() => {
        if (isInViewLoop) {
          const elementos = document.querySelectorAll(".select");
          elementos.forEach((elemento) => {
            elemento.classList.remove("select");
          });
          const projetosHeader = document.getElementById("projetosHeader");
          if (projetosHeader) {
            projetosHeader.classList.add("select");
          }
        
        }
      }, [isInViewLoop]);
        

    return (
        <section
        ref={ref}
        style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
          id='projetos'
        className={styles.sectionP}>
        
        <h2 className={styles.titlePortifolio}>Projetos</h2>
        <div className={styles.projetos} ref={ref2}>
    <CardPortifolio
    imagem={gs1}
    nome="Global Solution FIAP"
    desc={<Gs1Desc/>}
    data='06/2023'
    id='gs1'
    tecs={[htmlSVG, cssSVG]}
    linkSite='https://oleoz1n.github.io/AI-Feed'
    linkGithub='https://github.com/oleoz1n/AI-Feed'
    /> 
    <CardPortifolio
    imagem={sabio}
    nome="Pergunte ao Sabio"
    desc={<SabioDesc/>}
    data='09/2022'
    id='sabio'
    tecs={[htmlSVG, cssSVG, jsSVG]}
    linkSite='https://oleoz1n.github.io/pergunte-ao-sabio/'
    linkGithub='https://github.com/oleoz1n/pergunte-ao-sabio'
    /> 
    <CardPortifolio
    imagem={pokedex}
    nome="Pokedex DIO"
    desc={<PokedexDesc/>}
    data='04/2023'
    id='pokedex'
    tecs={[htmlSVG, cssSVG, jsSVG,apiSVG]}
    linkSite='https://github.com/oleoz1n/Pokedex-Modify'
    linkGithub='https://oleoz1n.github.io/Pokedex-Modify/'
    /> 
    </div>
    </section>
    )
}

export default Portifolio