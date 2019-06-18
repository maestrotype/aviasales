import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Filters } from './components/Filters/Filters';
import { Tickets } from './components/Tickets/Tickets';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="container">
        <Filters />
        <Tickets />
      </div>
    </div>
  );
}

export default App;
