import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import CurrencyConverter from './components/CurrencyConverter';
import useStatus from './hooks/useStatus';
import useLogState from './hooks/useLogState';

const App = () => {
  const exchangeRate = 41.6; // Курс гривні до долара

  const [comments, setComments] = useState([]);
  const [uah, setUah] = useState('');
  const [usd, setUsd] = useState('');
  const [status, toggleStatus] = useStatus('Offline');

  useLogState('UAH', uah);

  const products = [
    { id: 1, name: 'Laptop', price: 15000, description: 'High performance laptop' },
    { id: 2, name: 'Phone', price: 5000, description: 'Smartphone with great features' },
  ];

  useEffect(() => {
    console.log('App component has been mounted');
  }, []);

  useEffect(() => {
    console.log('Currency values have been updated');
  }, [uah, usd]);

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  const handleUahChange = (value) => {
    setUah(value);
    if (value === '') {
      setUsd('');
    } else {
      setUsd((value / exchangeRate).toFixed(2));
    }
  };

  const handleUsdChange = (value) => {
    setUsd(value);
    if (value === '') {
      setUah('');
    } else {
      setUah((value * exchangeRate).toFixed(2));
    }
  };

  return (
    <div>
      <h1>Product Store</h1>
      <button onClick={toggleStatus}>
        {status === 'Offline' ? 'Go Online' : 'Go Offline'}
      </button>
      <p>Status: {status}</p>

      <ProductList products={products} />
      <h2>Product Details</h2>
      <ProductDetail product={products[0]} addComment={addComment} />

      <h3>Конвертер валют:</h3>
      <CurrencyConverter
        uah={uah}
        usd={usd}
        onUahChange={handleUahChange}
        onUsdChange={handleUsdChange}
      />

      <h3>Коментарі:</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
