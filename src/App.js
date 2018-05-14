import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Main'
import App2 from './App2'
import App3 from './App3'


class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Main} />
                    <Route exact path='/app2' component={App2} />
                    <Route exact path='/app3' component={App3} />
                </Switch>
            </Router>
        );
    }
}

export default App;