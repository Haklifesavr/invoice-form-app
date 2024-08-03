import React from 'react';

const InvoicePreview: React.FC = () => {
  return (
    <aside
      style={{
        padding: '24px',
        background: '#f7f7f7',
        borderRadius: '24px',
        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
      }}
    >
      <h2
        style={{
          marginBottom: '20px',
          fontWeight: '600',
          fontSize: '24px',
          color: '#101828',
        }}
      >
        Preview
      </h2>

      <div
        style={{
          borderRadius: '16px',
          padding: '30px 24px',
          marginBottom: '20px',
          background: '#FFFFFF',
          boxShadow:
            '0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)',
        }}
      >
        <p
          style={{
            fontWeight: '600',
            fontSize: '18px',
            borderBottom: '1px solid #EAECF0',
            paddingBottom: '16px',
          }}
        >
          New Invoice
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '24px',
          }}
        >
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <p
              style={{ color: '#76787D', fontSize: '16px', fontWeight: '400' }}
            >
              Invoice Date
            </p>
            <p
              style={{ color: '#101828', fontSize: '16px', fontWeight: '500' }}
            >
              12 Dec, 2024
            </p>
          </div>
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <p
              style={{ color: '#76787D', fontSize: '16px', fontWeight: '400' }}
            >
              Payment Terms
            </p>
            <p
              style={{ color: '#101828', fontSize: '16px', fontWeight: '500' }}
            >
              Net 30 Days
            </p>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '28px',
          }}
        >
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <p
              style={{ color: '#76787D', fontSize: '16px', fontWeight: '400' }}
            >
              Billed From
            </p>
            <p
              style={{ color: '#101828', fontSize: '16px', fontWeight: '500' }}
            >
              Weisnatt Design Agency
            </p>
            <p
              style={{ color: '#101828', fontSize: '16px', fontWeight: '500' }}
            >
              support@weisnattdesign.co
            </p>
            <p
              style={{ color: '#101828', fontSize: '16px', fontWeight: '500' }}
            >
              1234 Elm Street
            </p>
            <p
              style={{ color: '#101828', fontSize: '16px', fontWeight: '500' }}
            >
              New York, 10001
            </p>
            <p
              style={{ color: '#101828', fontSize: '16px', fontWeight: '500' }}
            >
              United States
            </p>
          </div>
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <p
              style={{ color: '#76787D', fontSize: '16px', fontWeight: '400' }}
            >
              Billed To
            </p>
            <p
              style={{ color: '#101828', fontSize: '16px', fontWeight: '500' }}
            >
              John Glover
            </p>
            <p
              style={{ color: '#101828', fontSize: '16px', fontWeight: '500' }}
            >
              john.glover@gmail.com
            </p>
            <p
              style={{ color: '#101828', fontSize: '16px', fontWeight: '500' }}
            >
              699 Hoppe Throughway
            </p>
            <p
              style={{ color: '#101828', fontSize: '16px', fontWeight: '500' }}
            >
              New York, 10001
            </p>
            <p
              style={{ color: '#101828', fontSize: '16px', fontWeight: '500' }}
            >
              United States
            </p>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            marginTop: '28px',
          }}
        >
          <p style={{ color: '#76787D', fontSize: '16px', fontWeight: '400' }}>
            Project Description
          </p>
          <p style={{ color: '#101828', fontSize: '16px', fontWeight: '500' }}>
            Graphic Design Project
          </p>
        </div>

        <table
          style={{
            width: '100%',
            marginTop: '20px',
            borderCollapse: 'collapse',
            tableLayout: 'fixed',
          }}
        >
          <thead>
            <tr
              style={{
                fontWeight: '500',
                textAlign: 'left',
                padding: '10px',
                backgroundColor: '#F5F5F5',
                borderRadius: '4px',
                color: '#76787D',
              }}
            >
              <th
                style={{
                  padding: '10px 7px',
                  borderTopLeftRadius: '4px',
                  borderBottomLeftRadius: '4px',
                  fontSize: '16px',
                  fontWeight: '400',
                  color: '#76787D',
                }}
              >
                Item
              </th>
              <th
                style={{
                  textAlign: 'center',
                  padding: '10px 0',
                  fontSize: '16px',
                  fontWeight: '400',
                }}
              >
                Qty.
              </th>
              <th
                style={{
                  textAlign: 'right',
                  padding: '10px 0',
                  fontSize: '16px',
                  fontWeight: '400',
                  color: '#76787D',
                }}
              >
                Price
              </th>
              <th
                style={{
                  textAlign: 'right',
                  padding: '10px 7px',
                  borderTopRightRadius: '4px',
                  borderBottomRightRadius: '4px',
                  fontSize: '16px',
                  fontWeight: '400',
                  color: '#76787D',
                }}
              >
                Total Amount
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                style={{
                  padding: '10px 7px',
                  fontSize: '16px',
                  fontWeight: '500',
                  color: '#101828',
                }}
              >
                Banner Design
              </td>
              <td
                style={{
                  padding: '10px 0',
                  textAlign: 'center',
                  fontSize: '16px',
                  fontWeight: '500',
                  color: '#101828',
                }}
              >
                1
              </td>
              <td
                style={{
                  padding: '10px 0',
                  textAlign: 'right',
                  fontSize: '16px',
                  fontWeight: '500',
                  color: '#101828',
                }}
              >
                $ 120
              </td>
              <td
                style={{
                  padding: '10px 7px',
                  textAlign: 'right',
                  fontSize: '16px',
                  fontWeight: '500',
                  color: '#101828',
                }}
              >
                $ 120.00
              </td>
            </tr>
          </tbody>
        </table>

        <div
          style={{
            display: 'flex',
            marginTop: '12px',
            borderTop: '1px solid #EAECF0',
            paddingTop: '24px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              flex: 2,
            }}
          >
            <p
              style={{ color: '#101828', fontSize: '16px', fontWeight: '600' }}
            >
              Subtotal
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              flex: 1,
            }}
          >
            <p
              style={{ color: '#101828', fontSize: '16px', fontWeight: '600' }}
            >
              $ 320.00
            </p>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: '20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              flex: 2,
              marginLeft: '-110px',
            }}
          >
            <p
              style={{ color: '#101828', fontSize: '16px', fontWeight: '600' }}
            >
              Tax
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              flex: 1,
            }}
          >
            <p
              style={{ color: '#101828', fontSize: '16px', fontWeight: '600' }}
            >
              10%
            </p>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: '20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              flex: 2,
              marginLeft: '-50px',
            }}
          >
            <p
              style={{ color: '#101828', fontSize: '20px', fontWeight: '700' }}
            >
              Total
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              flex: 1,
            }}
          >
            <p
              style={{ color: '#101828', fontSize: '20px', fontWeight: '700' }}
            >
              $ 352.00
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default InvoicePreview;
