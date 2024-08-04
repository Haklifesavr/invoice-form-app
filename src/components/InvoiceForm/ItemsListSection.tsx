import React from 'react';
import trash from '../../assets/trash.svg';
import plus from '../../assets/plus.svg';
import styles from './ItemsListSection.module.css';

export const ItemsListSection: React.FC = () => (
  <section className={styles.section}>
    <h2 className={styles.heading}>Items List</h2>
    <div className={styles.itemRow}>
      <div style={{ flex: 2 }}>
        <label className={styles.label}>Item Name</label>
        <input type="text" className={styles.input} />
      </div>
      <div style={{ flex: 1 }}>
        <label className={styles.label}>Qty.</label>
        <input type="number" className={styles.input} />
      </div>
      <div style={{ flex: 1 }}>
        <label className={styles.label}>Price</label>
        <input type="number" className={styles.input} />
      </div>
      <div style={{ flex: 1 }}>
        <label className={styles.label}>Total</label>
        <input type="number" className={styles.input} readOnly />
      </div>
      <div className={styles.trashIconContainer}>
        <img className={styles.trashIcon} src={trash} alt="Trash" />
      </div>
    </div>
    <button type="button" className={styles.button}>
      <div className={styles.buttonText}>
        <img src={plus} alt="Plus" width={12} height={12} />
        <>Add New Item</>
      </div>
    </button>
  </section>
);
