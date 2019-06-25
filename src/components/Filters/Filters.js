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
                    {this.props.stops.map(stopItem =>
                    <div className="transplants-filter"  >
                        <input type="checkbox" 
                            id={stopItem.id} 
                            ref={stopItem.id}
                            className="ckeckStops" 
                            onClick={this.props.eventClick}
                            
                            />    
                        <label htmlFor={stopItem.id}>{stopItem.stop}</label>
                        <a href="" className="hoverLink">только</a>
                    </div>
                    )}
                </div>
            </div>
        );
    }
}
