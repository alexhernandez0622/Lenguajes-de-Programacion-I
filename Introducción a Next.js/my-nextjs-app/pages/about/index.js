// pages/about/index.js
import Link from 'next/link';
import styles from '../../styles/About.module.css';

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Acerca de esta Aplicación</h1>
      <p className={styles.text}>Esta es una página de ejemplo creada con Next.js.</p>
      <Link href="/" className={styles.link}>
        Volver a Inicio
      </Link>
    </div>
  );
}
