import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className="Header">
        <div className="logo">Logo</div>
        <Router>
          <div>
            <Link to={'/ventas'}>Recipes</Link>
            <Link to={'/ventas'}><button className="defaultButt">BUYER</button></Link>
          </div>
        </Router>
      </div>
    );
  }
}

export default Nav;