import React, { Component } from 'react';
import title from './title.svg';
import './Ticket.css'

export class Ticket extends Component {

    render() {
        return (
            <div className="ticket">
                <img src={title} alt="title"/>
            <h1>Ticket works</h1>
            </div>
        );
    }
}
