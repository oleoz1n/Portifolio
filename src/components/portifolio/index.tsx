import CardPortifolio from "./cardPortifolio"
import { useRef } from "react"
import { useInView } from "framer-motion"
import styles from "./portifolio.module.css"
import sabio from "/sabio.png"
import pokedex from "/pokedex.png"
import cida from "/cida.png"

import htmlSVG from "/html.svg"
import apiSVG from "/api.svg"
import jsSVG from "/js.svg"
import cssSVG from "/css.svg"
import cSharpSVG from "/cSharp.svg"
import dotNetSVG from "/dotNet.svg"
import azureSVG from "/azure.svg"

function Portifolio() {
	const ref = useRef(null)
	const ref2 = useRef(null)
	const isInView = useInView(ref, { once: true })

	const PokedexDesc = () => (
		<div className={styles.TextPortGap}>
			<p>
				Esse site foi desenvolvido por mim, durante um curso da
				plataforma digital da DIO.
			</p>
			<ul>As Tecnologias Usadas Foram:</ul>
			<li className={styles.Listinside}>HTML</li>
			<li className={styles.Listinside}>CSS</li>
			<li className={styles.Listinside}>JS</li>
			<li className={styles.Listinside}>API REST</li>
		</div>
	)

	const CidaDesc = () => (
		<div className={styles.TextPortGap}>
			<p>
				Essa API foi desenvolvida durante o Challenge da Plusoft na
				FIAP. A ideia é gerar insights para o usuário com base nos
				relatórios enviados por eles. Para isso, foram utilizados dois
				modelos de LLM: Phi3 Mini e Gemini 1.5 Flash. Além disso, para
				armazenamento de dados, foram usados o Azure Blob Storage e o
				Azure SQL.
			</p>
			<ul>As Tecnologias Usadas Foram:</ul>
			<li className={styles.Listinside}>C#</li>
			<li className={styles.Listinside}>.NET</li>
			<li className={styles.Listinside}>Azure</li>
		</div>
	)

	return (
		<section
			ref={ref}
			style={{
				transform: isInView ? "none" : "translateX(-200px)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
			}}
			id="projetos"
			className={styles.sectionP}
		>
			<h2 className={styles.titlePortifolio}>Projetos</h2>
			<div className={styles.projetos} ref={ref2}>
				<CardPortifolio
					imagem={pokedex}
					nome="Pokedex DIO"
					desc={<PokedexDesc />}
					data="04/2023"
					id="pokedex"
					tecs={[htmlSVG, cssSVG, jsSVG, apiSVG]}
					linkSite="https://oleoz1n.github.io/Pokedex-Modify/"
					linkGithub="https://github.com/oleoz1n/Pokedex-Modify"
				/>

				<CardPortifolio
					imagem={cida}
					nome="Cida"
					desc={<CidaDesc />}
					data="10/2024"
					id="cida"
					tecs={[cSharpSVG, dotNetSVG, azureSVG]}
					linkSite=""
					linkGithub="https://github.com/Open-Group-Fiap/CIDA-DotNet8"
				/>
			</div>
		</section>
	)
}

export default Portifolio
