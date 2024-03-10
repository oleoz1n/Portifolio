import styles from "./resume.module.css";
import { TypeAnimation } from "react-type-animation";
import Redes from "./redes";

function Type() {
    return (
        <h2 className={styles.types2}>
            <TypeAnimation
                className={styles.type}
                sequence={["Analista e Desenvolvedor de Sistemas"]}
                wrapper="span"
                speed={30}
            />
        </h2>
    );
}

function Resume() {
    return (
        <section className={styles.sectionResume}>
            <div>
                <div>
                    <h1 className={styles.h1R}>Olá, sou o Leonardo Guerra</h1>
                </div>

                <Type />

                <div className={styles.redes}>
                    <Redes />
                </div>
            </div>
        </section>
    );
}

export default Resume;
