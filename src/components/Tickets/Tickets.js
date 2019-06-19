import React, { Component } from 'react';
import title from './title.svg';
import plane from './plane.svg';
// import data from './tickets.json';
import './Tickets.css';

// const API = "http://www.json-generator.com/api/json/get/cqGducpwHS?indent=2";

export class Tickets extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            tickets: [],
            currency: this.props.currency
         };
    }

    componentDidMount() {
        
            // this.setState({ tickets: data.tickets });
    
        fetch('tickets.json')
            .then(response => response.json())
            .then(data => {
                this.setState({ tickets: data.tickets });
            })
            .catch(error => console.log('error', error));
    }

    changeCur = (currency) => {
        console.log('currency', currency);
        return currency === 'RUB' ? '₽' : currency === 'USD' ? '&#36;' : '&#128;';
    }


    render() {

        const { tickets, currency } = this.state;
       
        return (
            <div className="tickets">
                {tickets.map((ticket) => {
                    const { departure_time, arrival_date,departure_date,origin, origin_name, arrival_time,destination, destination_name, price, stops } = ticket;
        
                    return (
                        <div className="ticket">
                            <div className="side-buy">
                                <img src={title} alt="title" />
                                <div className="btn-buy">
                                    <span className="price">Купить за {price} {this.changeCur(currency)}</span>
                                </div>
                            </div>
                            <div className="transp-side">
                                <div className="transp-from">
                                    <div className="time">{departure_time}</div>
                                    <div className="sity">{origin},{origin_name}</div>
                                    <div className="date">{departure_date}</div>
                                </div>
                                <div className="amount-transp">
                                    <span>{stops} пересадк{stops === 1 ? 'a' : 'и' }</span>
                                    <div className="underline">
                                        <img className="plane" src={plane} alt="plane"/>
                                    </div>
                                </div>
                                <div className="transp-to">
                                    <div className="time">{arrival_time}</div>
                                    <div className="sity">{destination_name},{destination}</div>
                                    <div className="date">{arrival_date}</div>
                                </div>
                            </div>
                        </div>
                    )
                }
                )}
            </div>
        );
    }
}
