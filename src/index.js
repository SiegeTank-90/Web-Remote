import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Data from "./testData.json"
import App from './App';


ReactDOM.render(
  <BrowserRouter>
      <App Data={Data} />
  </BrowserRouter>,
  document.getElementById('root')
);

