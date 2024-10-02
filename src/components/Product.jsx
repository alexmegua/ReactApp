import React from 'react';

const Product = ({ product }) => {
  return (
    <li>
      <h4>{product.name}</h4>
      <p>Price: {product.price} UAH</p>
      <p>{product.description}</p>
    </li>
  );
};

export default Product;
