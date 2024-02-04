import styles from "./sobremim.module.css";
import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import Habilidade from "./habilidade";
import htmlSVG from "/html.svg";
import tsSVG from "/ts.svg";
import apiSVG from "/api.svg";
import jsSVG from "/js.svg";
import figmaSVG from "/figma.svg";
import reactSVG from "/react.svg";
import cssSVG from "/css.svg";
import pythonSVG from "/python.svg";
import javaSVG from "/java.svg";
import sqlSVG from "/sql.svg";

function Sobremim() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const isInViewLoop = useInView(ref);

    useEffect(() => {
        if (isInViewLoop) {
            const elementos = document.querySelectorAll(".select");
            elementos.forEach((elemento) => {
                elemento.classList.remove("select");
            });
            const sobremimHeader = document.getElementById("sobremimHeader");
            if (sobremimHeader) {
                sobremimHeader.classList.add("select");
            }
        }
    }, [isInViewLoop]);

    const listaDeHabilidades = [
        { imagem: apiSVG, nome: "API REST" },
        { imagem: htmlSVG, nome: "HTML5" },
        { imagem: cssSVG, nome: "CSS3" },
        { imagem: tsSVG, nome: "TypeScript" },
        { imagem: jsSVG, nome: "JavaScript" },
        { imagem: figmaSVG, nome: "Figma" },
        { imagem: reactSVG, nome: "React" },
        { imagem: pythonSVG, nome: "Python" },
        { imagem: javaSVG, nome: "Java" },
        { imagem: sqlSVG, nome: "SQL" },
    ];

    return (
        <section
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
            id="sobremim"
            className={styles.sectionSobremim}
        >
            <div className={styles.divSobremim}>
                <h2 id="sobremimHeader" className={styles.titleS}>
                    Sobre mim
                </h2>
                <p className={styles.pSobre}>
                    Desenvolvedor Full Stack com experiência em{" "}
                    <span>TypeScript</span>, <span>JavaScript</span>,{" "}
                    <span>React</span>, <span>HTML</span>, <span>CSS</span> e{" "}
                    <span>Python</span>. Apaixonado pelo desenvolvimento de
                    componentes reutilizáveis. Também possui experiência em
                    projetos gerenciados por Metodologias Ágeis. Estudando
                    Análise e Desenvolvimento de Sistemas pela FIAP.
                </p>
                <h2 className={styles.titleH}>Habilidades</h2>
                <div className={styles.habilidades}>
                    {listaDeHabilidades.map((habilidade, index) => (
                        <Habilidade
                            key={index}
                            imagem={habilidade.imagem}
                            nome={habilidade.nome}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Sobremim;
