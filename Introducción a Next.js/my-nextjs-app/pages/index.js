// pages/index.js
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bienvenido a My Next.js App</h1>
      <Link href="/about" className={styles.link}>
        Ir a About
      </Link>
    </div>
  );
}
