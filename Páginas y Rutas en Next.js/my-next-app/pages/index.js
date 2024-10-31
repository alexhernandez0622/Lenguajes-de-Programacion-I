// pages/index.js

import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bienvenido a Mi App con Next.js</h1>
      <p className={styles.description}>
        Explora nuestras páginas y rutas dinámicas.
      </p>
      <nav className={styles.nav}>
        <Link href="/about">Sobre Nosotros</Link>
        <Link href="/product/1">Producto 1</Link>
        <Link href="/product/2">Producto 2</Link>
      </nav>
    </div>
  );
}
