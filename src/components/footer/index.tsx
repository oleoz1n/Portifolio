import styles from "./footer.module.css";

function Footer() {
    return (
        <footer className={styles.centralizaFooter}>
            <div>
                <p className={styles.copyRight}>
                    &copy; Desenvolvido por oLeoz1n
                </p>
            </div>
        </footer>
    );
}

export default Footer;
