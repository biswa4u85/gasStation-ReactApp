import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { withRouter } from 'react-router-dom'

import uuidV4 from 'uuid/v4'
import { graphql, compose } from 'react-apollo'
import { ALL_DATA_QUERY } from './queries/query'
import { CREATE_NEW } from './mutations/mutation'

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: uuidV4(),
            date: new Date(),
            invoice: 'aa',
            galons: 'aaa',
            sale: 'aa',
            cash: 'aa',
            ccard: 'aa',
            gcard: 'aa',
            others: 'aa',
            price: 'aaa',
            total: 'aa',
            modal: false
        }
        this.toggle = this.toggle.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.location.key !== nextProps.location.key) {
            this.props.allPostsQuery.refetch()
        }
    }

    handleChange(event) {
        event.preventDefault();
        let formValues = {}
        let name = event.target.name;
        let value = event.target.value;
        formValues[name] = value;
        this.setState(formValues)
    }

    handleReset(event) {
        this.setState({
            date: '',
            invoice: '',
            galons: '',
            sale: '',
            cash: '',
            ccard: '',
            gcard: '',
            others: '',
            price: '',
            total: '',
        })
    }

    handleSave = async () => {
        await this.props.createNew({ variables: this.state })
        this.props.allPostsQuery.refetch()
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div className="contentCotainer">
                <div className="container contentBg">
                    <div className="row">
                        <div className="col-sm-6 col-12">
                            <Form>
                                <FormGroup>
                                    <Input className="defaultInput" type="text" name="galons" value={this.state.galons} onChange={this.handleChange.bind(this)} placeholder="Galons" />
                                </FormGroup>
                                <FormGroup>
                                    <Input className="defaultInput" type="text" name="sale" value={this.state.sale} onChange={this.handleChange.bind(this)} placeholder="Sale" />
                                </FormGroup>
                                <Button onClick={this.handleSave} className="defaultButt" >Print</Button>
                                <Button type="button" onClick={this.handleReset.bind(this)} className="defaultButt">Reset</Button>
                            </Form>
                        </div>
                        <div className="col-sm-6 col-12">
                            <Form>
                                <FormGroup>
                                    <Input className="defaultInput" type="text" name="cash" value={this.state.cash} onChange={this.handleChange.bind(this)} placeholder="Cash" />
                                </FormGroup>
                                <FormGroup>
                                    <Input className="defaultInput" type="text" name="ccard" value={this.state.ccard} onChange={this.handleChange.bind(this)} placeholder="Credit Card" />
                                </FormGroup>
                                <FormGroup>
                                    <Input className="defaultInput" type="text" name="gcard" value={this.state.gcard} onChange={this.handleChange.bind(this)} placeholder="Gift Card" />
                                </FormGroup>
                                <FormGroup>
                                    <Input className="defaultInput" type="text" name="others" value={this.state.others} onChange={this.handleChange.bind(this)} placeholder="" />
                                </FormGroup>
                            </Form>
                        </div>
                        <div className="col-sm-12">
                            <div className="totalBar">
                                <div className="totalTxt">Total : xxxxx</div>
                                <div className="totalTxt">Remaining : xxxxx</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <table className="table">
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
                                <table className="table">
                                    <tbody>
                                        {
                                            this.props.allPostsQuery.listGalons.items.map((item, i) => <tr key={i}>
                                                <td>{new Date(item.date).toLocaleDateString()}</td>
                                                <td>{item.invoice}</td>
                                                <td>{item.galons}</td>
                                                <td>{item.price}</td>
                                                <td>{item.total}</td>
                                                <td><button className="buttBg" data-toggle="modal" onClick={this.toggle}>Print</button>
                                                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                                        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                                                        <ModalBody>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                                        </ModalBody>
                                                        <ModalFooter>
                                                            <Button color="primary">Do Something</Button>
                                                            <Button color="secondary">Cancel</Button>
                                                        </ModalFooter>
                                                    </Modal>
                                                </td>
                                            </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
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