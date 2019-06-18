import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Filters } from './components/Filters/Filters';
import { Ticket } from './components/Ticket/Ticket';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="container">
        <Filters />
        <div className="tickets">
          <Ticket />  
          <Ticket />  
          <Ticket />  
          <Ticket />  
          <Ticket />  
        </div>
      </div>
    </div>
  );
}

export default App;
