import React, { useState } from 'react';
import {
  useGlobalState,
  useDispatchState,
  initialState,
} from '../../context/GlobalStateProvider';
import { useMutation } from '@apollo/client';
import { CREATE_INVOICE } from '../../utils/mutation';
import { toast } from 'react-toastify';
import { Toast } from '../Toast';
import styles from './HeaderBottom.module.css';

// Loader component (CSS Spinner)
const Loader: React.FC = () => (
  <div className={styles.loader}></div>
);

const HeaderBottom: React.FC = () => {
  const { billFrom, billTo, items, validation } = useGlobalState();
  const dispatch = useDispatchState();
  const [createInvoice] = useMutation(CREATE_INVOICE);
  const [loading, setLoading] = useState(false);

  const validateForm = (): boolean => {
    let isFormValid = true;

    const updatedBillFromValidation = { ...validation.billFrom };
    const updatedBillToValidation = { ...validation.billTo };
    const updatedItemsValidation = validation.items.map((itemValidation) => ({
      ...itemValidation,
    }));

    // Validate billFrom fields
    for (const [key, value] of Object.entries(billFrom)) {
      const isValid = value.trim() !== '';
      updatedBillFromValidation[key as keyof typeof billFrom] = isValid;
      if (!isValid) isFormValid = false;
    }

    // Validate billTo fields
    for (const [key, value] of Object.entries(billTo)) {
      const isValid = value.trim() !== '';
      updatedBillToValidation[key as keyof typeof billTo] = isValid;
      if (!isValid) isFormValid = false;
    }

    // Validate items
    items.forEach((item, index) => {
      const isValidName = item.name.trim() !== '';
      const isValidQuantity = item.quantity > 0;
      const isValidPrice = item.price > 0;

      updatedItemsValidation[index] = {
        name: isValidName,
        quantity: isValidQuantity,
        price: isValidPrice,
        total: isValidQuantity && isValidPrice,
      };

      if (!isValidName || !isValidQuantity || !isValidPrice) {
        isFormValid = false;
      }
    });

    // Dispatch updated validation state
    dispatch({
      type: 'UPDATE_VALIDATION',
      payload: {
        billFrom: updatedBillFromValidation,
        billTo: updatedBillToValidation,
        items: updatedItemsValidation,
      },
    });

    return isFormValid;
  };

  const handleSave = async () => {
    if (!validateForm()) {
      toast(
        <Toast
          message="Form validation failed"
          subtext="Please fill all the required fields before saving."
          type="error"
        />,
        {
          closeButton: false,
        },
      );
      return;
    }

    setLoading(true);

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
          },
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
        },
      );
      console.error('Error creating invoice:', error);
    } finally {
      setLoading(false); // End loading
    }
  };

  const handleReset = () => {
    dispatch({ type: 'UPDATE_BILL_FROM', payload: initialState.billFrom });
    dispatch({ type: 'UPDATE_BILL_TO', payload: initialState.billTo });
    dispatch({ type: 'UPDATE_ITEMS', payload: initialState.items });
    dispatch({ type: 'UPDATE_VALIDATION', payload: initialState.validation });
  };

  return (
    <div className={styles.headerBottom}>
      <div>
        <h1 className={styles.title}>New Invoice</h1>
        <p className={styles.subtitle}>Create new invoice for your customers</p>
      </div>
      <div className={styles.buttons}>
        <button className={styles.resetButton} onClick={handleReset} disabled={loading}>
          Reset
        </button>
        <button className={styles.saveButton} onClick={handleSave} disabled={loading}>
          {loading ? <Loader /> : 'Save'}
        </button>
      </div>
    </div>
  );
};

export default HeaderBottom;
