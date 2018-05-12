import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
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
            <button className="defaultButt">BUYER</button>
            <button className="defaultButt">USER</button>
        </div>      
    );
  }
}

export default App;