import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, onProductSelect }) => {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onProductSelect={onProductSelect}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
