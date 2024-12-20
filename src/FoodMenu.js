import React, { useState } from 'react';
import FoodItem from './FoodItem';
import './App.css'; // Importing global styles

const foodItemsData = [
  {
    id: 1,
    name: 'Pizza',
    description: 'Delicious cheese pizza',
    price: 9.99,
    image: 'path/to/pizza-image.jpg',
    category: 'Non-Vegetarian',
  },
  {
    id: 2,
    name: 'Salad',
    description: 'Fresh garden salad',
    price: 5.99,
    image: 'path/to/salad-image.jpg',
    category: 'Vegetarian',
  },
  {
    id: 3,
    name: 'Burger',
    description: 'Juicy beef burger with cheese',
    price: 8.99,
    image: 'path/to/burger-image.jpg',
    category: 'Non-Vegetarian',
  },
  {
    id: 4,
    name: 'Pasta',
    description: 'Creamy Alfredo pasta',
    price: 7.99,
    image: 'path/to/pasta-image.jpg',
    category: 'Vegetarian',
  },
  {
    id: 5,
    name: 'Ice Cream',
    description: 'Rich chocolate ice cream',
    price: 4.99,
    image: 'path/to/icecream-image.jpg',
    category: 'Dessert',
  },
  {
    id: 6,
    name: 'Soda',
    description: 'Refreshing soda drink',
    price: 1.99,
    image: 'path/to/soda-image.jpg',
    category: 'Beverage',
  },
  {
    id: 7,
    name: 'Tacos',
    description: 'Spicy chicken tacos',
    price: 10.99,
    image: 'path/to/tacos-image.jpg',
    category: 'Non-Vegetarian',
  },
  {
    id: 8,
    name: 'Fruit Salad',
    description: 'Mixed seasonal fruits',
    price: 3.99,
    image: 'path/to/fruitsalad-image.jpg',
    category: 'Vegetarian',
  },
];

function FoodMenu({ onAddToCart }) {
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState('All');

  const handleAddToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 } 
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const filteredItems = foodItemsData.filter(item => {
    const matchesCategory = filter === 'All' || item.category === filter;
    return matchesCategory;
  });

  return (
    <div className="container">
      <h2>Food Menu</h2>
      <select onChange={(e) => setFilter(e.target.value)} className="form-control">
        <option value="All">All</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Non-Vegetarian">Non-Vegetarian</option>
        <option value="Dessert">Dessert</option>
        <option value="Beverage">Beverage</option>
      </select>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredItems.map(item => (
          <div key={item.id} className="card">
            <FoodItem item={item} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodMenu;
