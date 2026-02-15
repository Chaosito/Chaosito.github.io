import React from 'react';
import { Logo } from '../logo/logo';
import styles from './header.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
      </div>
    </header>
  );
};
