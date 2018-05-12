import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import * as FontAwesome from 'react-icons/lib/fa';
// import topLogo from './images/top-logo.png';


class App2 extends Component {

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
            <div className="col-sm-6 col-12">
              <Form>
                <FormGroup>                  
                  <Input className="defaultInput" type="text" name="email" id="" placeholder="Galones" />
                </FormGroup>
                <FormGroup>                  
                  <Input className="defaultInput" type="text" name="password" id="" placeholder="Venta" />
                </FormGroup>                                
                <Button className="defaultButt">Save</Button>
                <Button className="defaultButt">Reset</Button>
                <Button className="defaultButt">Print</Button>
              </Form>
            </div>
            <div className="col-sm-6 col-12">
            <Form>
                <FormGroup>                  
                  <Input className="defaultInput" type="text" name="email" id="" placeholder="Effectivo" />
                </FormGroup>
                <FormGroup>                  
                  <Input className="defaultInput" type="text" name="password" id="" placeholder="Tarjeto" />
                </FormGroup>                               
                <FormGroup>                  
                  <Input className="defaultInput" type="text" name="email" id="" placeholder="Boro" />
                </FormGroup>
                <FormGroup>                  
                  <Input className="defaultInput" type="text" name="password" id="" placeholder="" />
                </FormGroup>
              </Form>
            </div>
            <div className="col-sm-12">
              <div className="totalBar">
                  <div className="totalTxt">Total : xxxxx</div>
                  <div className="totalTxt">Dweta : xxxxx</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
            <table class="table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Invoice</th>
                        <th>Garclem</th>
                        <th>Prclo</th>
                        <th>Total</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>05-06-2018</td>
                        <td>#01</td>
                        <td>xxxxxx</td>
                        <td>xxxxxx</td>
                        <td>000000</td>
                        <td><button className="buttBg">Button</button></td>
                      </tr>
                      <tr>
                      <td>05-06-2018</td>
                        <td>#01</td>
                        <td>xxxxxx</td>
                        <td>xxxxxx</td>
                        <td>000000</td>
                        <td><button className="buttBg">Button</button></td>
                      </tr>
                      <tr>
                        <td>05-06-2018</td>
                        <td>#01</td>
                        <td>xxxxxx</td>
                        <td>xxxxxx</td>
                        <td>000000</td>
                        <td><button className="buttBg">Button</button></td>
                      </tr>
                    </tbody>
            </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;