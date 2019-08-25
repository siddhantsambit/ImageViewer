import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './screens/login/Login.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Login />, document.getElementById('root'));

serviceWorker.unregister();
