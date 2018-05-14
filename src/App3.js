import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import * as FontAwesome from 'react-icons/lib/fa';
// import topLogo from './images/top-logo.png';


class App3 extends Component {

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
      <div className="contentCotainer">
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
              <table className="table ventasTable">
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
            <div className="col-sm-6 col-12">
              <h3>Caja</h3>
              <ul className="calcList">
                <li>
                  <FormGroup>
                    <Input className="smlInput" type="number" />
                    <span className="compliantTxt">x</span><span className="compliantAmt">2000</span>  =  <span className="compliantRes">$xxx</span>
                  </FormGroup>
                </li>
                <li>
                  <FormGroup>
                    <Input className="smlInput" type="number" />
                    <span className="compliantTxt">x</span><span className="compliantAmt">1000</span>  =  <span className="compliantRes">$xxx</span>
                  </FormGroup>
                </li>
                <li>
                  <FormGroup>
                    <Input className="smlInput" type="number" />
                    <span className="compliantTxt">x</span><span className="compliantAmt">500</span>  =  <span className="compliantRes">$xxx</span>
                  </FormGroup>
                </li>
                <li>
                  <FormGroup>
                    <Input className="smlInput" type="number" />
                    <span className="compliantTxt">x</span><span className="compliantAmt">100</span>  =  <span className="compliantRes">$xxx</span>
                  </FormGroup>
                </li>
                <li>
                  <FormGroup>
                    <Input className="smlInput" type="number" />
                    <span className="compliantTxt">x</span><span className="compliantAmt">50</span>  =  <span className="compliantRes">$xxx</span>
                  </FormGroup>
                </li>
                <li>
                  <FormGroup>
                    <Input className="smlInput" type="number" />
                    <span className="compliantTxt">x</span><span className="compliantAmt">25</span>  =  <span className="compliantRes">$xxx</span>
                  </FormGroup>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-12">
              <h3>Metors</h3>
              <ul className="metors">
                <li>
                  <FormGroup>
                    <span className="compliantTxt">1</span><span className="compliantAmt">xxx</span>  <Input className="smlInput" type="number" />  <span className="compliantRes">YYY</span>
                  </FormGroup>
                </li>
                <li>
                  <FormGroup>
                    <span className="compliantTxt">1</span><span className="compliantAmt">xxx</span>  <Input className="smlInput" type="number" />  <span className="compliantRes">YYY</span>
                  </FormGroup>
                </li>
                <li>
                  <FormGroup>
                    <span className="compliantTxt">1</span><span className="compliantAmt">xxx</span>  <Input className="smlInput" type="number" />  <span className="compliantRes">YYY</span>
                  </FormGroup>
                </li>
                <li>
                  <FormGroup>
                    <span className="compliantTxt">1</span><span className="compliantAmt">xxx</span>  <Input className="smlInput" type="number" />  <span className="compliantRes">YYY</span>
                  </FormGroup>
                </li>
                <li>
                  <span className="totalAmt">EYYY</span>
                </li>
                <li className="finalAmt">
                  <FormGroup>
                    <span className="compliantTxt">XXX</span><Input className="smlInput" type="number" /><span className="compliantTxt">YYY</span>
                  </FormGroup>
                </li>
              </ul>
              <button className="defaultButt float-right">Submit</button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App3;