import React from 'react';
import { Product } from '../../homeworks/ts1/3_write';
import { AddToCart } from '../add-to-cart/add-to-cart';
import styles from './product-card.module.css';

export const ProductCard: React.FC<Product> = ({ name, desc, price, photo }) => {
  const shortDescr = (text: string, maxLength = 40) => {
    return text.substring(0, maxLength) + (text.length > maxLength ? '...' : '');
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={photo} alt={name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        {desc && <p className={styles.description}>{shortDescr(desc)}</p>}
        <div className={styles.footer}>
          <div className={styles.priceContainer}>
            <span className={styles.price}>{price.toFixed()}$</span>
          </div>
          <AddToCart count={0} />
        </div>
      </div>
    </div>
  );
};
