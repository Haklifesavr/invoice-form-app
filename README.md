# Invoice Form Application

## Overview

This project is an Invoice Form application built using React.js with TypeScript. The application allows users to create invoices with real-time data updates, reset the form, save the data to a GraphQL API, and receive feedback via toast messages upon successful creation of an invoice. The application is designed to be responsive and pixel-perfect according to the provided Figma design.

## Features

### Invoice Form
- **Bill From, Bill To, Invoice Details, and Items List:** Sections included as per the Figma design.
- **Form Validation:** All fields are required. Validations are implemented to ensure no field is left empty before submission.
- **Invoice Date:** Set to the current date by default.
- **Price Calculation:** Calculates the price of a single item based on Quantity and Price inputs.
- **Total Price Calculation:** Calculates the total price of all items after applying a 10% tax.

### Real-Time Data Display
- **Real-Time Updates:** The right-hand side of the page displays the real-time invoice data as the user fills in the form.

### Reset Functionality
- **Form Reset:** A Reset button is provided to clear the form fields and the real-time data display.

### Save Functionality
- **GraphQL Integration:** Upon saving, a mutation is sent to the GraphQL API to save the invoice data.
- **Toast Notification:** A toast message saying "Invoice created successfully!" is displayed upon successful data submission.
- **Form Reset After Save:** The form resets to its empty state after saving.

### Design & Responsiveness
- **Pixel-Perfect Design:** The design is ensured to be pixel-perfect as per the Figma design provided.
- **Responsive Layout:** The form and preview panel layout are responsive and work across different screen sizes.

## Technology Stack
- **React.js** with **TypeScript**: For building the UI components.
- **useReducer** and **useContext**: For global state management and custom form validation.
- **Apollo Client**: For managing GraphQL API interactions.
- **CSS/Styled-Components**: For styling and ensuring the design matches the provided Figma prototype.
- **React-Toastify**: For displaying toast messages.

## Deployment

The application is deployed and can be accessed via the following link:
[Invoice Form Application Deployment](https://invoice-form-app.vercel.app/)

## Pull Requests

You can review the detailed pull requests for each step of the development process via the following link:
[Invoice Form Application Pull Requests](https://github.com/Haklifesavr/invoice-form-app/pulls?q=is%3Apr+is%3Aclosed)

## Project Setup and Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Haklifesavr/invoice-form-app.git
    cd invoice-form-app
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the development server:

    ```bash
    npm start
    ```

4. Open the application in your browser at `http://localhost:3000`.

## Project Implementation Steps

### 1. **Project Setup and Initial Configuration**
   - **Title:** Project Setup and Initial Configuration
   - **Description:** 
     - Set up the React.js project with TypeScript.
     - Install necessary dependencies such as `react-toastify`, `@apollo/client` and `graphql`.
     - Configure ESLint and Prettier for code quality and formatting.
     - Initialize Git repository with `.gitignore` file and create an initial commit.

### 2. **Create Basic Layout Components**
   - **Title:** Create Basic Layout Components
   - **Description:** 
     - Develop the overall layout structure including the `Header`, `InvoiceForm`, and `InvoicePreview` components.
     - Implement a responsive layout with CSS or styled-components.
     - Ensure the design is pixel-perfect according to the Figma design.

### 3. **Implement Form Validation and State Management**
   - **Title:** Implement Form Validation and State Management
   - **Description:** 
     - Implement validation for all required fields, ensuring proper user feedback on errors.
     - Integrate the form with React state management for real-time data display in the preview.

### 4. **Add Invoice Item List Functionality**
   - **Title:** Add Invoice Item List Functionality
   - **Description:** 
     - Create a dynamic `ItemsList` component to handle the addition and removal of invoice items.
     - Calculate item totals based on quantity and price.
     - Display the real-time item total in the InvoicePreview panel.

### 5. **Implement Invoice Total Calculation**
   - **Title:** Implement Invoice Total Calculation
   - **Description:** 
     - Calculate the subtotal of all items and apply a 10% tax deduction.
     - Display the calculated totals in real-time within the `InvoicePreview` component.

### 6. **Add Invoice Terms and Date Functionality**
   - **Title:** Add Invoice Terms and Date Functionality
   - **Description:** 
     - Implement a dropdown for selecting `InvoiceTermsEnum` values.
     - Set the `Invoice Date` to the current date by default.
     - Ensure that the selected terms and date are displayed in real-time on the preview panel.

### 7. **Implement Form Reset Functionality**
   - **Title:** Implement Form Reset Functionality
   - **Description:** 
     - Add a Reset button that clears all form fields and resets the InvoicePreview panel to its initial state.
     - Ensure the form is reset to its default values without any residual data.

### 8. **Implement Save Functionality and GraphQL Integration**
   - **Title:** Implement Save Functionality and GraphQL Integration
   - **Description:** 
     - Set up Apollo Client and create a GraphQL mutation to save the invoice data.
     - Connect the form submission with the GraphQL mutation.
     - Display a toast message "Invoice created successfully!" upon successful data submission.
     - Reset the form and preview panel after the data is successfully saved.

### 9. **Responsive Design and Final Styling**
   - **Title:** Responsive Design and Final Styling
   - **Description:** 
     - Ensure the entire application is responsive and works seamlessly across different screen sizes.
     - Fine-tune the CSS to ensure a pixel-perfect design that matches the Figma prototype.
     - Test the application for different device widths and make necessary adjustments.

## Conclusion

This project showcases the development of a responsive and interactive Invoice Form application with real-time data updates, form validation, and integration with a GraphQL API. The implementation adheres to the provided Figma design, ensuring a pixel-perfect and user-friendly interface.
