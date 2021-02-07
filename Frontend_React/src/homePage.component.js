import React, { Component } from "react";
import './homepage.css';
import bg from './hp.jpg';

export default class Home extends Component {
    render() {
        console.log(this.props)
        return (
            <div style={{textAlign:`center`}}>
                <h1>Hello {this.props.location.state.detail.firstName}!</h1>
            </div>
        );
    }
}