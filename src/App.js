import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from './Nav'
import Main from './Main'
import Ventas from './Ventas'
import Admin from './Admin'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Main} />
                        <Route exact path='/ventas' component={Ventas} />
                        <Route exact path='/admin' component={Admin} />
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;