// pages/about.js

import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Acerca de Nosotros</h1>
      <p className={styles.description}>
        Somos una empresa dedicada a ofrecer productos de alta calidad.
        Nuestro objetivo es satisfacer las necesidades de nuestros clientes a través de innovaciones y un servicio excepcional.
      </p>
      <h2 className={styles.subtitle}>Nuestra Misión</h2>
      <p>
        Proporcionar soluciones que faciliten la vida de nuestros clientes y les ayuden a alcanzar sus objetivos.
      </p>
      <h2 className={styles.subtitle}>Nuestra Visión</h2>
      <p>
        Ser reconocidos como líderes en el sector y pioneros en la creación de productos innovadores que transformen el mercado.
      </p>
    </div>
  );
}
