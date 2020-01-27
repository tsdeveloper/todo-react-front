import React from 'react';
import About from './about/about';
import Todo from './todo/todo';
import Menu from '../template/menu';


const App = () =>
(
  <div className="container">
    

    <Menu />  
    <Todo />
    <About />

  </div>
)

export default App;
