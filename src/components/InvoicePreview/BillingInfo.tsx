import React from 'react';
import styles from './BillingInfo.module.css';

const BillingInfo: React.FC = () => {
  return (
    <div className={styles.billingInfoContainer}>
      <div className={styles.billingColumn}>
        <p className={styles.label}>Billed From</p>
        <p className={styles.value}>Weisnatt Design Agency</p>
        <p className={styles.value}>support@weisnattdesign.co</p>
        <p className={styles.value}>1234 Elm Street</p>
        <p className={styles.value}>New York, 10001</p>
        <p className={styles.value}>United States</p>
      </div>
      <div className={styles.billingColumn}>
        <p className={styles.label}>Billed To</p>
        <p className={styles.value}>John Glover</p>
        <p className={styles.value}>john.glover@gmail.com</p>
        <p className={styles.value}>699 Hoppe Throughway</p>
        <p className={styles.value}>New York, 10001</p>
        <p className={styles.value}>United States</p>
      </div>
    </div>
  );
};

export default BillingInfo;
