import React from 'react';
import styles from './InvoiceDetails.module.css';

const InvoiceDetails: React.FC = () => {
  return (
    <>
      <p className={styles.invoiceTitle}>New Invoice</p>
      <div className={styles.detailRow}>
        <div className={styles.detailColumn}>
          <p className={styles.label}>Invoice Date</p>
          <p className={styles.value}>12 Dec, 2024</p>
        </div>
        <div className={styles.detailColumn}>
          <p className={styles.label}>Payment Terms</p>
          <p className={styles.value}>Net 30 Days</p>
        </div>
      </div>
    </>
  );
};

export default InvoiceDetails;
