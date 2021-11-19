import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Scrollbar } from "react-scrollbars-custom";
import App from './App';
import './scss/index.scss';

const scrollSize = {
  width: '100%', 
  height: '100vh'
};

ReactDOM.render(
  <BrowserRouter>
    <Scrollbar style={scrollSize} thumbYProps={{style: {"background": "#FFBE0D" }}}>
    <App />
    </Scrollbar>
  </BrowserRouter>,
  document.getElementById('app')
);
