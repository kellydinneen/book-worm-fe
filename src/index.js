import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import registerSW from './serviceworker';
import { swSubscribe, notificationPermission } from './application.js'
require("dotenv").config();
let envVariables = process.env.VAPID_PUBLIC_KEY
const router = 
  <BrowserRouter> 
    <App /> 
  </BrowserRouter>

ReactDOM.render(router, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

registerSW();
console.log('key', envVariables)
swSubscribe();
notificationPermission();