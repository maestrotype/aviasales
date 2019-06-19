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

class App extends Component {
  constructor(props) {
    super(props);
    this.changeCur = this.changeCur.bind(this);
    this.state = {
      activeCurrency: 'RUB'
    };
  }

   async changeCur(e) {

    this.setState({ activeCurrency: e.target.innerText }
    //   , () => {
    //   console.log(this.state.activeCurrency);
    // }
    )
    // this.setState({ activeCurrency: this.state.activeCurrency })
    // });
   
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="container">
          <Filters curMenu={curMenu} activeCurrency={this.state.activeCurrency}
            changeCur={this.changeCur}
          />
          <Tickets currency={this.state.activeCurrency}/>
        </div>
      </div>
    );
  }
}

export default App;
