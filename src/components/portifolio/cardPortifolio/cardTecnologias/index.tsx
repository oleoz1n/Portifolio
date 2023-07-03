import styles from './cardTecnologias.module.css';

interface CardTecnologiasProps {
  tecs: any;
}

function CardTecnologias({ tecs }: CardTecnologiasProps) {
  const Tecnologias = () => (
    tecs.map((i: any) => <img className={styles.tecnologia} src={i} key={i} alt={i} />)
  );

  return (
    <div className={styles.tecnologiasDrop}>
      <Tecnologias />
      </div>
  );
}

export default CardTecnologias;