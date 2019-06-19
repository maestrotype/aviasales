import React, { Component } from 'react';
import './Filters.css';

const langMenu = [
    'RUB',
    'USD',
    'EUR'

];

export class Filters extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: 'RUB',
        };
    }

    changeLang = (langItem) => {
        
        this.setState({ active: langItem });
    }

    render() {
        return (
            <div className="filters">
                <h2>Валюта</h2>
                <ul className="lang">
                    {langMenu.map(langItem =>
                    <li className={this.state.active === langItem ? 'active': null} onClick={this.changeLang.bind(this, langItem)}>{langItem}</li>
                    // <li className={this.state.activeClass ? 'active': null} onClick={this.changeLang}>USD</li>
                    // <li className={this.state.activeClass ? 'active': null} onClick={this.changeLang}>EUR</li>
                    )}    
                    </ul>
                <h3>Количество пересадок</h3>
                <div className="filters-container">
                    <div className="transplants-filter">
                        <input type="checkbox" id="all" />
                        <label htmlFor="all">Все</label>
                    </div>
                    <div className="transplants-filter">
                        <input type="checkbox" id="without-transplants" />
                        <label htmlFor="without-transplants">Без пересадок</label>
                    </div>
                    <div className="transplants-filter">
                        <input type="checkbox" id="transplants-1" />
                        <label htmlFor="transplants-1">1 пересадка</label>
                    </div>
                    <div className="transplants-filter">
                        <input type="checkbox" id="transplants-2" />
                        <label htmlFor="transplants-2">2 пересадки</label>
                    </div>
                    <div className="transplants-filter">
                        <input type="checkbox" id="transplants-3" />
                        <label htmlFor="transplants-3">3 пересадки</label>
                    </div>
                </div>
            </div>
        );
    }
}
