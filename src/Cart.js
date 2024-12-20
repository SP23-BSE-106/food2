import React from 'react';
import './App.css'; // Importing global styles

function Cart({ cart, onUpdateQuantity }) {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} className="card">
              <h3>{item.name}</h3>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>Quantity: 
                <button className="btn" onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                {item.quantity}
                <button className="btn" onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
              </p>
              <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
