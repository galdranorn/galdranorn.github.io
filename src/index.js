import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';
import AOS from 'aos';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers/reducer';

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import 'aos/dist/aos.css';

import * as serviceWorker from './serviceWorker';

const store = createStore(reducer);

AOS.init({
    duration: 1200,
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

$(function() {
    $(window).scroll(function () {
       if ($(this).scrollTop() > 500) {
          $('#menu, #lang, #hamburger').addClass('changeColor')
       }
       if ($(this).scrollTop() < 500) {
          $('#menu, #lang, #hamburger').removeClass('changeColor')
       }
    });
 });

// If you want your app to work offline and load faster, you can change unregister() to register() below. 
// Note this comes with some pitfalls. Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
