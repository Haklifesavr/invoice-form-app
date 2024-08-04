import React from 'react';
import styles from './SummarySection.module.css';

const SummarySection: React.FC = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.labelContainer}>
          <p className={styles.label}>Subtotal</p>
        </div>
        <div className={styles.valueContainer}>
          <p className={styles.value}>$ 320.00</p>
        </div>
      </div>
      <div className={styles.summaryRow}>
        <div className={`${styles.labelContainer} ${styles.marginLeftLarge}`}>
          <p className={styles.label}>Tax</p>
        </div>
        <div className={styles.valueContainer}>
          <p className={styles.value}>10%</p>
        </div>
      </div>
      <div className={styles.summaryRow}>
        <div className={`${styles.labelContainer} ${styles.marginLeftSmall}`}>
          <p className={styles.totalLabel}>Total</p>
        </div>
        <div className={styles.valueContainer}>
          <p className={styles.totalValue}>$ 352.00</p>
        </div>
      </div>
    </div>
  );
};

export default SummarySection;
