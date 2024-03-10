import logob from "./L1-black.svg";
import styles from "./header.module.css";
import { useMotionValue, useTransform, motion } from "framer-motion";
import { Example } from "./navbar";

function Header() {
    const container = {
        hidden: { opacity: 1, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [150, -150]);
    const rotateY = useTransform(x, [-100, 100], [-150, 150]);

    function SelectMode(x: any) {
        const elementos = document.querySelectorAll(".select");
        elementos.forEach((elemento) => {
            elemento.classList.remove("select");
        });
        const selectId = document.getElementById(x);
        if (selectId) {
            selectId.classList.add("select");
        }
    }

    return (
        <>
            <header id="header" className={styles.header}>
                <Example />
                <motion.ul
                    initial="hidden"
                    animate="visible"
                    variants={container}
                    className={styles.headerul}
                >
                    <motion.li variants={item}>
                        <a
                            id="resumoHeader"
                            className={`select ${styles.ah}`}
                            onClick={() => SelectMode("resumoHeader")}
                            href="#resumo"
                        >
                            Resumo
                        </a>
                    </motion.li>
                    <motion.li variants={item}>
                        <a
                            id="sobremimHeader"
                            className={styles.ah}
                            onClick={() => SelectMode("sobremimHeader")}
                            href="#sobremim"
                        >
                            Sobre Mim
                        </a>
                    </motion.li>
                    <motion.li>
                        <motion.div
                            style={{ x, y, rotateX, rotateY, z: 100 }}
                            drag
                            dragElastic={0.09}
                            dragConstraints={{
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                            }}
                            whileTap={{ cursor: "grabbing" }}
                        >
                            <img
                                src={logob}
                                alt="logo"
                                id="logoHeader"
                                draggable="false"
                                className={styles.logo}
                            />
                        </motion.div>
                    </motion.li>
                    <motion.li variants={item}>
                        <a
                            id="projetosHeader"
                            onClick={() => SelectMode("projetoHeader")}
                            className={styles.ah}
                            href="#projetos"
                        >
                            Projetos
                        </a>
                    </motion.li>
                    <motion.li variants={item}>
                        <a
                            id="contatoHeader"
                            onClick={() => SelectMode("contatoHeader")}
                            className={styles.ah}
                            href="#contato"
                        >
                            Contato
                        </a>
                    </motion.li>
                </motion.ul>
            </header>
        </>
    );
}
export default Header;
