import React, { Component } from "react";
import axios from 'axios';

export default class Login extends Component {
    logIn(cred)
    {
        axios.request({
            method:'post',
            url:'http://localhost:8080/api/auth/sign-in',
            data: cred
        }).then(response=>{
            console.log(response.data);
        }).catch(error => {
            console.log(error.response)
        });
    }
    onSubmit(e)
    {
        console.log("Hello")
        const List = {
            email: this.refs.email.value,
            password: this.refs.password.value
        }
        console.log(List);
        this.logIn(List);
        e.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" ref="email"/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" ref="password"/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}