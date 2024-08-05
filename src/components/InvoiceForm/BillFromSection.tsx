import React from 'react';
import {
  useDispatchState,
  useGlobalState,
} from '../../context/GlobalStateProvider';
import { countries } from '../../utils/countries';
import styles from './BillFromSection.module.css';

export const BillFromSection: React.FC = () => {
  const { billFrom, validation } = useGlobalState();
  const dispatch = useDispatchState();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_BILL_FROM', payload: { [name]: value } });
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Bill From</h2>
      <div className={styles.row}>
        <div style={{ flex: 1 }}>
          <label className={styles.label}>Company Name</label>
          <input
            type="text"
            className={`${styles.input} ${!validation.billFrom.companyName && styles.inputError}`}
            name="companyName"
            value={billFrom.companyName}
            onChange={handleChange}
          />
        </div>
        <div style={{ flex: 1 }}>
          <label className={styles.label}>Company Email</label>
          <input
            type="email"
            className={`${styles.input} ${!validation.billFrom.companyEmail && styles.inputError}`}
            name="companyEmail"
            value={billFrom.companyEmail}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={styles.row}>
        <div style={{ flex: 1 }}>
          <label className={styles.label}>Country</label>
          <select
            className={`${styles.select} ${!validation.billFrom.country && styles.inputError}`}
            name="country"
            value={billFrom.country}
            onChange={handleChange}
          >
            <option value="" disabled hidden>
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
          <input
            type="text"
            className={`${styles.input} ${!validation.billFrom.city && styles.inputError}`}
            name="city"
            value={billFrom.city}
            onChange={handleChange}
          />
        </div>
        <div style={{ flex: 1 }}>
          <label className={styles.label}>Postal Code</label>
          <input
            type="text"
            className={`${styles.input} ${!validation.billFrom.postalCode && styles.inputError}`}
            name="postalCode"
            value={billFrom.postalCode}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <label className={styles.label}>Street Address</label>
        <input
          type="text"
          className={`${styles.input} ${!validation.billFrom.streetAddress && styles.inputError}`}
          name="streetAddress"
          value={billFrom.streetAddress}
          onChange={handleChange}
        />
      </div>
    </section>
  );
};
