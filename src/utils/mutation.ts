import { gql } from '@apollo/client';

// GraphQL mutation
export const CREATE_INVOICE = gql`
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