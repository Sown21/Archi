import React, { useState } from 'react';
import './Card.css';

const Card = ({ image, mob }) => {
    const [count, setCount] = useState(0); 
  
    const handleIncrement = () => setCount(prevState => Math.max(prevState + 1, 0));
    const handleDecrement = () => {
        if (count > 0) {
          setCount(count - 1);
        }
    };

    const [isTradeSelected, setIsTradeSelected] = useState(false);
    const handleTradeClick = () => {
        setIsTradeSelected(!isTradeSelected);
    };
    const [isSearchSelected, setIsSearchSelected] = useState(false);
    const handleSearchClick = () => {
        setIsSearchSelected(!isSearchSelected);
    };

    return (
        <div className="card fadeInUp" style={{backgroundColor: count >= 1 ? '#bdff7c' : '#282c34'}}>
            <img className="card-image" src={image} alt={mob} />
            <h2 className="card-title" style={{color: count >= 1 ? '#282c34' : '#00d8ff'}}>{mob}</h2>
            <div className="counter">
                <button className="btn" onClick={handleDecrement} style={{backgroundColor: count >= 1 ? '#282c34' : '#00d8ff', color: count >= 1 ? '#bdff7c' : 'white'}}>-</button>
                <span style={{color: count >= 1 ? '#282c34' : 'white'}}>{count}</span>
                <button className="btn" onClick={handleIncrement} style={{backgroundColor: count >= 1 ? '#282c34' : '#00d8ff', color: count >= 1 ? '#bdff7c' : 'white'}}>+</button>
                <div className='trade'>               
                    <button onClick={handleTradeClick} className={isTradeSelected ? 'selected' : 'trade-btn'}>J'échange</button>
                    <button onClick={handleSearchClick} className={isSearchSelected ? 'selected' : 'trade-btn'}>Je recherche</button>
                </div>

            </div>
        </div>
    );
    };

export default Card;