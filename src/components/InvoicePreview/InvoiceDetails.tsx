import React from 'react';
import styles from './InvoiceDetails.module.css';
import { paymentTerms as terms } from '../../utils/paymentTerms';

interface InvoiceDetailsProps {
  invoiceDate: string;
  paymentTerms: string;
}

const InvoiceDetails: React.FC<InvoiceDetailsProps> = ({ invoiceDate, paymentTerms }) => {
  // Find the label corresponding to the selected payment term value
  const selectedTerm = terms.find(term => term.value === paymentTerms);

  return (
    <>
      <p className={styles.invoiceTitle}>New Invoice</p>
      <div className={styles.detailRow}>
        <div className={styles.detailColumn}>
          <p className={styles.label}>Invoice Date</p>
          <p className={styles.value}>{invoiceDate}</p>
        </div>
        <div className={styles.detailColumn}>
          <p className={styles.label}>Payment Terms</p>
          <p className={styles.value}>{selectedTerm ? selectedTerm.label : ''}</p>
        </div>
      </div>
    </>
  );
};

export default InvoiceDetails;
