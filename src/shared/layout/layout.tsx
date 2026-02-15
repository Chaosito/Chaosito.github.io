import React from 'react';
import { Header } from '../header/header';
import styles from './layout.module.css';

interface LayoutProps {
  mainContent: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ mainContent }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{mainContent}</main>
    </div>
  );
};
