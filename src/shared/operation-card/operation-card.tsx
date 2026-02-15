import React from 'react';
import { Operation } from 'src/homeworks/ts1/3_write';
import styles from './operation-card.module.css';

export const OperationCard: React.FC<Operation> = ({ name, desc, amount, category, type }) => {
  const shortDescr = (text: string, maxLength = 50) => {
    return text.substring(0, maxLength) + (text.length > maxLength ? '...' : '');
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={`${styles.amount} ${styles[type.toLowerCase()]}`}>
          {type === 'Cost' ? '-' : '+'}
          {amount.toFixed()}$
        </div>
        <div className={styles.category}>
          <span className={styles.categoryName}>{category.name}</span>
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        {desc && <p className={styles.description}>{shortDescr(desc)}</p>}
      </div>
    </div>
  );
};
