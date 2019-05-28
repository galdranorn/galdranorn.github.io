import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/reducer';

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

import * as serviceWorker from './serviceWorker';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

$(function() {
    $(window).scroll(function () {
       if ($(this).scrollTop() > 500) {
          $('#menu, #lang').addClass('changeColor')
       }
       if ($(this).scrollTop() < 500) {
          $('#menu, #lang').removeClass('changeColor')
       }
    });
 });

// If you want your app to work offline and load faster, you can change unregister() to register() below. 
// Note this comes with some pitfalls. Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
