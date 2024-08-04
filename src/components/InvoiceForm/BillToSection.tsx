import React from 'react';
import { countries } from '../../utils/countries';
import { paymentTerms } from '../../utils/paymentTerms';
import styles from './BillToSection.module.css';

export const BillToSection: React.FC = () => {
  const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Bill To</h2>
      <div className={styles.row}>
        <div style={{ flex: 1 }}>
          <label className={styles.label}>Client&apos;s Name</label>
          <input type="text" className={styles.input} />
        </div>
        <div style={{ flex: 1 }}>
          <label className={styles.label}>Client&apos;s Email</label>
          <input type="email" className={styles.input} />
        </div>
      </div>
      <div className={styles.row}>
        <div style={{ flex: 1 }}>
          <label className={styles.label}>Country</label>
          <select className={styles.select}>
            <option value="" disabled selected hidden>
              Select Country
            </option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <div style={{ flex: 1 }}>
          <label className={styles.label}>City</label>
          <input type="text" className={styles.input} />
        </div>
        <div style={{ flex: 1 }}>
          <label className={styles.label}>Postal Code</label>
          <input type="text" className={styles.input} />
        </div>
      </div>
      <div>
        <label className={styles.label}>Street Address</label>
        <input type="text" className={styles.input} />
      </div>
      <div>
        <label className={styles.label}>Project Description</label>
        <input type="text" className={styles.input} />
      </div>
      <div className={styles.row}>
        <div style={{ flex: 1 }}>
          <label className={styles.label}>Invoice Date</label>
          <input type="date" defaultValue={today} className={styles.input} />
        </div>
        <div style={{ flex: 1 }}>
          <label className={styles.label}>Payment Terms</label>
          <select className={styles.select}>
            <option value="" disabled selected hidden>
              Select Term
            </option>
            {paymentTerms.map((term, index) => (
              <option key={index} value={term.value}>
                {term.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
};
