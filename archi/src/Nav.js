import React from 'react';
import './Nav.css'

function Nav({ stages, selectedStage, setSelectedStage }) {
  const handleChange = (event) => {
    setSelectedStage(event.target.value);
  };
  const sortedStages = stages.slice().sort((a, b) => Number(a) - Number(b));
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
        <span className="nav-select">
          <select value={selectedStage} onChange={handleChange}>
            <option className="select-menu" value="all">Tous les monstres</option>
            {sortedStages.map(stage => (
              <option className="select-menu" key={stage} value={stage}>Etape {stage}</option>
            ))}
          </select>
        </span>
    </nav>
  );
}

export default Nav;