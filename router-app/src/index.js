import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom'

// This demo uses a HashRouter instead of BrowserRouter
// because there is no server to match URLs
ReactDOM.render((
    <HashRouter>
        <App />
    </HashRouter>
), document.getElementById('root'))
