import emailIcon from '/email.svg'
import linkedinIcon from '/linkedin.svg'
import githunIcon from '/github.svg'
import cvIcon from '/cv.svg'
import styles from './redes.module.css'

function showBalao(id:string){
    const el = document.getElementById(id);
    if(el){
    el.classList.add('showBalao');
    el.classList.remove('hideBalao')
}
}

function hideBalao(id:string){
    const el = document.getElementById(id);
    if(el){
    el.classList.add('hideBalao');
    el.classList.remove('showBalao');
}
}


function Email(){

    const elementId = 'email';

    return(

        <div
        onMouseOver={() => showBalao(elementId)}
        onMouseOut={() => hideBalao(elementId)}
        >
        <a href="mailto:leopity0@gmail.com" target='_blank'>
        <div className={`${styles.infos} ${styles.emailNone}`}>
            <img src={emailIcon} className={styles.Icons} alt="Email-Icon" />
        </div>
        </a>
        <div className={`${styles.balao} ${'hideBalao'}`} id={elementId}><p>Email</p></div>
        </div>
    )
}


function Github(){

    const elementId = 'github';

    return(

        <div
        onMouseOver={() => showBalao(elementId)}
        onMouseOut={() => hideBalao(elementId)}
        >
        <a href="https://github.com/oleoz1n" target='_blank'>
        <div className={styles.infos}>
            <img src={githunIcon} className={styles.Icons} alt="GitHub-Icon" />
        </div>
        </a>
        <div className={`${styles.balao} ${'hideBalao'}`} id={elementId}><p>Github</p></div>
        </div>
    )
}

function Linkedin(){

    const elementId = 'linkedin';

    return(
        <div
        onMouseOver={() => showBalao(elementId)}
        onMouseOut={() => hideBalao(elementId)}
        >
        <a href="https://www.linkedin.com/in/oleoz1n/" target='_blank'>
        <div className={styles.infos}>
            <img src={linkedinIcon} className={styles.Icons} alt="Linkedin-Icon" />
        </div>
        </a>
        <div className={`${styles.balao} ${'hideBalao'}`} id={elementId}><p>Linkedin</p></div>
        </div>
    )
}

function Cv(){

    const elementId = 'cv';

    return(
        <div 
        onMouseOver={() => showBalao(elementId)}
        onMouseOut={() => hideBalao(elementId)}>
        <a href="/react-portifolio/CV.pdf" target='_blank'>
        <div className={styles.infos}>
            <img src={cvIcon} className={`${styles.cvIcon}  ${styles.Icons}`} alt="CV-Icon" />
        </div>
        </a>
        <div className={`${styles.balao} ${'hideBalao'}`} id={elementId}><p>Curriculo PDF</p></div>
        </div>
    )
}

function Redes(){
    
    
    
    return(
        <>
        <Email/>
        <Github/>
        <Linkedin/>
        <Cv/>
        </>
)
}

export default Redes