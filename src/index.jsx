
import './assets/main.scss';
import { library } from '@fortawesome/fontawesome-svg-core';



import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';


const title = 'React 16 with Webpack and Babel 7';


ReactDOM.render(
  <App title={title} />,
  document.getElementById('app')
);
module.hot.accept();
