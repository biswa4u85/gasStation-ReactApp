import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/main.css';
import App from './App';
import App2 from './App2';
import App3 from './App3';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
<BrowserRouter>
    <App />,
    <App2 />,
    <App3 />,
</BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();