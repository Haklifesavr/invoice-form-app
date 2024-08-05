import React, { useEffect } from 'react';
import { useDispatchState, useGlobalState } from '../../context/GlobalStateProvider';
import trash from '../../assets/trash.svg';
import plus from '../../assets/plus.svg';
import styles from './ItemsListSection.module.css';

interface Item {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export const ItemsListSection: React.FC = () => {
  const { items, validation } = useGlobalState();
  const dispatch = useDispatchState();

  useEffect(() => {
    if (items.length === 0) {
      addItem();
    }
  }, [items]);

  const handleItemChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedItems = items.map((item: Item, i: number) => {
      if (i === index) {
        const updatedItem = {
          ...item,
          [name]: name === 'quantity' || name === 'price' ? parseFloat(value) : value,
        };
        updatedItem.total = updatedItem.quantity * updatedItem.price;
        return updatedItem;
      }
      return item;
    });
    dispatch({ type: 'UPDATE_ITEMS', payload: updatedItems });
  };

  const addItem = () => {
    const newItem: Item = { name: '', quantity: 0, price: 0, total: 0 };
    dispatch({ type: 'UPDATE_ITEMS', payload: [...items, newItem] });

    // Initialize validation state for the new item
    const newValidation = { name: true, quantity: true, price: true, total: true };
    dispatch({
      type: 'UPDATE_VALIDATION',
      payload: {
        items: [...validation.items, newValidation],
      },
    });
  };

  const removeItem = (index: number) => {
    const updatedItems = items.filter((_, i) => i !== index);
    const updatedValidationItems = validation.items.filter((_, i) => i !== index);
    dispatch({ type: 'UPDATE_ITEMS', payload: updatedItems });
    dispatch({ type: 'UPDATE_VALIDATION', payload: { items: updatedValidationItems } });
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Items List</h2>
      {items.map((item: Item, index: number) => (
        <div key={index} className={styles.itemRow}>
          <div style={{ flex: 2 }}>
            <label className={styles.label}>Item Name</label>
            <input
              type="text"
              className={`${styles.input} ${!validation.items[index]?.name && styles.inputError}`}
              name="name"
              value={item.name}
              onChange={(e) => handleItemChange(index, e)}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label className={styles.label}>Qty.</label>
            <input
              type="number"
              className={`${styles.input} ${!validation.items[index]?.quantity && styles.inputError}`}
              name="quantity"
              value={item.quantity}
              onChange={(e) => handleItemChange(index, e)}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label className={styles.label}>Price</label>
            <input
              type="number"
              className={`${styles.input} ${!validation.items[index]?.price && styles.inputError}`}
              name="price"
              value={item.price}
              onChange={(e) => handleItemChange(index, e)}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label className={styles.label}>Total</label>
            <input
              type="number"
              className={`${styles.input} ${!validation.items[index]?.total && styles.inputError}`}
              name="total"
              value={item.total}
              readOnly
            />
          </div>
          <div className={styles.trashIconContainer} onClick={() => removeItem(index)}>
            <img className={styles.trashIcon} src={trash} alt="Trash" />
          </div>
        </div>
      ))}
      <button type="button" className={styles.button} onClick={addItem}>
        <div className={styles.buttonText}>
          <img src={plus} alt="Plus" width={12} height={12} />
          <>Add New Item</>
        </div>
      </button>
    </section>
  );
};
