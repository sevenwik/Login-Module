import React, { Component } from "react";



export default class Home extends Component {
    render() {
        console.log(this.props)
        if (typeof this.props.location.state === 'undefined')
        {
            var msg = "User";
        }
        else
        {
            var msg = this.props.location.state.detail.firstName;
        }
        return (
            <div>
                <h1>Hello, {msg}!</h1>
            </div>
        );
    }
}