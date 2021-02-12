import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from 'axios';
const { REACT_APP_API_URL } = process.env;

export default class Login extends Component {
    logIn(cred)
    {
        axios.request({
            method:'post',
            url:`${REACT_APP_API_URL}/api/auth/sign-in`,
            data: cred
        }).then(response=>{
            //console.log(response.data);
            this.props.history.push({
                pathname:"/homepage",
                state:{ detail:response.data }
            });
        }).catch(error => {
            console.log(error.response)
        });
    }
    onSubmit(e)
    {
        const List = {
            email: this.refs.email.value,
            password: this.refs.password.value
        }
        //console.log(List);
        this.logIn(List);
        e.preventDefault();
    }

    render() {
        const hello="bitches";
        return (
            <div>
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
                    Did not <a href="/sign-up">register?</a>
                </p>
            </form>
            </div>
        );
    }
}