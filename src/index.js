import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Data from "./testData.json"
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App Data={Data} />
  </React.StrictMode>,
  document.getElementById('root')
);

