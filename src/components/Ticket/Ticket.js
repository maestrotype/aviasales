import React, { Component } from 'react';
import title from './title.svg';
import './Ticket.css'

export class Ticket extends Component {

    render() {
        return (
            <div className="ticket">
                <div className="side-buy">
                    <img src={title} alt="title" />
                    <div className="btn-buy">
                        Купить за
                    </div>
                </div>
                <div className="transp-side">
                    <div className="transp-from">
                        <div className="time"></div>
                        <div className="sity"></div>
                        <div className="date"></div>
                    </div>
                    <div className="transp-to">
                        <div className="time"></div>
                        <div className="sity"></div>
                        <div className="date"></div>
                    </div>
                </div>
            </div>
        );
    }
}
