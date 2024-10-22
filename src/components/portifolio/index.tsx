import CardPortifolio from "./cardPortifolio";
import { useRef } from "react";
import { useInView } from "framer-motion";
import styles from "./portifolio.module.css";
import pokedex from "/pokedex.png";
import cida from "/cida.png";
import ecommerce from "/ecommerce.png";
import spring from "/spring.png";

import htmlSVG from "/html.svg";
import apiSVG from "/api.svg";
import jsSVG from "/js.svg";
import cssSVG from "/css.svg";
import cSharpSVG from "/cSharp.svg";
import dotNetSVG from "/dotNet.svg";
import azureSVG from "/azure.svg";
import nextjsSVG from "/nextjs.svg";
import tsSVG from "/ts.svg";
import javaSVG from "/java.svg";
import springSVG from "/spring.svg";

function Portifolio() {
	const ref = useRef(null);
	const ref2 = useRef(null);
	const isInView = useInView(ref, { once: true });

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
	);

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
	);

	const EcommerceDesc = () => (
		<div className={styles.TextPortGap}>
			<p>
				Essa aplicação foi desenvolvida usando Next.js e Tailwind CSS,
				com foco em criar uma experiência de e-commerce eficiente. O
				objetivo é permitir que os usuários naveguem e filtrem produtos
				de forma rápida e intuitiva, além de adicionar itens ao carrinho
				de compras. A funcionalidade de filtros é altamente
				personalizável, permitindo que os usuários busquem por
				categoria, preço e avaliações. O design responsivo e otimizado
				foi construído com Tailwind CSS, garantindo uma interface leve e
				moderna.
			</p>
			<ul>As Tecnologias Usadas Foram:</ul>
			<li className={styles.Listinside}>NEXTJS</li>
			<li className={styles.Listinside}>TYPESCRIPT</li>
			<li className={styles.Listinside}>TAILWIND</li>
			<li className={styles.Listinside}>API REST</li>
		</div>
	);

	const SpringUnidadesDesc = () => (
		<div className={styles.TextPortGap}>
			<p>
				Essa aplicação foi desenvolvida durante a faculdade usando
				Spring Boot, com foco em criar uma api para a gestão de oprações
				de unidades de uma empresa.
			</p>
			<ul>As Tecnologias Usadas Foram:</ul>
			<li className={styles.Listinside}>JAVA</li>
			<li className={styles.Listinside}>SPRING</li>
		</div>
	);

	const SpringMotosDesc = () => (
		<div className={styles.TextPortGap}>
			<p>
				Essa aplicação foi desenvolvida durante a faculdade usando
				Spring Boot, com foco em criar uma api para a gestão de veículos
				a serem comercializados.
			</p>
			<ul>As Tecnologias Usadas Foram:</ul>
			<li className={styles.Listinside}>JAVA</li>
			<li className={styles.Listinside}>SPRING</li>
		</div>
	);

	const SpringDepositoDesc = () => (
		<div className={styles.TextPortGap}>
			<p>
				Essa aplicação foi desenvolvida durante a faculdade usando
				Spring Boot, com foco em criar uma api para a gestão de produtos
				estocados a serem comercializados pelas lojas.
			</p>
			<ul>As Tecnologias Usadas Foram:</ul>
			<li className={styles.Listinside}>JAVA</li>
			<li className={styles.Listinside}>SPRING</li>
		</div>
	);

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
					imagem={spring}
					nome="Gestão de Unidades FIAP"
					desc={<SpringUnidadesDesc />}
					data="04/2024"
					id="springUnidades"
					tecs={[javaSVG, springSVG]}
					linkSite=""
					linkGithub="https://github.com/oleoz1n/spring-projetoFaculdade-unidades"
				/>
				<CardPortifolio
					imagem={spring}
					nome="Gestão de Deposito FIAP"
					desc={<SpringDepositoDesc />}
					data="05/2024"
					id="springDeposito"
					tecs={[javaSVG, springSVG]}
					linkSite=""
					linkGithub="https://github.com/oleoz1n/spring-projetoFaculdade-deposito"
				/>

				<CardPortifolio
					imagem={ecommerce}
					nome="Ecommerce"
					desc={<EcommerceDesc />}
					data="05/2024"
					id="ecommerce"
					tecs={[nextjsSVG, tsSVG, apiSVG]}
					linkSite="https://e-commerce-sepia-sigma.vercel.app"
					linkGithub="https://github.com/oleoz1n/e-commerce"
				/>
				<CardPortifolio
					imagem={spring}
					nome="Gestão de Motos FIAP"
					desc={<SpringMotosDesc />}
					data="06/2024"
					id="springMotos"
					tecs={[javaSVG, springSVG]}
					linkSite=""
					linkGithub="https://github.com/oleoz1n/spring-projetoFaculdade-motos"
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
	);
}

export default Portifolio;
