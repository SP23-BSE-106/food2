import React from 'react';

function FoodItem({ item, onAddToCart }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '5px', marginBottom: '10px', padding: '10px', width: '200px' }}>
      <img src={item.image} alt={item.name} style={{ width: '100%', borderRadius: '5px' }} />
      <h5>{item.name}</h5>
      <p>{item.description}</p>
      <p>Price: ${item.price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(item)}>Add to Cart</button>
    </div>
  );
}

export default FoodItem;
