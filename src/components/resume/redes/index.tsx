import linkedinIcon from "/linkedin.svg";
import githunIcon from "/github.svg";
import cvIcon from "/cv.svg";
import styles from "./redes.module.css";

function Github() {
    return (
        <div>
            <a href="https://github.com/oleoz1n" target="_blank">
                <div className={styles.infos}>
                    <img
                        src={githunIcon}
                        className={styles.Icons}
                        alt="GitHub-Icon"
                    />
                </div>
            </a>
        </div>
    );
}

function Linkedin() {
    return (
        <div>
            <a href="https://www.linkedin.com/in/oleoz1n/" target="_blank">
                <div className={styles.infos}>
                    <img
                        src={linkedinIcon}
                        className={styles.Icons}
                        alt="Linkedin-Icon"
                    />
                </div>
            </a>
        </div>
    );
}

function Cv() {
    return (
        <div>
            <a href="/Portifolio/CV.pdf" target="_blank">
                <div className={styles.infos}>
                    <img
                        src={cvIcon}
                        className={`${styles.cvIcon}  ${styles.Icons}`}
                        alt="CV-Icon"
                    />
                </div>
            </a>
        </div>
    );
}

function Redes() {
    return (
        <>
            <Github />
            <Linkedin />
            <Cv />
        </>
    );
}

export default Redes;
