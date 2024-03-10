import styles from "./sobremim.module.css";
import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";

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

    return (
        <section
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
            }}
            id="sobremim"
            className={styles.sectionSobremim}
        >
            <div className={styles.divSobremim}>
                <h2 id="sobremimHeader" className={styles.titleS}>
                    Sobre mim
                </h2>
                <p className={styles.pSobre}>
                    Sou um <span>desenvolvedor </span>
                    dedicado e versátil, motivado por desafios e sempre em busca
                    de mais conhecimento para garantir o sucesso e qualidade no
                    que desenvolvo,<span> trabalho bem em equipe</span>, sou
                    <span> disponível</span>,<span> comunicativo </span>,
                    <span> adaptável</span> e possuo
                    <span> empatia</span> e<span> inteligência emocional</span>.
                    Meus objetivos incluem aprimorar minhas habilidades de
                    desenvolvimento, contribuir para projetos inovadores e
                    crescer profissionalmente em um ambiente estimulante.
                </p>
            </div>
        </section>
    );
}

export default Sobremim;
