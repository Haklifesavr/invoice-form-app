import React from 'react';
import styles from './BillingInfo.module.css';

interface BillingInfoProps {
  billedFrom: {
    companyName: string;
    companyEmail: string;
    streetAddress: string;
    city: string;
    postalCode: string;
    country: string;
  };
  billedTo: {
    clientName: string;
    clientEmail: string;
    streetAddress: string;
    city: string;
    postalCode: string;
    country: string;
  };
}

const BillingInfo: React.FC<BillingInfoProps> = ({ billedFrom, billedTo }) => {
  return (
    <div className={styles.billingInfoContainer}>
      <div className={styles.billingColumn}>
        <p className={styles.label}>Billed From</p>
        <p className={styles.value}>{billedFrom.companyName || ''}</p>
        <p className={styles.value}>{billedFrom.companyEmail || ''}</p>
        <p className={styles.value}>{billedFrom.streetAddress || ''}</p>
        <p className={styles.value}>
          {billedFrom.city && billedFrom.postalCode
            ? `${billedFrom.city}, ${billedFrom.postalCode}`
            : billedFrom.city || billedFrom.postalCode || ''}
        </p>
        <p className={styles.value}>{billedFrom.country || ''}</p>
      </div>
      <div className={styles.billingColumn}>
        <p className={styles.label}>Billed To</p>
        <p className={styles.value}>{billedTo.clientName || ''}</p>
        <p className={styles.value}>{billedTo.clientEmail || ''}</p>
        <p className={styles.value}>{billedTo.streetAddress || ''}</p>
        <p className={styles.value}>
          {billedTo.city && billedTo.postalCode
            ? `${billedTo.city}, ${billedTo.postalCode}`
            : billedTo.city || billedTo.postalCode || ''}
        </p>
        <p className={styles.value}>{billedTo.country || ''}</p>
      </div>
    </div>
  );
};

export default BillingInfo;
