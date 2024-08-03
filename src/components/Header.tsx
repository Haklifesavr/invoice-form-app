import React from 'react';
import logo from '../assets/logo.jpg';

const Header: React.FC = () => {
  return (
    <header>
      {/* Top Section: Logo */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '10px',
          padding: '10px 0',
          borderBottom: '1px solid #EAECF0',
        }}
      >
        <img src={logo} alt="Logo" style={{ height: '32px', width: '32px' }} />
      </div>

      {/* Bottom Section: Title and Buttons */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        <div>
          <h1 style={{color: '#101828'}}>New Invoice</h1>
          <p style={{ color: '#667085', marginTop: '5px' }}>
            Create new invoice for your customers
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '10px',
          }}
        >
          <button
            style={{
              border: '1px solid #D0D5DD',
              backgroundColor: '#FFFFFF',
              color: '#344054',
              width: '68px',
            }}
          >
            Reset
          </button>
          <button style={{ width: '68px' }}>Save</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
