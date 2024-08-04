import React from 'react';
import { countries } from '../../utils/countries';
import styles from './BillFromSection.module.css';

export const BillFromSection: React.FC = () => (
  <section className={styles.section}>
    <h2 className={styles.heading}>Bill From</h2>
    <div className={styles.row}>
      <div style={{ flex: 1 }}>
        <label className={styles.label}>Company Name</label>
        <input type="text" className={styles.input} />
      </div>
      <div style={{ flex: 1 }}>
        <label className={styles.label}>Company Email</label>
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
  </section>
);
