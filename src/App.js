import React, { useState, useEffect } from 'react';
import './App.css';
import musicService from './services/music';
import GigsInfo from './components/Music'

function App() {

  const [gigs, setGigs] = useState([]);

  const getGigs = () => {
    console.log("starting effect");
    musicService
    .getAll()
    .then(allGigs => {
    setGigs(allGigs);
    })
    };

    useEffect(getGigs, []);
    console.log("ready", gigs);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React bootstrat demo</h1>
      </header>
        <GigsInfo gigData={gigs} setgigs={setGigs} />
    </div>
  );
}

export default App;
