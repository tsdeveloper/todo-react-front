
import './assets/main.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
library.add(faEnvelope, faKey);
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const title = 'React 16 with Webpack and Babel 7';


ReactDOM.render(
  <App title={title} FontAwesomeIcon={FontAwesomeIcon} />,
  document.getElementById('app')
);
module.hot.accept();
