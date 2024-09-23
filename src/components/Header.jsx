import React from 'react';
import Menu from './Menu';

const Header = ({ selectedCount, isLoggedIn, handleLogin, handleLogout }) => {
  return (
    <header style={{ backgroundColor: '#282c34', padding: '10px', color: 'white', textAlign: 'center' }}>
      <h1>My Shop</h1>
      <Menu
        isLoggedIn={isLoggedIn}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
      />
      <p>Selected items: {selectedCount}</p>
    </header>
  );
};

export default Header;
