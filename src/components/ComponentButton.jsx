
import React, { useState } from 'react';

const ComponentButton = () => {
  const [color, setColor] = useState('blue');

  const handleClick = () => {
    setColor(color === 'blue' ? 'green' : 'blue');
  };

  return (
    <button
      onClick={handleClick}
      style={{ padding: '10px 20px', backgroundColor: color, color: 'white', border: 'none', borderRadius: '5px' }}>
      This is a button
    </button>
  );
};

export default ComponentButton;
