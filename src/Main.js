import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { withRouter } from 'react-router-dom'

import uuidV4 from 'uuid/v4'
import { graphql, compose } from 'react-apollo'
import { ALL_DATA_QUERY } from './queries/query'
import { CREATE_NEW } from './mutations/mutation'

class Main extends Component {

    componentWillReceiveProps(nextProps) {
        if (this.props.location.key !== nextProps.location.key) {
            this.props.allPostsQuery.refetch()
        }
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
                                <Button onClick={this.handleDelete} className="defaultButt">Save</Button>
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
                            <table className="table">
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
                                    {
                                        this.props.allPostsQuery.listRecipes.items.map((item, i) => <tr key={i}>
                                            <td>05-06-2018</td>
                                            <td>#01</td>
                                            <td>{item.name}</td>
                                            <td>xxxxxx</td>
                                            <td>000000</td>
                                            <td><button className="buttBg">Button</button></td>
                                        </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );


    }

    handleDelete = async () => {
        await this.props.createNew({ variables: { id: uuidV4(), name: 'om2', ingredients: [11, 22, 33], instructions: [1, 2, 3] } })
        this.props.allPostsQuery.refetch()
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

const DetailPageWithDelete = graphql(CREATE_NEW)(DetailPageWithGraphQL)
export default withRouter(DetailPageWithDelete)