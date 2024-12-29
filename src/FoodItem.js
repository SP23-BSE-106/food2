import React from 'react';
import './imageStyles.css'; // Importing the new image styles

function FoodItem({ item, onAddToCart }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '5px', marginBottom: '10px', padding: '10px', width: '200px' }}>
      <img src={item.image} alt={item.name} className="food-image" />
      <h5>{item.name}</h5>
      <p>{item.description}</p>
      <p>Price: ${item.price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(item)}>Add to Cart</button>
    </div>
  );
}

export default FoodItem;
