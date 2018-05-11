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
      <div>
        <div className="container contentBg">
          <div className="row">
            <div className="col-sm-6 col-6">
              <h2>Ventas</h2>
            </div>
            <div className="col-sm-6 col-6">
              <button className="defaultButt float-right">Coedren</button>
            </div>           
          </div>
          <div className="row">
            <div className="col-sm-12">
            <table class="table ventasTable">                    
                    <tbody>
                      <tr>
                        <td>xxxxxx</td>
                        <td>Effectivo</td>
                        <td>xxxxxx</td>                        
                      </tr>
                      <tr>
                        <td>xxxxxx</td>
                        <td>Effectivo</td>
                        <td>xxxxxx</td>                         
                      </tr>
                      <tr>
                        <td>xxxxxx</td>
                        <td>Effectivo</td>
                        <td>xxxxxx</td>                         
                      </tr>
                      <tr>
                        <td>xxxxxx</td>
                        <td>Effectivo</td>
                        <td>xxxxxx</td>                        
                      </tr>
                      <tr>
                        <td></td>
                        <td>Total</td>
                        <td>$000000</td>                        
                      </tr>
                    </tbody>
            </table>
            </div>
          </div>
          <div className="row calculationArea">
            <div className="col-sm-6 col-6">
              <h3>Caja</h3>
            </div>
            <div className="col-sm-6 col-6">
              <h3>Metors</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;