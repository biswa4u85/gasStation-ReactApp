import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import * as FontAwesome from 'react-icons/lib/fa';
// import topLogo from './images/top-logo.png';


class App extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (      
        <div className="loginBg">
            <button className="loginBbutt">Login</button>
            <div className="logo">Logo</div>
            <Router>
            <Link to="/App2"><button className="defaultButt">BUYER</button></Link>
            <Link to="/App3"><button className="defaultButt">USER</button></Link>
            <Route path="/App2" component={App2} />
            <Route path="/App3" component={App3} />
            </Router>
        </div>      
    );
  }
}

export default App;