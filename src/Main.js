import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';


class Main extends Component {
  render() {
    return (
      <div className="loginBg">
        <button className="loginBbutt">Login</button>
        <div className="logo">Logo</div>
        {/* <Link to='app2'>Recipes</Link> */}
        <Link to={'/app2'}><button className="defaultButt">BUYER</button></Link>
        <Link to={'/app3'}><button className="defaultButt">BUYER</button></Link>
      </div>
    );
  }
}

export default Main;