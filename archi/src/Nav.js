import React from 'react';
import './Nav.css'

function Nav() {
  return (
    <nav className="navbar">
        <span className="nav-item">
            <a className="nav-link active" href="#">Accueil</a>
        </span>
        <span className="nav-item">
            <a className="nav-link" href="#">A propos</a>
        </span>
        <span className="nav-item">
            <a className="nav-link" href="#">Contact</a>
        </span>
    </nav>
  );
}

export default Nav;