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
    id: 'all',
    active: true
  },
  {
    stop: 'Без пересадок',
    id: '0',
    active: false
  },
  {
    stop: '1 пересадка',
    id: '1',
    active: false
  },
  {
    stop: '2 пересадки',
    id: '2',
    active: false
  },
  {
    stop: '3 пересадки',
    id: '3',
    active: false
  }
  
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCurrency: 'RUB',
      stops: {
        stop: 'all',
        active: true
      }
    };
  }

   changeCur = (e) => {
    this.setState({ activeCurrency: e.target.innerText })   
  }

  changeStops = (e) => {
    
    if(e.target.id !== 'all') {
      document.getElementById('all').checked = false;
    }
    else if(e.target.id == 'all') {
      let ckeckStops = document.getElementsByClassName('ckeckStops');
      for(let i = 0; i < ckeckStops.length; i++ ) {
        ckeckStops[i].checked = true;
      }
    }
    this.setState(
      { stops: {
        stop: e.target.id,
        active: e.target.checked
      }
      });
    
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
            stateStops = {this.state.stops}
            activeCurrency={this.state.activeCurrency}
            changeCur={this.changeCur}
            eventClick={this.changeStops}
            refId = {this.ref}
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