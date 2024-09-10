
import React from 'react';

const ComponentList = ({ products }) => {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name} - ${product.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default ComponentList;
