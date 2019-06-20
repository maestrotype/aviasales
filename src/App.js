import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Filters } from './components/Filters/Filters';
import { Tickets } from './components/Tickets/Tickets';

const curMenu = [
  'RUB',
  'USD',
  'EUR'

];

const stops = [
  {
    stop: 'Все',
    id: 'all'
  },
  {
    stop: 'Без пересадок',
    id: '0'
  },
  {
    stop: '1 пересадка',
    id: '1'
  },
  {
    stop: '2 пересадки',
    id: '2'
  },
  {
    stop: '3 пересадки',
    id: '3'
  }
  
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCurrency: 'RUB',
      stops: '1'
    };
  }

   changeCur = (e) => {
    this.setState({ activeCurrency: e.target.innerText })   
  }

  changeStops = (e) => {
    console.log('event', e.target.id);
    this.setState({ stops: e.target.id });
    // return e.target.id;
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="container">
          <Filters 
            curMenu = {curMenu} 
            stops = {stops}
            activeCurrency={this.state.activeCurrency}
            changeCur={this.changeCur}
            eventClick={this.changeStops}
          />
          <Tickets 
            currency={this.state.activeCurrency}
            stops={this.state.stops}
          />
        </div>
      </div>
    );
  }
}

export default App;
