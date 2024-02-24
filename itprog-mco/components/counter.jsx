import React, { useState } from 'react';
import './counter.css';

function Counter({ product, onCountChange }) {
    const [count, setCount] = useState(product.initialCount || 0);
  
    const increment = () => {
      const newCount = count + 1;
      setCount(newCount);
      onCountChange(product.id, newCount);
    };
  
    const decrement = () => {
      const newCount = count - 1;
      setCount(newCount);
      onCountChange(product.id, newCount);
    };
  
    return (
      <div className="counter-container">
        <button className="counter-button" onClick={decrement}>-</button>
        <input 
          type="text" 
          className="counter-input"
          value={count} 
          readOnly 
        />
        <button className="counter-button" onClick={increment}>+</button>
      </div>
    );
}

export default Counter;
  