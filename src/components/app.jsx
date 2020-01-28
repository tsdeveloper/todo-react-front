import React from 'react';
import Todo from './todo/todo'
import About from './about/about'
const App = ({FontAwesomeIcon}) =>
(
  <div className='container'>
    <Todo />
    <About />
  </div>
)

export default App;
