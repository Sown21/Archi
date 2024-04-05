import React, { useState } from 'react';
import './Card.css';

const Card = ({ image, mob }) => {
    const [count, setCount] = useState(0); 
  
    const handleIncrement = () => setCount(count + 1); 
    const handleDecrement = () => setCount(count - 1);

    return (
        <div className="card">
            <img className="card-image" src={image} alt={mob} />
            <h2 className="card-title">{mob}</h2>
            <div className="counter">
                <button onClick={handleDecrement}>-</button>
                {count}
                <button onClick={handleIncrement}>+</button>
            </div>
        </div>
    );
    };

export default Card;