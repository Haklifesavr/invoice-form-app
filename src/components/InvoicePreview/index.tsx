import React from 'react';
import InvoiceDetails from './InvoiceDetails';
import BillingInfo from './BillingInfo';
import ProjectDescription from './ProjectDescription';
import ItemsTable from './ItemsTable';
import SummarySection from './SummarySection';
import styles from './index.module.css';

const InvoicePreview: React.FC = () => {
  return (
    <aside className={styles.aside}>
      <h2 className={styles.header}>Preview</h2>
      <div className={styles.innerWrapper}>
        <InvoiceDetails />
        <BillingInfo />
        <ProjectDescription />
        <ItemsTable />
        <SummarySection />
      </div>
    </aside>
  );
};

export default InvoicePreview;
