import styles from './contato.module.css'
import emailIcon from '/email.svg'
import linkedinIcon from '/linkedin.svg'
import githubIcon from '/github.svg'
import telefoneIcon from '/telefone.svg'
import { useRef } from "react";
import { useInView } from "framer-motion";


function Contato(){

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section className={styles.sectionC}
        ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
        >
            <h2 className={styles.titleContato}>Contato</h2>
            <div className={styles.contatos}>
        <div className={styles.contato}><a href="mailto:leopity0@gmail.com" target="_blank" rel="noopener noreferrer"><img className={styles.icons} src={emailIcon} alt="Email-Icon" /></a><h3><a className={styles.linkTitle} target='_blank' href="mailto:leopity0@gmail.com">Email</a></h3><a className={styles.link} target='_blank' href="mailto:leopity0@gmail.com">leopity0@gmail.com</a></div>
        <div className={styles.contato}><a href="https://wa.me/5511940215896" target="_blank" rel="noopener noreferrer"><img className={styles.iconTelefone} src={telefoneIcon} alt="Telefone-Icon" /></a><h3><a className={styles.linkTitle} target='_blank' href="https://wa.me/5511940215896">Telefone</a></h3><a className={styles.link} target='_blank' href="https://wa.me/5511940215896">(11) 940215896</a></div>
        <div className={styles.contato}><a href="https://www.linkedin.com/in/oleoz1n/" target="_blank" rel="noopener noreferrer"><img className={styles.icons} src={linkedinIcon} alt="Linkedin-Icon" /></a><h3><a className={styles.linkTitle} target='_blank' href="https://www.linkedin.com/in/oleoz1n/">Linkedin</a></h3><a className={styles.link} target='_blank'  href="https://www.linkedin.com/in/oleoz1n/">@oLeoz1n</a></div>
        <div className={styles.contato}><a href="https://github.com/oleoz1n" target="_blank" rel="noopener noreferrer"><img className={styles.icons} src={githubIcon} alt="GitHub-Icon" /></a><h3><a className={styles.linkTitle} target='_blank' href="https://github.com/oleoz1n">GitHub</a></h3><a className={styles.link} href="https://github.com/oleoz1n" target='_blank'>@oLeoz1n</a></div>
        </div>
        </section>
    )
}

export default Contato