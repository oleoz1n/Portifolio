import Habilidade from "./habilidade"
import styles from "./habilidades.module.css"
import htmlSVG from "/html.svg"
import tsSVG from "/ts.svg"
import apiSVG from "/api.svg"
import jsSVG from "/js.svg"
import figmaSVG from "/figma.svg"
import reactSVG from "/react.svg"
import cssSVG from "/css.svg"
import pythonSVG from "/python.svg"
import javaSVG from "/java.svg"
import sqlSVG from "/sql.svg"
import dotNetSVG from "/dotNet.svg"
import cSharp from "/cSharp.svg"
import spring from "/spring.svg"
import azure from "/azure.svg"
import gcp from "/gcp.svg"
import powerBi from "/powerBi.svg"

import { useRef } from "react"
import { useInView } from "framer-motion"

export default function Habilidades() {
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true })

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
		{ imagem: dotNetSVG, nome: ".NET 8" },
		{ imagem: cSharp, nome: "C#" },
		{ imagem: spring, nome: "Spring Boot" },
		{ imagem: azure, nome: "Azure" },
		{ imagem: gcp, nome: "Google Cloud" },
		{ imagem: powerBi, nome: "Power BI" },
	]
	return (
		<section
			ref={ref}
			style={{
				transform: isInView ? "none" : "translateX(-200px)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
			}}
			className={styles.sectionHabilidades}
			id="habilidades"
		>
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
		</section>
	)
}
