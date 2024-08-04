import React from 'react';
import Header from './Header';
import InvoiceForm from './components/InvoiceForm';
import InvoicePreview from './components/InvoicePreview';
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
    </GlobalStateProvider>
  );
}

export default App;
