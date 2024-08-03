import React from 'react';
import trash from '../assets/trash.svg';
import plus from '../assets/plus.svg';
import { countries } from '../utils/countries';

// Payment terms options
const paymentTerms = [
  { value: 'NET_10_DAYS', label: 'Net 10 Days' },
  { value: 'NET_20_DAYS', label: 'Net 20 Days' },
  { value: 'NET_30_DAYS', label: 'Net 30 Days' },
];

const InvoiceForm: React.FC = () => {
  const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

  return (
    <form
      style={{
        border: '1px solid #D0D5DD',
        borderRadius: '24px',
        padding: '24px',
      }}
    >
      {/* Bill From Section */}
      <section style={{ marginBottom: '20px' }}>
        <h2
          style={{
            marginBottom: '20px',
            fontWeight: '600',
            fontSize: '24px',
            color: '#101828',
          }}
        >
          Bill From
        </h2>
        <div
          style={{
            marginBottom: '6px',
            display: 'flex',
            gap: '10px',
          }}
        >
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: '500', fontSize: '14px' }}>
              Company Name
            </label>
            <input
              type="text"
              style={{ padding: '8px', marginTop: '8px', width: '100%' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: '500', fontSize: '14px' }}>
              Company Email
            </label>
            <input
              type="email"
              style={{ padding: '8px', marginTop: '8px', width: '100%' }}
            />
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '6px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: '500', fontSize: '14px' }}>
              Country
            </label>
            <select style={{ padding: '8px', marginTop: '8px', width: '100%' }}>
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
            <label style={{ fontWeight: '500', fontSize: '14px' }}>City</label>
            <input
              type="text"
              style={{ padding: '8px', marginTop: '8px', width: '100%' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: '500', fontSize: '14px' }}>
              Postal Code
            </label>
            <input
              type="text"
              style={{ padding: '8px', marginTop: '8px', width: '100%' }}
            />
          </div>
        </div>
        <div>
          <label style={{ fontWeight: '500', fontSize: '14px' }}>
            Street Address
          </label>
          <input
            type="text"
            style={{ padding: '8px', marginTop: '8px', width: '100%' }}
          />
        </div>
      </section>

      {/* Bill To Section */}
      <section style={{ marginBottom: '20px' }}>
        <h2
          style={{
            marginBottom: '20px',
            fontWeight: '600',
            fontSize: '24px',
            color: '#101828',
          }}
        >
          Bill To
        </h2>
        <div
          style={{
            marginBottom: '6px',
            display: 'flex',
            gap: '10px',
          }}
        >
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: '500', fontSize: '14px' }}>
              Client's Name
            </label>
            <input
              type="text"
              style={{ padding: '8px', marginTop: '8px', width: '100%' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: '500', fontSize: '14px' }}>
              Client's Email
            </label>
            <input
              type="email"
              style={{ padding: '8px', marginTop: '8px', width: '100%' }}
            />
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '6px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: '500', fontSize: '14px' }}>
              Country
            </label>
            <select style={{ padding: '8px', marginTop: '8px', width: '100%' }}>
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
            <label style={{ fontWeight: '500', fontSize: '14px' }}>City</label>
            <input
              type="text"
              style={{ padding: '8px', marginTop: '8px', width: '100%' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: '500', fontSize: '14px' }}>
              Postal Code
            </label>
            <input
              type="text"
              style={{ padding: '8px', marginTop: '8px', width: '100%' }}
            />
          </div>
        </div>
        <div>
          <label style={{ fontWeight: '500', fontSize: '14px' }}>
            Street Address
          </label>
          <input
            type="text"
            style={{ padding: '8px', marginTop: '8px', width: '100%' }}
          />
        </div>
        <div>
          <label style={{ fontWeight: '500', fontSize: '14px' }}>
            Project Description
          </label>
          <input
            type="text"
            style={{ padding: '8px', marginTop: '8px', width: '100%' }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            gap: '10px',
          }}
        >
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: '500', fontSize: '14px' }}>
              Invoice Date
            </label>
            <input
              type="date"
              defaultValue={today}
              style={{ padding: '8px', marginTop: '8px', width: '100%' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: '500', fontSize: '14px' }}>
              Payment Terms
            </label>
            <select style={{ padding: '8px', marginTop: '8px', width: '100%' }}>
              <option value="" disabled selected hidden>
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

      {/* Items List Section */}
      <section>
        <h2
          style={{
            marginBottom: '20px',
            fontWeight: '600',
            fontSize: '24px',
            color: '#101828',
          }}
        >
          Items List
        </h2>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <div style={{ flex: 2 }}>
            <label style={{ fontWeight: '500', fontSize: '14px' }}>
              Item Name
            </label>
            <input
              type="text"
              style={{ padding: '8px', marginTop: '8px', width: '100%' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: '500', fontSize: '14px' }}>Qty.</label>
            <input
              type="number"
              style={{ padding: '8px', marginTop: '8px', width: '100%' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: '500', fontSize: '14px' }}>Price</label>
            <input
              type="number"
              style={{ padding: '8px', marginTop: '8px', width: '100%' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontWeight: '500', fontSize: '14px' }}>Total</label>
            <input
              type="number"
              style={{ padding: '8px', marginTop: '8px', width: '100%' }}
              readOnly
            />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              paddingBottom: '18px',
              cursor: 'pointer',
            }}
          >
            <img className="trash-icon" src={trash} alt="Trash" />
          </div>
        </div>
        <button type="button">
          <div
            style={{
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src={plus} alt="Plus" width={12} height={12} />
            <>Add New Item</>
          </div>
        </button>
      </section>
    </form>
  );
};

export default InvoiceForm;
