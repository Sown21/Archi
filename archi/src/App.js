import React, { useState, useEffect } from "react";
import './App.css';
import Card from './Card'
import Nav from './Nav'
import data from './data'

function App() {
  const [selectedStage, setSelectedStage] = useState("all");

  const handleChange = (event) => {
    setSelectedStage(event.target.value);
  };

  const filteredData = selectedStage === "all" ? data : data.filter(monster => monster.stage === selectedStage);
  return (
    <div className="App">
      <header className="App-header">
        <img src="./Images/logo.png" className="App-logo" alt="logo" />
        <h1 className="animated fadeInRight">Archimonstres</h1>
      </header>
      <Nav stages={Array.from(new Set(data.map(monster => monster.stage)))} selectedStage={selectedStage} setSelectedStage={setSelectedStage} />
      <div className="container">
      {/* <select value={selectedStage} onChange={handleChange}>
          <option value="all">All Stages</option>
          {Array.from(new Set(data.map(monster => monster.stage))).map(stage => (
            <option key={stage} value={stage}>Stage {stage}</option>
          ))}
        </select> */}
      {filteredData.map((monster) => (
        <Card key={monster.id} image={monster.image} mob={monster.mob} />
      ))} 
      </div>
    </div>
  );
}

export default App;
