import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png'

class Nav extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4 logo">
            <img src={logo} alt="" />
          </div>
          <div className="col-sm-4">
            <ul className="navi">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/ventas">Ventas</Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-4">
            <Link to="/" className="loginTxt">Login</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;