import React, { useState } from 'react';

const ProductDetail = ({ product, addComment }) => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Comment text:", comment);
    alert(`Ваш відгук: «${comment}» додано успішно!`);
    addComment(comment);
    setComment("");
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: {product.price} UAH</p>
      <p>{product.description}</p>

      <form onSubmit={handleSubmit}>
        <label>
          Додати коментар:
          <textarea value={comment} onChange={handleCommentChange} />
        </label>
        <button type="submit">Надіслати</button>
      </form>
    </div>
  );
};

export default ProductDetail;

