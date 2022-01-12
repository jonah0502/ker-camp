import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"; 

import Contact from './components/contact/Contact.js';
import About from './components/about/About';

ReactDOM.render(
  <Router>
  <Routes>
    <Route path="/" exact element={<App/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/about" element={<About/>} />
 </Routes>
 </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
