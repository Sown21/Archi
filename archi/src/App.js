import React, { useState, useEffect } from "react";
import './App.css';
import Card from './Card'
import Nav from './Nav'
import data from './data'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="./Images/logo.png" className="App-logo" alt="logo" />
        <h1 className="animated fadeInRight">Archimonstres</h1>
      </header>
      <Nav />
      <div className="container">
      {data.map((monster) => (
        <Card key={monster.id} image={monster.image} mob={monster.mob} />
      ))} 
      {data && data.length>0 && data.map((mob)=><p>{mob.stage}</p>)}
      </div>
    </div>
  );
}

export default App;
