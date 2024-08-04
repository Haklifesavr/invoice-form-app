import React from 'react';
import styles from './index.module.css';
import success from '../../assets/success.svg';
import error from '../../assets/error.svg';

interface ToastProps {
  message: string;
  subtext?: string;
  type: 'success' | 'error';
}

export const Toast: React.FC<ToastProps> = ({ message, subtext, type }) => {
  return (
    <div
      className={styles.toastContainer}
    >
      <div>
        <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
            <img className={styles.icon} src={type === 'success' ? success : error} alt="Success" />
          <div className={styles.toastMessage}>{message}</div>
        </div>
        {subtext && <div className={styles.toastSubtext}>{subtext}</div>}
      </div>
    </div>
  );
};
