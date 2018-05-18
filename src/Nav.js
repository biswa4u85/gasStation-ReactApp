import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className="Header">
        <div className="logo">Logo</div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ventas">ventas</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;