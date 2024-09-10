import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';

function App() {
  const [products] = useState([
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Phone', price: 499 },
    { id: 3, name: 'Tablet', price: 299 },
    { id: 4, name: 'PC', price: 499 },
    { id: 5, name: 'Headphones', price: 49 },
    { id: 6, name: 'Microphone', price: 49 },
  ]);

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Callback (для вибору товарів)
  const handleProductSelect = (productId, isSelected) => {
    if (isSelected) {
      setSelectedProducts([...selectedProducts, productId]);
    } else {
      setSelectedProducts(selectedProducts.filter(id => id !== productId));
    }
  };

  // Callback (Вхід)
  const handleLogin = () => setIsLoggedIn(true);

  // Callback (Вихід)
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header
        selectedCount={selectedProducts.length}
        isLoggedIn={isLoggedIn}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
      <div style={{ flex: '1' }}>
        <ProductList products={products} onProductSelect={handleProductSelect} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
