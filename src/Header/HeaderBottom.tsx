import React from 'react';
import styles from './HeaderBottom.module.css';

const HeaderBottom: React.FC = () => {
  return (
    <div className={styles.headerBottom}>
      <div>
        <h1 className={styles.title}>New Invoice</h1>
        <p className={styles.subtitle}>
          Create new invoice for your customers
        </p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.resetButton}>Reset</button>
        <button className={styles.saveButton}>Save</button>
      </div>
    </div>
  );
};

export default HeaderBottom;
