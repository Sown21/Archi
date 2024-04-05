import React from "react";
import logo from './logo.svg';
import './App.css';
import Card from './Card'
import data from './data'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="container">
        {data.map((monster, index) => (
        <Card key={monster.id} image={monster.image} mob={monster.mob} />
      ))}
      </div>
    </div>
  );
}

export default App;
