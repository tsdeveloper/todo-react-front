import React from 'react';
import { Router, Route, Switch, BrowserRouter, Redirect  } from 'react-router-dom';
import {createBrowserHistory} from "history";

import Todo from './todo/todo';
import About from './about/about';
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 *
 */
const history = createBrowserHistory();





export default function() {
    return(
        <Router history={history} >        
            <Switch>
                <Route exact path='/todos' component={Todo} />
                <Route exact path='/about' component={About} />
                <Redirect path="*" to="/" />
            </Switch>
        </Router>
    )
}

  