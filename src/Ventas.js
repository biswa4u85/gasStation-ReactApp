import React, { Component } from 'react';
import { FormGroup, Input } from 'reactstrap';
import { withRouter } from 'react-router-dom'
import classNames from 'classnames';
import validator from 'validator';
import appSyncConfig from './AppSync';
// import _ from 'lodash';
import uuidV4 from 'uuid/v4'
import { graphql, compose } from 'react-apollo'
import { ALL_DATA_QUERY } from './queries/query'
import { CREATE_NEW } from './mutations/mutation'


class Ventas extends Component {

  constructor(props) {
    super(props);
    this.props.allPostsQuery.refetch()
    this.state = {
      id: uuidV4(),
      date: new Date(),
      galons: { value: '', isValid: true, message: '' },
      sale: { value: '', isValid: true, message: '' },
      cash: { value: '', isValid: true, message: '' },
      ccard: { value: '', isValid: true, message: '' },
      gcard: { value: '', isValid: true, message: '' },
      others: { value: '', isValid: true, message: '' },
      invoice: 1,
      price: appSyncConfig.price,
      total: 0,
      remaining: 0,
      user: '{}',
      popoverOpen: {}
    }
  }

  renderVentas() {
    if (this.props.allPostsQuery.listGalons && this.props.allPostsQuery.listGalons.items.length !== 0) {
      let totalCash = 0
      let totalCashCount = 0
      let totalcCard = 0
      let totalcCardCount = 0
      let totalgCard = 0
      let totalgCardCount = 0
      let totalOthers = 0
      let totalOthersCount = 0
      this.props.allPostsQuery.listGalons.items.map((item, i) => {
        if (item.cash > 0) {
          totalCash = totalCash + item.cash
          totalCashCount = totalCashCount + 1
        }
        if (item.ccard > 0) {
          totalcCard = totalcCard + item.ccard
          totalcCardCount = totalcCardCount + 1
        }
        if (item.gcard > 0) {
          totalgCard = totalgCard + item.gcard
          totalgCardCount = totalgCardCount + 1
        }
        if (item.others > 0) {
          totalOthers = totalOthers + item.others
          totalOthersCount = totalOthersCount + 1
        }
      })
      return (
        <div>
          <div className="row">
            <div className="col-sm-12">
              <table className="table ventasTable">
                <tbody>
                  <tr>
                    <td>{totalCashCount}</td>
                    <td>cash</td>
                    <td>{totalCash}</td>
                  </tr>
                  <tr>
                    <td>{totalcCardCount}</td>
                    <td>Credit Card</td>
                    <td>{totalcCard}</td>
                  </tr>
                  <tr>
                    <td>{totalgCardCount}</td>
                    <td>Gift Card</td>
                    <td>{totalgCard}</td>
                  </tr>
                  <tr>
                    <td>{totalOthersCount}</td>
                    <td>Others</td>
                    <td>{totalOthers}</td>
                  </tr>
                  <tr>
                    <td>{totalCashCount + totalcCardCount + totalgCardCount + totalOthersCount}</td>
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
          {this.renderVentas()}
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