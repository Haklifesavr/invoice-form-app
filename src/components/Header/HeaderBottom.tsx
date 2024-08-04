import React from 'react';
import {
  useGlobalState,
  useDispatchState,
  initialState,
} from '../../context/GlobalStateProvider';
import { useMutation, gql } from '@apollo/client';
import { toast } from 'react-toastify';
import { Toast } from '../Toast';
import styles from './HeaderBottom.module.css';

// GraphQL mutation
const CREATE_INVOICE = gql`
  mutation CreateInvoice($input: CreateInvoiceInput!) {
    createInvoice(input: $input) {
      id
      billingFrom {
        companyName
        companyEmail
        billingFromAddress {
          streetAddress
          city
          postalCode
          country
        }
      }
      billingTo {
        clientName
        clientEmail
        billingToAddress {
          streetAddress
          city
          postalCode
          country
        }
      }
      invoiceDate
      items {
        name
        quantity
        price
        totalPrice
      }
      paymentTerms
      projectDescription
      subTotal
      tax
      totalAmount
    }
  }
`;

const HeaderBottom: React.FC = () => {
  const { billFrom, billTo, items } = useGlobalState();
  const dispatch = useDispatchState();
  const [createInvoice] = useMutation(CREATE_INVOICE);

  const handleSave = async () => {
    const formData = {
      createInvoiceAttributes: {
        billingFromAttributes: {
          companyName: billFrom.companyName,
          companyEmail: billFrom.companyEmail,
          billingFromAddressAttributes: {
            streetAddress: billFrom.streetAddress,
            city: billFrom.city,
            postalCode: billFrom.postalCode,
            country: billFrom.country,
          },
        },
        billingToAttributes: {
          clientName: billTo.clientName,
          clientEmail: billTo.clientEmail,
          billingToAddressAttributes: {
            streetAddress: billTo.streetAddress,
            city: billTo.city,
            postalCode: billTo.postalCode,
            country: billTo.country,
          },
        },
        invoiceDate: billTo.invoiceDate,
        paymentTerms: billTo.paymentTerms,
        projectDescription: billTo.projectDescription,
        itemAttributes: items.map((item) => ({
          name: item.name,
          quantity: item.quantity,
          price: item.price,
        })),
      },
    };

    try {
      const response = await createInvoice({ variables: { input: formData } });
      if (response.data.createInvoice) {
        toast(
          <Toast
            message="Invoice created successfully!"
            subtext="Your invoice has been created."
            type="success"
          />,
          {
            closeButton: false,
          }
        );
        handleReset();
      }
    } catch (error) {
      toast(
        <Toast
          message="Error creating invoice"
          subtext="Please try again later."
          type="error"
        />,
        {
          closeButton: false,
        }
      );
      console.error('Error creating invoice:', error);
    }
  };

  const handleReset = () => {
    dispatch({ type: 'UPDATE_BILL_FROM', payload: initialState.billFrom });
    dispatch({ type: 'UPDATE_BILL_TO', payload: initialState.billTo });
    dispatch({ type: 'UPDATE_ITEMS', payload: initialState.items });
  };

  return (
    <div className={styles.headerBottom}>
      <div>
        <h1 className={styles.title}>New Invoice</h1>
        <p className={styles.subtitle}>Create new invoice for your customers</p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.resetButton} onClick={handleReset}>
          Reset
        </button>
        <button className={styles.saveButton} onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default HeaderBottom;
