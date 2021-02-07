import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Login from "./login.component";
import SignUp from "./signup.component";
import HomePage from "./homePage.component";


function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <img src="./api.png" width="35"></img>
          <Link className="navbar-brand" to={"/sign-in"}>&nbsp;Homepage</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="outer">
        <div className="inner">
          <Switch>
            <Route path='/' exact render={props=><Login {...props}/>}/>
            <Route path="/sign-in" exact render={props=><Login {...props}/>}/>
            <Route path="/sign-up" exact render={props=><SignUp {...props}/>}/>
            <Route path="/homepage" exact render={props=><HomePage {...props}/>}/>
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;