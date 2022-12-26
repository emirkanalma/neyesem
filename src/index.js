import React from 'react';
import ReactDOM from 'react-dom/client';

import './assets/styles/style.css';


import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
  <Header/>
  <Main/>
  <Footer/>
  </>
  
);
