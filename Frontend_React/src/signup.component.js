import React, { Component } from "react";
import axios from 'axios';
const { REACT_APP_API_URL } = process.env;

export default class SignUp extends Component {
    
    register(info)
    {      
        axios.request({
            method:'post',
            url:`${REACT_APP_API_URL}/api/auth/sign-up`,
            data: info
        }).then(response=>{
           // console.log(response);
            this.props.history.push("/sign-in");
        }).catch(error => {
            console.log(error.response)
        });
    }
    onSubmit(e)
    {
        const List = {
            firstName:this.refs.firstName.value,
            lastName:this.refs.lastName.value,
            email: this.refs.email.value,
            password: this.refs.password.value
        }
        //console.log(List);
        console.log(REACT_APP_API_URL)
        this.register(List)
        e.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <h3>Register</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" ref="firstName"/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" ref="lastName"/>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" ref="email"/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" ref="password"/>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">log in?</a>
                </p>
            </form>
        );
    }
}