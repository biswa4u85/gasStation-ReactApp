import React, { Component } from 'react';
import { FormGroup, Input } from 'reactstrap';
import { withRouter } from 'react-router-dom'
import classNames from 'classnames';
import validator from 'validator';
import { graphql, compose } from 'react-apollo'
import { ALL_DATA_QUERY } from './queries/query'
import { CREATE_NEW } from './mutations/mutation'


class Ventas extends Component {

  constructor(props) {
    super(props);
    this.props.allPostsQuery.refetch()
    this.state = {
      caja1: 0,
      cajaVal1: '',
      caja2: 0,
      cajaVal2: '',
      caja3: 0,
      cajaVal3: '',
      caja4: 0,
      cajaVal4: '',
      caja5: 0,
      cajaVal5: '',
      caja6: 0,
      cajaVal6: '',
      totalCajaVal: 0,
    }
  }

  renderVentas() {
    if (this.props.allPostsQuery.listGalons && this.props.allPostsQuery.listGalons.items.length !== 0) {
      let totalCash = 0
      let totalCashGalons = 0
      let totalcCard = 0
      let totalcCardGalons = 0
      let totalgCard = 0
      let totalgCardGalons = 0
      let totalOthers = 0
      let totalOthersGalons = 0
      this.props.allPostsQuery.listGalons.items.map((item, i) => {
        if (item.cash > 0) {
          totalCash = totalCash + item.cash
          totalCashGalons = totalCashGalons + (item.galons * item.price)
        }
        if (item.ccard > 0) {
          totalcCard = totalcCard + item.ccard
          totalcCardGalons = totalcCardGalons + (item.galons * item.price)
        }
        if (item.gcard > 0) {
          totalgCard = totalgCard + item.gcard
          totalgCardGalons = totalgCardGalons + (item.galons * item.price)
        }
        if (item.others > 0) {
          totalOthers = totalOthers + item.others
          totalOthersGalons = totalOthersGalons + (item.galons * item.price)
        }
      })
      return (
        <div>
          <div className="row">
            <div className="col-sm-12">
              <table className="table ventasTable">
                <tbody>
                  <tr>
                    <td>{totalCashGalons}</td>
                    <td>cash</td>
                    <td>{totalCash}</td>
                  </tr>
                  <tr>
                    <td>{totalcCardGalons}</td>
                    <td>Credit Card</td>
                    <td>{totalcCard}</td>
                  </tr>
                  <tr>
                    <td>{totalgCardGalons}</td>
                    <td>Gift Card</td>
                    <td>{totalgCard}</td>
                  </tr>
                  <tr>
                    <td>{totalOthersGalons}</td>
                    <td>Others</td>
                    <td>{totalOthers}</td>
                  </tr>
                  <tr>
                    <td>{totalCashGalons + totalcCardGalons + totalgCardGalons + totalOthersGalons}</td>
                    <td>Total</td>
                    <td>{totalCash + totalcCard + totalgCard + totalOthers}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>No Data</div>
      )
    }
  }

  calccaja(name, val, amount) {
    var state = this.state;
    state['cajaVal' + name] = val.target.value;
    state['caja' + name] = val.target.value * amount;
    this.setState(state);
    this.setState({ totalCajaVal: this.state.caja1 + this.state.caja2 + this.state.caja3 + this.state.caja4 + this.state.caja5 + this.state.caja6 })
  }

  render() {
    return (
      <div className="contentCotainer">
        <div className="container contentBg">
          <div className="row">
            <div className="col-sm-6 col-6">
              <h2>Cuadre</h2>
            </div>
          </div>
          {this.renderVentas()}
          <div className="row calculationArea">
            <div className="col-sm-6 col-12">
              <h3>Caja</h3>
              <ul className="calcList">
                <li>
                  <FormGroup>
                    <Input className="smlInput" name="cajaVal1" value={this.state.cajaVal1} onChange={(value) => this.calccaja('1', value, '2000')} type="number" />
                    <span className="compliantTxt">x</span><span className="compliantAmt">2000</span>  =  <span className="compliantRes">{this.state.caja1}</span>
                  </FormGroup>
                </li>
                <li>
                  <FormGroup>
                    <Input className="smlInput" name="cajaVal2" value={this.state.cajaVal2} onChange={(value) => this.calccaja('2', value, '1000')} type="number" />
                    <span className="compliantTxt">x</span><span className="compliantAmt">1000</span>  =  <span className="compliantRes">{this.state.caja2}</span>
                  </FormGroup>
                </li>
                <li>
                  <FormGroup>
                    <Input className="smlInput" name="cajaVal3" value={this.state.cajaVal3} onChange={(value) => this.calccaja('3', value, '500')} type="number" />
                    <span className="compliantTxt">x</span><span className="compliantAmt">500</span>  =  <span className="compliantRes">{this.state.caja3}</span>
                  </FormGroup>
                </li>
                <li>
                  <FormGroup>
                    <Input className="smlInput" name="cajaVal4" value={this.state.cajaVal4} onChange={(value) => this.calccaja('4', value, '100')} type="number" />
                    <span className="compliantTxt">x</span><span className="compliantAmt">100</span>  =  <span className="compliantRes">{this.state.caja4}</span>
                  </FormGroup>
                </li>
                <li>
                  <FormGroup>
                    <Input className="smlInput" name="cajaVal5" value={this.state.cajaVal5} onChange={(value) => this.calccaja('5', value, '50')} type="number" />
                    <span className="compliantTxt">x</span><span className="compliantAmt">50</span>  =  <span className="compliantRes">{this.state.caja5}</span>
                  </FormGroup>
                </li>
                <li>
                  <FormGroup>
                    <Input className="smlInput" name="cajaVal6" value={this.state.cajaVal6} onChange={(value) => this.calccaja('6', value, '25')} type="number" />
                    <span className="compliantTxt">x</span><span className="compliantAmt">25</span>  =  <span className="compliantRes">{this.state.caja6}</span>
                  </FormGroup>
                </li>
                <li>
                  Subtotal : <span>{this.state.totalCajaVal}</span>
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

const DetailPageWithGraphQL = compose(
  graphql(ALL_DATA_QUERY, {
    name: 'allPostsQuery',
  }),
  graphql(CREATE_NEW, {
    name: 'createNew'
  })
)(Ventas)

const DetailPageWithDelete = graphql(ALL_DATA_QUERY)(DetailPageWithGraphQL)
export default withRouter(DetailPageWithDelete)