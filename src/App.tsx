import React from 'react';
import Header from './components/Header';
import InvoiceForm from './components/InvoiceForm';
import InvoicePreview from './components/InvoicePreview';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { GlobalStateProvider } from './context/GlobalStateProvider';

function App() {
  return (
    <GlobalStateProvider>
      <Header />
      <div className="App-content">
        <InvoiceForm />
        <InvoicePreview />
      </div>
      <ToastContainer />
    </GlobalStateProvider>
  );
}

export default App;
