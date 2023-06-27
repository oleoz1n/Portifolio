import emailIcon from './email.png'
import linkedinIcon from './linkedin.png'
import githunIcon from './github.png'
import styles from './redes.module.css'


function Email(){
    return(
        <a href="mailto:leopity0@gmail.com" target='_blank'>
        <div className={`${styles.infos} ${styles.emailNone}`}>
            <img src={emailIcon} alt="Email-Icon" />
        </div>
        </a>
    )
}


function Github(){
    return(
        <a href="https://github.com/oleoz1n" target='_blank'>
        <div className={styles.infos}>
            <img src={githunIcon} alt="GitHub-Icon" />
        </div>
        </a>
    )
}

function Linkedin(){
    return(
        <a href="https://github.com/oleoz1n" target='_blank'>
        <div className={styles.infos}>
            <img src={linkedinIcon} alt="Linkedin-Icon" />
        </div>
        </a>
    )
}

function Redes(){
    
    
    
    return(
        <>
        <Email/>
        <Github/>
        <Linkedin/>
        </>
)
}

export default Redes