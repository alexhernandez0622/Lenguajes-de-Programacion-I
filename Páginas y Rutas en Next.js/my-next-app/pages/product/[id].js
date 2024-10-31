// pages/product/[id].js

import { useRouter } from 'next/router';
import styles from '../../styles/Product.module.css';

// Simulando un conjunto de datos de productos
const products = {
  1: {
    name: 'Producto 1',
    description: 'Este es el primer producto de nuestra gama. Tiene características innovadoras que te ayudarán en tu día a día.',
    price: '$99.99',
  },
  2: {
    name: 'Producto 2',
    description: 'Nuestro segundo producto es aún mejor. Ofrece funcionalidades avanzadas y un diseño elegante.',
    price: '$129.99',
  },
};

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const product = products[id];

  if (!product) return <p>Producto no encontrado.</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{product.name}</h1>
      <p className={styles.price}>{product.price}</p>
      <p className={styles.description}>{product.description}</p>
      <button className={styles.button}>Añadir al Carrito</button>
    </div>
  );
}
