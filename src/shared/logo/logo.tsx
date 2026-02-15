import React from 'react';
import styles from './logo.module.css';

export const Logo: React.FC = () => {
  return (
    <div className={`${styles.logo}`}>
      <div className={styles.circle}>
        <span className={styles.text}>X</span>
      </div>
    </div>
  );
};
