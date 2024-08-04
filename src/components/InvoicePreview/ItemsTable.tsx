import React from 'react';
import styles from './ItemsTable.module.css';

const ItemsTable: React.FC = () => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.theadRow}>
          <th className={`${styles.th} ${styles.thLeft}`}>Item</th>
          <th className={styles.th} style={{ textAlign: 'center' }}>Qty.</th>
          <th className={`${styles.th} ${styles.tdRight}`}>Price</th>
          <th className={`${styles.th} ${styles.thRight}`}>Total Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={styles.td}>Banner Design</td>
          <td className={`${styles.td} ${styles.tdCenter}`}>1</td>
          <td className={`${styles.td} ${styles.tdRight}`}>$ 120</td>
          <td className={`${styles.td} ${styles.tdRight}`}>$ 120.00</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ItemsTable;
