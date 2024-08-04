import React from 'react';
import styles from './HeaderTop.module.css';
import logo from '../../assets/logo.jpg';

const HeaderTop: React.FC = () => {
  return (
    <div className={styles.headerTop}>
      <img src={logo} alt="Logo" className={styles.logo} />
    </div>
  );
};

export default HeaderTop;
