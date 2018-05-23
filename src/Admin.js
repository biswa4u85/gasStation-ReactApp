import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import classNames from 'classnames';
import validator from 'validator';

class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            price: { value: '', isValid: true, message: '' }
        }
    }

    onChange = (e) => {
        var state = this.state;
        state[e.target.name].value = e.target.value;
        this.setState(state);
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.resetValidationStates();
        if (this.formIsValid()) {
            localStorage.setItem('galonsPrice', Number(this.state.price.value));
            this.resetStates()
        }
    }

    formIsValid = () => {
        var state = this.state;
        if (validator.isEmpty(state.price.value)) {
            state.price.isValid = false;
            state.price.message = 'Enter a Price';
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
        this.setState(state);
    }

    render() {
        var { price } = this.state;
        var priceGroupClass = classNames('form-group', { 'has-error': !price.isValid });

        return (
            <div className="contentCotainer">
                <div className="container contentBg">
                    <div className="row">
                        <div className="col-sm-12 col-12">
                            <Form onSubmit={this.onSubmit}>
                                <FormGroup className={priceGroupClass}>
                                    <Input className="defaultInput" type="text" name="price" value={price.value} onChange={this.onChange} autoFocus placeholder="Price" />
                                    <span className="alert alert-danger">{price.message}</span>
                                </FormGroup>
                                <Button type="submit" className="defaultButt" >Print</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Admin