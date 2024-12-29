import React, { useState } from 'react';
import FoodItem from './FoodItem';
import './App.css'; // Importing global styles

const foodItemsData = [
  {
    id: 1,
    name: 'Pizza',
    description: 'Delicious cheese pizza',
    price: 9.99,
    image : 'https://i.pinimg.com/474x/1c/e0/34/1ce034a7d5b2cd06e3d2279929b9a9c8.jpg',
    category: 'Non-Vegetarian',
  },
  {
    id: 2,
    name: 'Salad',
    description: 'Fresh garden salad',
    price: 5.99,
    image: 'https://i.pinimg.com/236x/b5/ea/38/b5ea3849b007144924c3965d93c78f44.jpg',
    category: 'Vegetarian',
  },
  {
    id: 3,
    name: 'Burger',
    description: 'Juicy beef burger with cheese',
    price: 8.99,
    image: 'https://i.pinimg.com/236x/90/e4/82/90e4824224b82a769281ae3502e92e6c.jpg',
    category: 'Non-Vegetarian',
  },
  {
    id: 4,
    name: 'Pasta',
    description: 'Creamy Alfredo pasta',
    price: 7.99,
    image: 'https://i.pinimg.com/474x/06/b3/81/06b38103033f641eeca51f64314ecd4c.jpg',
    category: 'Vegetarian',
  },
  {
    id: 5,
    name: 'Ice Cream',
    description: 'Rich chocolate ice cream',
    price: 4.99,
    image: 'https://i.pinimg.com/236x/d7/8b/c5/d78bc5f2b1f196e2c00a8b13bb0ff664.jpg',
    category: 'Dessert',
  },
  {
    id: 6,
    name: 'Soda',
    description: 'Refreshing soda drink',
    price: 1.99,
    image: 'https://i.pinimg.com/236x/23/42/43/23424317bb4bff6656941d675245bf6f.jpg',
    category: 'Beverage',
  },
  {
    id: 7,
    name: 'Tacos',
    description: 'Spicy chicken tacos',
    price: 10.99,
    image: 'https://i.pinimg.com/236x/f5/20/10/f52010f1acafbe3969cc567c41d44865.jpg',
    category: 'Non-Vegetarian',
  },
  {
    id: 8,
    name: 'Fruit Salad',
    description: 'Mixed seasonal fruits',
    price: 3.99,
    image: 'https://i.pinimg.com/236x/15/53/f5/1553f507ae736176e250efdc12c43b28.jpg',
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
