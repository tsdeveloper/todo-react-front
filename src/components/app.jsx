import React from 'react';
import Todo from './todo/todo'
import About from './about/about'
import Routes from './routes';
import Menu from '../template/menu';



const App = ({FontAwesomeIcon}) =>
(
  <div className='container'>
      <Menu />
      <Routes />
  </div>
)

export default App;
