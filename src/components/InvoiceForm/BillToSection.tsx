import React, { useEffect } from 'react';
import {
  useDispatchState,
  useGlobalState,
} from '../../context/GlobalStateProvider';
import { countries } from '../../utils/countries';
import { paymentTerms } from '../../utils/paymentTerms';
import styles from './BillToSection.module.css';

export const BillToSection: React.FC = () => {
  const { billTo, validation } = useGlobalState();
  const dispatch = useDispatchState();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    dispatch({ type: 'UPDATE_BILL_TO', payload: { [name]: value } });
  };

  useEffect(() => {
    if (!billTo.invoiceDate) {
      const today = new Date().toISOString().split('T')[0];
      dispatch({ type: 'UPDATE_BILL_TO', payload: { invoiceDate: today } });
    }
  }, [billTo.invoiceDate, dispatch]);

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Bill To</h2>
      <div className={styles.row}>
        <div style={{ flex: 1 }}>
          <label className={styles.label}>Client&apos;s Name</label>
          <input
            type="text"
            className={`${styles.input} ${!validation.billTo.clientName && styles.inputError}`}
            name="clientName"
            value={billTo.clientName}
            onChange={handleChange}
          />
        </div>
        <div style={{ flex: 1 }}>
          <label className={styles.label}>Client&apos;s Email</label>
          <input
            type="email"
            className={`${styles.input} ${!validation.billTo.clientEmail && styles.inputError}`}
            name="clientEmail"
            value={billTo.clientEmail}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={styles.row}>
        <div style={{ flex: 1 }}>
          <label className={styles.label}>Country</label>
          <select
            className={`${styles.select} ${!validation.billTo.country && styles.inputError}`}
            name="country"
            value={billTo.country}
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
            className={`${styles.input} ${!validation.billTo.city && styles.inputError}`}
            name="city"
            value={billTo.city}
            onChange={handleChange}
          />
        </div>
        <div style={{ flex: 1 }}>
          <label className={styles.label}>Postal Code</label>
          <input
            type="text"
            className={`${styles.input} ${!validation.billTo.postalCode && styles.inputError}`}
            name="postalCode"
            value={billTo.postalCode}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <label className={styles.label}>Street Address</label>
        <input
          type="text"
          className={`${styles.input} ${!validation.billTo.streetAddress && styles.inputError}`}
          name="streetAddress"
          value={billTo.streetAddress}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className={styles.label}>Project Description</label>
        <input
          type="text"
          className={`${styles.input} ${!validation.billTo.projectDescription && styles.inputError}`}
          name="projectDescription"
          value={billTo.projectDescription}
          onChange={handleChange}
        />
      </div>
      <div className={styles.row}>
        <div style={{ flex: 1 }}>
          <label className={styles.label}>Invoice Date</label>
          <input
            type="date"
            className={`${styles.input} ${!validation.billTo.invoiceDate && styles.inputError}`}
            name="invoiceDate"
            value={billTo.invoiceDate}
            onChange={handleChange}
          />
        </div>
        <div style={{ flex: 1 }}>
          <label className={styles.label}>Payment Terms</label>
          <select
            className={`${styles.select} ${!validation.billTo.paymentTerms && styles.inputError}`}
            name="paymentTerms"
            value={billTo.paymentTerms}
            onChange={handleChange}
          >
            <option value="" disabled hidden>
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
