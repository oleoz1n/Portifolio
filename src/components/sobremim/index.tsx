import styles from "./sobremim.module.css";
import { useRef } from "react";
import { useInView } from "framer-motion";

function Sobremim() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

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
				<h2 className={styles.titleS}>Sobre mim</h2>
				<p className={styles.pSobre}>
					<span>Desenvolvedor</span> versátil com 19 anos, cursando
					Tecnólogo em Análise e Desenvolvimento de Sistemas pela
					FIAP. Possuo experiência em desenvolvimento web e mobile,
					utilizando tecnologias como <span>React</span>,{" "}
					<span>TypeScript</span>, <span>NodeJs</span>,{" "}
					<span>React Native</span>,<span>Java</span>,{" "}
					<span>Spring</span>, <span>.NET8</span>, <span>Python</span>{" "}
					e <span>Kotlin</span>. Tenho forte atuação em manipulação de
					dados com <span>PL/SQL</span> e <span>SQL</span>, além de
					trabalhar com containers <span>(Docker)</span> e plataformas
					em nuvem <span>(GCP, Azure)</span>. Sou adaptável,
					comunicativo e focado em metodologias ágeis
					<span>(Scrum)</span>, com habilidades sólidas em resolução
					de problemas e inteligência emocional.
				</p>
			</div>
		</section>
	);
}

export default Sobremim;
