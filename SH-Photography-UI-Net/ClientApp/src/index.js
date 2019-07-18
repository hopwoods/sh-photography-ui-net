import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './_helpers';
import { App } from './App/index.js';
import 'bootstrap'; // Import Bootstraps JS Scripts
import './global.css';
require('dotenv').config();

// setup fake backend
//import { configureFakeBackend } from './_helpers';
//configureFakeBackend();

ReactDOM.render(
  <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('app')
);