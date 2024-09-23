import React from 'react';

const Menu = ({ isLoggedIn, handleLogin, handleLogout }) => {
  return (
    <nav style={{ marginBottom: '20px' }}>
      <button onClick={isLoggedIn ? handleLogout : handleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </nav>
  );
};

export default Menu;
