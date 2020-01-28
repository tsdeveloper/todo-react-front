import React from 'react';
import { Router, Route, Redirect } from 'react-router';
import Todo from './todo/todo';
import About from './about/about';
import { createHashHistory } from 'history';
const hashHistory =  createHashHistory();


export default props => (
    <Router history={hashHistory} >
        <Route path='/todos' component={Todo} />
        <Route path='/about' component={About} />
        <Redirect path='*' to='/' />
    </Router>
)

