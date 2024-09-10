import React from 'react';
import ComponentHeader from './components/ComponentHeader';
import ComponentFooter from './components/ComponentFooter';
import ComponentInfo from './components/ComponentInfo';
import ComponentList from './components/ComponentList';
import ComponentButton from './components/ComponentButton';

function App() {
  const products = [
    { name: 'Laptop', price: 999 },
    { name: 'Phone', price: 499 },
    { name: 'Tablet', price: 299 },
    { name: 'PC', price: 499 },
    { name: 'Headphones', price: 29 },
    { name: 'Mouse', price: 39 },
    { name: 'Keyboard', price: 19 },
  ];

  return (
    <div className="App">
      <ComponentHeader />
      <ComponentInfo name="Website name" year={2024} idea="Sells products" />
      <ComponentButton/>
      <ComponentList products={products} />
      <ComponentFooter />
    </div>
  );
}

export default App;