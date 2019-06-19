import React, { Component } from 'react';
import './Filters.css';



export class Filters extends Component {

    render() {
        return (
            <div className="filters">
                <h2>Валюта</h2>
                <ul className="lang">
                    {this.props.curMenu.map(curItem =>
                        <li
                            className={this.props.activeCurrency === curItem ? 'active' : null}
                            onClick={this.props.changeCur}
                        >{curItem}</li>
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
