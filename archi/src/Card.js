import React, { useState } from 'react';
import './Card.css';

const Card = ({ image, mob }) => {
    const [count, setCount] = useState(0); 
  
    const handleIncrement = () => setCount(count + 1); 
    const handleDecrement = () => setCount(count - 1);

    return (
        <div className="card fadeInUp" style={{backgroundColor: count >= 1 ? '#bdff7c' : '#282c34'}}>
            <img className="card-image" src={image} alt={mob} />
            <h2 className="card-title" style={{color: count >= 1 ? '#282c34' : '#00d8ff'}}>{mob}</h2>
            <div className="counter">
                <button className="btn" onClick={handleDecrement} style={{backgroundColor: count >= 1 ? '#282c34' : '#00d8ff', color: count >= 1 ? '#bdff7c' : 'white'}}>-</button>
                <span style={{color: count >= 1 ? '#282c34' : 'white'}}>{count}</span>
                <button className="btn" onClick={handleIncrement} style={{backgroundColor: count >= 1 ? '#282c34' : '#00d8ff', color: count >= 1 ? '#bdff7c' : 'white'}}>+</button>
            </div>
        </div>
    );
    };

export default Card;