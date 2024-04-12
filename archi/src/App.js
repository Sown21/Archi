import React, { useState, useEffect } from "react";
import './App.css';
import Card from './Card'
import Nav from './Nav'
import data from './data'

function App() {
  const [selectedStage, setSelectedStage] = useState("all");

  const filteredData = selectedStage === "all" ? data : data.filter(monster => monster.stage === selectedStage);
  return (
    <div className="App">
      <header className="App-header">
        <img src="./Images/logo.png" className="App-logo" alt="logo" />
        <h1 className="animated fadeInRight">Archimonstres</h1>
      </header>
      <Nav stages={Array.from(new Set(data.map(monster => monster.stage)))} selectedStage={selectedStage} setSelectedStage={setSelectedStage} />
      <div className="container">
      {filteredData.map((monster) => (
        <Card key={monster.id} image={monster.image} mob={monster.mob} />
      ))} 
      </div>
    </div>
  );
}

export default App;
