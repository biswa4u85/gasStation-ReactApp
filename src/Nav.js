import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png'

class Nav extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4 logoImg">
            <img src={logo} alt="" />
          </div>
          <div className="col-sm-4 col-9">
            <ul className="navi">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/ventas">Ventas</Link>
              </li>
              <li>
                Price : <strong>{localStorage.getItem('galonsPrice') ? localStorage.getItem('galonsPrice') : 0}</strong>
              </li>
            </ul>
          </div>
          <div className="col-sm-4 col-3">
            <div className="headerRightLink">
              <Link to="/admin" className="loginTxt">Admin</Link>
              <Link to="/" className="loginTxt">Login</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;