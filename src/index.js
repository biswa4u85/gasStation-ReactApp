import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import Nav from './Nav';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Nav />, document.getElementById('root'));
registerServiceWorker();