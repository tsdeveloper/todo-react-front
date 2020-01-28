import React from 'react';
import Menu from '../template/menu';
import Routes from '../components/routes';
import {Router, Switch, Route} from 'react-router-dom';
import { createBrowserHistory } from 'history';

const App = ({FontAwesomeIcon}) =>
(
  <div className='container'>
    <Menu />
    <Routes />
  </div>
)

export default App;
