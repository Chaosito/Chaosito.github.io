import React from 'react';
import { Product } from '../../homeworks/ts1/3_write';
import { AddToCart } from '../add-to-cart/add-to-cart';
import styles from './product-card-detail.module.css';

export const ProductCardDetail: React.FC<Product> = ({ name, desc, price, photo, category }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={photo} alt={name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.priceContainer}>
            <span className={styles.price}>{price.toFixed()}$</span>
          </div>
          <div className={styles.category}>
            <span className={styles.categoryName}>{category.name}</span>
          </div>
        </div>
        <h3 className={styles.name}>{name}</h3>
        {desc && <p className={styles.description}>{desc}</p>}
        <AddToCart count={0} />
      </div>
    </div>
  );
};
