import React from 'react';
import Header from './Header';
import InvoiceForm from './components/InvoiceForm';
import InvoicePreview from './components/InvoicePreview';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="App-content">
        <InvoiceForm />
        <InvoicePreview />
      </div>
    </div>
  );
}

export default App;
