import React, { Component } from 'react';
import title from './title.svg';
import plane from './plane.svg';
import dateFormat from 'dateformat';
// import data from './tickets.json';
import './Tickets.css';

// const API = "http://www.json-generator.com/api/json/get/cqGducpwHS?indent=2";

export class Tickets extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tickets: [],
        };
        this.newList = [];
        this.filterTickets = this.filterTickets.bind(this);
    }

    filterTickets(tickets) {
        var updateList = tickets;

        if (this.props.stops.stop == 'all' && this.props.stops.active) {
            return updateList;
        }
        else {
            updateList.map((list) => {
                if (list.stops == this.props.stops.stop && this.props.stops.active) {
                    updateList = updateList.filter((item) => {

                        return item.stops == this.props.stops.stop && this.props.stops.active
                    })

                    this.newList.push(list);
                }
                else if (list.stops == this.props.stops.stop && !this.props.stops.active) {

                    this.newList = this.newList.filter((item) => {
                        return item.stops != list.stops
                    })
                }
            })
        }

        return this.newList;
    }

    componentDidMount() {

        fetch('tickets.json')
            .then(response => response.json())
            .then(data => {
                this.setState({ tickets: data.tickets });
            })
            .catch(error => console.log('error', error));

    }

    changeCur = (currency) => {
        return currency === 'RUB' ? '₽' : currency === 'USD' ? <span>&#36;</span> : <span>&euro;</span>;
    }

    transformSum(price) {
        var trPrice = price.toString();
        if (trPrice.length > 3) {
            for (let i = trPrice.length; trPrice >= 0  ; i--) {
                if (i % 3 == 0) {
                    var ar = trPrice.split('');
                    ar.splice(trPrice.length - i, 0, ' ');
                    trPrice = ar.join('');
                }
            }
        }

        return trPrice
    }

    calcCur = (currency, price) => {
        switch (currency) {
            case 'RUB': {
                return this.transformSum(price)
            }
            case 'USD': {
                return (price * 0.016).toFixed(1)
            }
            case 'EUR': {
                return (price * 0.014).toFixed(1)
            }
            default: {
                return price
            }
        }
    }

    dateFormat = dateFormat.i18n = {
        dayNames: [
            'Вос', 'Пон', 'Вт', 'Ср', 'Чет', 'Пят', 'Суб',
            'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
        ],
        monthNames: [
            'Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноябрь', 'Дек',
            'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
        ],
        timeNames: [
            'a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'
        ]
    };


    render() {

        const { tickets } = this.state;
        this.updateList = this.filterTickets(tickets); 

        if (this.updateList.length !== 0) {
            return (

                <div className="tickets">
                    {this.updateList.map((ticket) => {
                        const { departure_time, arrival_date, departure_date, origin, origin_name, arrival_time, destination, destination_name, price, stops } = ticket;

                        return (
                            <div className="ticket">
                                <div className="side-buy">
                                    <img src={title} alt="title" />
                                    <div className="btn-buy">
                                        <span className="price">Купить</span> <br />
                                        <span className="price"> за {this.calcCur(this.props.currency, price)} {this.changeCur(this.props.currency)}</span>
                                    </div>
                                </div>
                                <div className="transp-side">
                                    <div className="transp-from">
                                        <div className="time">{departure_time}</div>
                                        <div className="sity">{origin},{origin_name}</div>
                                        <div className="date">{dateFormat(departure_date, "d mmm, yyyy, ddd")}</div>
                                    </div>
                                    <div className="amount-transp">
                                        <span> {stops === 0 ? 'без пересадок' : stops === 1 ? '1 пересадкa' : stops + ' пересадки'}</span>
                                        <div className="underline">
                                            <img className="plane" src={plane} alt="plane" />
                                        </div>
                                    </div>
                                    <div className="transp-to">
                                        <div className="time">{arrival_time}</div>
                                        <div className="sity">{destination_name},{destination}</div>
                                        <div className="date">{dateFormat(arrival_date, "d mmm, yyyy, ddd")}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )}
                </div>
            );
        }
        else {
            return (
                <div className="tickets">
                    <h1>Ничего не выбрано</h1>
                </div>
            )
        }
    }
}

