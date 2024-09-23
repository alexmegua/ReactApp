import React, { useState } from 'react';

const ProductItem = ({ product, onProductSelect }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCheckboxChange = () => {
    setIsSelected(!isSelected);
    onProductSelect(product.id, !isSelected);
  };

  return (
    <li>
      <input type="checkbox" checked={isSelected} onChange={handleCheckboxChange} />
      {product.name} - ${product.price}
    </li>
  );
};

export default ProductItem;
