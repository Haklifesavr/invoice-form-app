import React from 'react';
import styles from './SummarySection.module.css';

interface Item {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

interface SummarySectionProps {
  items: Item[];
}

const SummarySection: React.FC<SummarySectionProps> = ({ items }) => {
  const subtotal = items.reduce((acc, item) => acc + item.total, 0);
  const tax = 0.1 * subtotal;
  const total = subtotal + tax;

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.labelContainer}>
          <p className={styles.label}>Subtotal</p>
        </div>
        <div className={styles.valueContainer}>
          <p className={styles.value}>$ {subtotal.toFixed(2)}</p>
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
          <p className={styles.totalValue}>$ {total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default SummarySection;
