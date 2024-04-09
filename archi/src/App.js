import React from "react";
import './App.css';
import Card from './Card'
import data from './data'
import Nav from './Nav'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="./archi.png" className="App-logo" alt="archi" />
        <h1 className="animated">Archimonstres</h1>
      </header>
      <Nav />
      <div className="container">
        {data.map((monster, index) => (
        <Card key={monster.id} image={monster.image} mob={monster.mob} />
      ))} 
      </div>
    </div>
  );
}

export default App;
