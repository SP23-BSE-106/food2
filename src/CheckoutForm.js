import React, { useState } from 'react';
import './App.css'; // Importing global styles

function CheckoutForm({ cart, onClearCart }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [orderSummary, setOrderSummary] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const orderDetails = cart.map(item => `${item.name} - Quantity: ${item.quantity} - Price: $${(item.price * item.quantity).toFixed(2)}`).join('\n');
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    
    setOrderSummary({
      details: orderDetails,
      total: totalPrice.toFixed(2),
      name,
      address,
      contact,
    });
    
    onClearCart();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="form-control" />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required className="form-control" />
        </div>
        <div className="form-group">
          <label>Contact Number:</label>
          <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} required className="form-control" />
        </div>
        <h3>Cart Items:</h3>
        <ul>
          {cart.map(item => (
            <li key={item.id}>{item.name} - Quantity: {item.quantity}</li>
          ))}
        </ul>
        <button type="submit" className="btn btn-primary">Place Order</button>
      </form>
      {orderSummary && (
        <div className="card">
          <h3>Order Confirmation</h3>
          <p>Name: {orderSummary.name}</p>
          <p>Address: {orderSummary.address}</p>
          <p>Contact: {orderSummary.contact}</p>
          <h4>Order Summary</h4>
          <pre>{orderSummary.details}</pre>
          <h4>Total Price: ${orderSummary.total}</h4>
        </div>
      )}
    </div>
  );
}

export default CheckoutForm;
