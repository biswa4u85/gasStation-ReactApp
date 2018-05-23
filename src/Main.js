import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label, Popover, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { withRouter } from 'react-router-dom'
import classNames from 'classnames';
import validator from 'validator';
import _ from 'lodash';
import uuidV4 from 'uuid/v4'
import { graphql, compose } from 'react-apollo'
import { ALL_DATA_QUERY } from './queries/query'
import { CREATE_NEW } from './mutations/mutation'

class Main extends Component {

    constructor(props) {
        super(props);
        this.props.allPostsQuery.refetch()
        this.printData = {}
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
            price: localStorage.getItem('galonsPrice') ? localStorage.getItem('galonsPrice') : 0,
            total: 0,
            remaining: 0,
            uName: { value: '', isValid: true, message: '' },
            uInvoice: true,
            uRnc: { value: '', isValid: true, message: '' },
            uBusiness: { value: '', isValid: true, message: '' },
            user: JSON.stringify({ 'uName': 'biswa', 'uInvoice': true, 'uRnc': 'rnctest', 'uBusiness': 'binesss' }),
            popoverOpen: {},
            modal: false
        }
        this.toggleModel = this.toggleModel.bind(this);
        this.toggleModelCancel = this.toggleModelCancel.bind(this);
    }

    onChange = (e) => {
        var state = this.state;
        state[e.target.name].value = e.target.value;
        if (e.target.name === 'sale') {
            state['galons'].value = this.state.sale.value / this.state.price;
        }
        if (e.target.name === 'galons') {
            state['sale'].value = this.state.galons.value * this.state.price;
        }
        this.setState(state);
        let sale = this.state.sale.value ? Number(this.state.sale.value) : 0
        let cash = this.state.cash.value ? Number(this.state.cash.value) : 0
        let ccard = this.state.ccard.value ? Number(this.state.ccard.value) : 0
        let gcard = this.state.gcard.value ? Number(this.state.gcard.value) : 0
        let others = this.state.others.value ? Number(this.state.others.value) : 0
        setTimeout(() => {
            if (sale > 0) {
                this.setState({ total: cash + ccard + gcard + others });
                this.setState({ remaining: (cash + ccard + gcard + others) - sale });
            }
        }, 0)
    }

    handleChangeChk = () => {
        this.setState({
            uInvoice: !this.state.uInvoice,
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.resetValidationStates();
        if (this.formIsValid()) {
            this.props.allPostsQuery.refetch()
            let tempInvoice = []
            this.props.allPostsQuery.listGalons.items.map((item, i) => {
                tempInvoice.push(item.invoice)
            })
            var printData = {
                id: this.state.id,
                date: this.state.date,
                invoice: tempInvoice.length !== 0 ? (Math.max(...tempInvoice) + 1) : 1,
                galons: Number(this.state.galons.value),
                cash: Number(this.state.cash.value),
                ccard: Number(this.state.ccard.value),
                gcard: Number(this.state.gcard.value),
                others: Number(this.state.others.value),
                price: this.state.price,
                total: this.state.total,
                user: this.state.user,
            }
            this.printData = printData
            this.props.createNew({
                variables: printData
            }).then(() => {
                this.props.allPostsQuery.refetch()
                this.setState({ id: uuidV4() });
            })
        }
    }

    formIsValid = () => {
        var state = this.state;
        if (validator.isEmpty(String(state.galons.value))) {
            state.galons.isValid = false;
            state.galons.message = 'Not a valid value';
            this.setState(state);
            return false;
        }

        if (validator.isEmpty(String(state.sale.value))) {
            state.sale.isValid = false;
            state.sale.message = 'Not a valid value';
            this.setState(state);
            return false;
        }

        //additional validation checks here...

        return true;
    }

    formIsValidUser = () => {
        var state = this.state;
        if (validator.isEmpty(String(state.uName.value))) {
            state.uName.isValid = false;
            state.uName.message = 'Not a valid value';
            this.setState(state);
            return false;
        }

        //additional validation checks here...

        return true;
    }

    resetValidationStates = () => {
        var state = this.state;
        Object.keys(state).map(key => {
            if (state[key].hasOwnProperty('isValid')) {
                state[key].isValid = true;
                state[key].message = '';
            }
        });
        this.setState(state);
    }

    resetStates = () => {
        var state = this.state;
        Object.keys(state).map(key => {
            if (state[key].hasOwnProperty('isValid')) {
                state[key].isValid = true;
                state[key].value = '';
                state[key].message = '';
            }
        });
        state.total = 0;
        state.remaining = 0;
        this.setState(state);
    }

    toggle = (id) => {
        var popover = {}
        if (Object.keys(this.state.popoverOpen).length !== 0 && Object.keys(this.state.popoverOpen)[0] === id) {
            this.setState({ popoverOpen: popover });
            return false
        }
        popover[id] = true
        this.setState({ popoverOpen: popover });
    }

    toggleModel() {
        if (this.formIsValid()) {
            this.setState({
                modal: !this.state.modal
            });
        }
    }

    toggleModelCancel() {
        this.resetStates()
        this.setState({
            modal: false
        });
    }

    onSubmitUser = (e) => {
        e.preventDefault();
        this.resetValidationStates();
        this.setState({ popoverOpen: '' });
        if (this.formIsValidUser()) {
            console.log(this.state)
            // this.props.createNew({
            //     variables: {
            //         id: this.state.id,
            //         date: this.state.date,
            //         invoice: tempInvoice.length !== 0 ? (Math.max(...tempInvoice) + 1) : 1,
            //         galons: Number(this.state.galons.value),
            //         price: this.state.price,
            //         total: this.state.total,
            //         user: this.state.user,
            //     }
            // }).then(() => {
            //     this.props.allPostsQuery.refetch()
            //     this.setState({ id: uuidV4() });
            // })
            // this.resetStates()
        }
    }

    renderTable() {
        if (this.props.allPostsQuery.listGalons && this.props.allPostsQuery.listGalons.items.length !== 0) {
            let sortByData = _.sortBy(this.props.allPostsQuery.listGalons.items, 'invoice')
            var { uName, uInvoice, uRnc, uBusiness } = this.state;
            var uNameGroupClass = classNames('form-group', { 'has-error': !uName.isValid });
            return (
                <div>
                    <table className="table headerBox">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Invoice</th>
                                <th>Galons</th>
                                <th>Price</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    </table>
                    <div className="scrollbar2" id="style-6">
                        <table className="table childBox">
                            <tbody>
                                {
                                    sortByData.reverse().map((item, i) =>
                                        <tr key={i}>
                                            <td>{new Date(item.date).toLocaleDateString()}</td>
                                            <td>#{item.invoice}</td>
                                            <td>{item.galons}</td>
                                            <td>{item.price}</td>
                                            <td>{item.total}</td>
                                            <td className="modalBoxArea"><button id={'Popover' + i} className="buttBg" data-toggle="modal" onClick={() => { this.toggle(i) }}>Print</button>
                                                <Popover className="popupBox" placement="bottom" isOpen={this.state.popoverOpen[i]} target={'Popover' + i}>
                                                    <Form onSubmit={this.onSubmitUser}>
                                                        <FormGroup className={uNameGroupClass}>
                                                            <Input className="defaultInput" type="text" name="uName" value={uName.value} onChange={this.onChange} autoFocus placeholder={JSON.parse(item.user).uName ? JSON.parse(item.user).uName : 'Name'} />
                                                            <span className="alert alert-danger">{uName.message}</span>
                                                        </FormGroup>
                                                        <FormGroup check>
                                                            <Label><Input type="checkbox" defaultChecked="uInvoice" onChange={this.handleChangeChk} />{' '}Fiscal Invoice</Label>
                                                        </FormGroup>
                                                        {this.state.uInvoice ? <FormGroup>
                                                            <Input className="defaultInput" type="text" name="uRnc" value={uRnc.value} onChange={this.onChange} autoFocus placeholder={JSON.parse(item.user).uRnc ? JSON.parse(item.user).uRnc : 'RNC'} />
                                                        </FormGroup> : ''}
                                                        {this.state.uInvoice ? <FormGroup>
                                                            <Label for="exampleSelect">Type of business</Label>
                                                            <Input type="select" name="uBusiness" onChange={this.onChange} id="exampleSelect">
                                                                <option>Select One</option>
                                                                <option>Private</option>
                                                                <option>Government</option>
                                                                <option>NGO</option>
                                                            </Input>
                                                        </FormGroup> : ''}
                                                        <Button type="submit" className="defaultButtMob updateButt">Update</Button>
                                                    </Form>
                                                </Popover>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
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
        var { galons, sale, cash, ccard, gcard, others } = this.state;
        var galonsGroupClass = classNames('form-group', { 'has-error': !galons.isValid });
        var saleGroupClass = classNames('form-group', { 'has-error': !sale.isValid });
        return (
            <div className="contentCotainer">
                <div className={(Object.keys(this.state.popoverOpen).length === 0) ? 'none' : 'overLapCotainer'} onClick={() => { this.setState({ popoverOpen: '' }) }}></div>
                <div className="container contentBg">
                    <div className="row">
                        <div className="col-sm-6 col-12">
                            <Form onSubmit={this.onSubmit}>
                                <FormGroup className={galonsGroupClass}>
                                    <Input className="defaultInput" type="number" name="galons" value={galons.value} onChange={this.onChange} autoFocus placeholder="Galons" />
                                    <span className="alert alert-danger">{galons.message}</span>
                                </FormGroup>
                                <FormGroup className={saleGroupClass}>
                                    <Input className="defaultInput" type="number" name="sale" value={sale.value} onChange={this.onChange} placeholder="Sale" />
                                    <span className="alert alert-danger">{sale.message}</span>
                                </FormGroup>
                                <Button type="submit" onClick={this.toggleModel} className="defaultButt" >Print</Button>
                                <Button type="button" onClick={this.resetStates} className="defaultButt">Reset</Button>
                            </Form>
                        </div>
                        <div className="col-sm-6 col-12">
                            <Form>
                                <FormGroup>
                                    <Input className="defaultInput" type="number" name="cash" value={cash.value} onChange={this.onChange} placeholder="Cash" />
                                </FormGroup>
                                <FormGroup>
                                    <Input className="defaultInput" type="number" name="ccard" value={ccard.value} onChange={this.onChange} placeholder="Credit Card" />
                                </FormGroup>
                                <FormGroup>
                                    <Input className="defaultInput" type="number" name="gcard" value={gcard.value} onChange={this.onChange} placeholder="Gift Card" />
                                </FormGroup>
                                <FormGroup>
                                    <Input className="defaultInput" type="number" name="others" value={others.value} onChange={this.onChange} placeholder="Others" />
                                </FormGroup>
                            </Form>
                            <Button type="submit" onClick={this.toggleModel} className="defaultButtMob" >Print</Button>
                            <Button type="button" onClick={this.resetStates} className="defaultButtMob">Reset</Button>
                        </div>
                        <div className="col-sm-12">
                            <div className="totalBar">
                                <div className="totalTxt">Total : {this.state.total}</div>
                                <div className="totalTxt">Remaining : {this.state.remaining}</div>
                            </div>
                            <Modal isOpen={this.state.modal} toggle={this.toggleModelCancel} className={this.props.className}>
                                <ModalHeader toggle={this.toggleModelCancel}>Print Reciept</ModalHeader>
                                <ModalBody>
                                    <ul className="printList">
                                        <li><span>Galons:</span> {this.printData.galons}</li>
                                        <li><span>Sale:</span> {this.printData.sale}</li>
                                        <li><span>Cash:</span> {this.printData.cash}</li>
                                        <li><span>Credit Card:</span> {this.printData.ccard}</li>
                                        <li><span>Gift Card:</span> {this.printData.gcard}</li>
                                        <li><span>Others:</span> {this.printData.others}</li>
                                        <li><span>Total:</span> {this.printData.total}</li>
                                        <li><span>Remaining:</span> {this.printData.remaining}</li>
                                    </ul>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary printBoxButt" onClick={this.toggleModelCancel}>Do Something</Button>{' '}
                                    <Button color="secondary printBoxButt" onClick={this.toggleModelCancel}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            {this.renderTable()}
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
)(Main)

const DetailPageWithDelete = graphql(ALL_DATA_QUERY)(DetailPageWithGraphQL)
export default withRouter(DetailPageWithDelete)