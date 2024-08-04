import React from 'react';
import styles from './ItemsTable.module.css';

interface Item {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

interface ItemsTableProps {
  items: Item[];
}

const ItemsTable: React.FC<ItemsTableProps> = ({ items }) => {
  // Filter out rows where all fields are empty
  const filteredItems = items.filter(item => 
    item.name !== '' || item.quantity !== 0 || item.price !== 0 || item.total !== 0
  );

  return (
    <div className={styles.tableContainer}>
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
          {filteredItems.map((item, index) => (
            <tr key={index}>
              <td className={styles.td}>{item.name}</td>
              <td className={`${styles.td} ${styles.tdCenter}`}>{item.quantity}</td>
              <td className={`${styles.td} ${styles.tdRight}`}>$ {item.price}</td>
              <td className={`${styles.td} ${styles.tdRight}`}>$ {item.total.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemsTable;
