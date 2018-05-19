import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Popover, Label, PopoverHeader, PopoverBody } from 'reactstrap';
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
            popoverOpen: false
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
            popoverOpen: !this.state.popoverOpen
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
                                            this.props.allPostsQuery.listGalons.items.map((item, i) =>
                                                <tr key={i}>
                                                    <td>{new Date(item.date).toLocaleDateString()}</td>
                                                    <td>{item.invoice}</td>
                                                    <td>{item.galons}</td>
                                                    <td>{item.price}</td>
                                                    <td>{item.total}</td>
                                                    <td><button id={'Popover' + i} className="buttBg" data-toggle="modal" onClick={this.toggle}>Print</button>
                                                        <Popover placement="bottom" isOpen={this.state.popoverOpen} target={'Popover' + i} toggle={this.toggle}>
                                                        <Form>
                                                            <FormGroup>
                                                                <Input className="defaultInput" type="text" name="galons" value={this.state.galons} onChange={this.handleChange.bind(this)} placeholder="Name" />
                                                            </FormGroup>                                                            
                                                            <FormGroup check>
                                                            <Label check><Input type="checkbox" />{' '}Fiscal Invoice</Label>
                                                            </FormGroup> 
                                                            <FormGroup check>
                                                            <Label check><Input type="checkbox" />{' '}If</Label>
                                                            </FormGroup>
                                                            <FormGroup>
                                                                <Input className="defaultInput" type="text" name="galons" value={this.state.galons} onChange={this.handleChange.bind(this)} placeholder="RNC" />
                                                            </FormGroup> 
                                                            <FormGroup>
                                                                <Label for="exampleSelect">Type of business</Label>
                                                                <Input type="select" name="select" id="exampleSelect">
                                                                    <option>Private</option>
                                                                    <option>Government</option>
                                                                    <option>NGO</option>                                                                    
                                                                </Input>
                                                            </FormGroup>            
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