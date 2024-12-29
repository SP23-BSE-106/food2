import './App.css';
import React, { useState } from 'react';
import FoodMenu from './FoodMenu';
import Cart from './Cart';
import CheckoutForm from './CheckoutForm';
import FeedbackForm from './FeedbackForm';
import Navbar from './Navbar';

function App() {
  const [cart, setCart] = useState([]);

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity < 1) {
      setCart(cart.filter(item => item.id !== id));
    } else {
      setCart(cart.map(item => 
        item.id === id ? { ...item, quantity } : item
      ));
    }
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleAddToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      handleUpdateQuantity(item.id, existingItem.quantity + 1);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  return (  
    <div className="App">
      {/* <Navbar /> */}
      <h1>Food Order System</h1>
      <FoodMenu onAddToCart={handleAddToCart} />
      <Cart cart={cart} onUpdateQuantity={handleUpdateQuantity} />
      <CheckoutForm cart={cart} onClearCart={handleClearCart} />
      <FeedbackForm />
    </div>
  );
}

export default App;
