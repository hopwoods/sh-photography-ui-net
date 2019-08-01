import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './_helpers';
import { App } from './App/index.js';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap'; // Import Bootstraps JS Scripts
import './global.css';

// setup fake backend
//import { configureFakeBackend } from './_helpers';
//configureFakeBackend();

registerServiceWorker();

ReactDOM.render(
  <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('app')
);