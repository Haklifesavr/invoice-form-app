import React from 'react';
import { useGlobalState } from '../../context/GlobalStateProvider';
import InvoiceDetails from './InvoiceDetails';
import BillingInfo from './BillingInfo';
import ProjectDescription from './ProjectDescription';
import ItemsTable from './ItemsTable';
import SummarySection from './SummarySection';
import styles from './index.module.css';

const InvoicePreview: React.FC = () => {
  const { billFrom, billTo, items } = useGlobalState();

  return (
    <aside className={styles.aside}>
      <h2 className={styles.header}>Preview</h2>
      <div className={styles.innerWrapper}>
        <InvoiceDetails
          invoiceDate={billTo.invoiceDate || new Date().toISOString().split('T')[0]}
          paymentTerms={billTo.paymentTerms || ''}
        />
        <BillingInfo
          billedFrom={billFrom}
          billedTo={billTo}
        />
        <ProjectDescription description={billTo.projectDescription || ''} />
        <ItemsTable items={items} />
        <SummarySection items={items} />
      </div>
    </aside>
  );
};

export default InvoicePreview;
