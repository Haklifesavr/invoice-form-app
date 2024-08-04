import React from 'react';
import { BillFromSection } from './BillFromSection';
import { BillToSection } from './BillToSection';
import { ItemsListSection } from './ItemsListSection';
import styles from './index.module.css';

const InvoiceForm: React.FC = () => {
  return (
    <form className={styles.form}>
      <BillFromSection />
      <BillToSection />
      <ItemsListSection />
    </form>
  );
};

export default InvoiceForm;
