import React from 'react';
import './Home.css'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/login')
    }
    return (
        <div>
            <header className="App-header">
                <img src="./Images/logo.png" className="App-logo" alt="logo" />
                <h1 className="animated fadeInRight title">Bienvenue sur Archimonstres</h1>
            </header>
            <div className='btn-container'><button className="btn-login" onClick={handleClick}>Se connecter</button></div>
            
        </div>
    )
}

export default Home;