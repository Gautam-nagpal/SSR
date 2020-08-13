import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "./assets/scss/index.scss"
import Routes from './routes';
import configureStore from './store';
import { Provider } from "react-redux";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = configureStore(preloadedState);

if (module.hot) {
  module.hot.accept();
}

ReactDOM.hydrate(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
