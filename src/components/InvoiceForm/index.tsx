import React from 'react';
import { BillFromSection } from './BillFromSection';
import { BillToSection } from './BillToSection';
import { ItemsListSection } from './ItemsListSection';
import styles from './index.module.css';

const InvoiceForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <BillFromSection />
      <BillToSection />
      <ItemsListSection />
    </form>
  );
};

export default InvoiceForm;
