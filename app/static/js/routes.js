import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

import Main from './components/Main';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Blog from './components/Blog';

export default (
    <Router history={browserHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Home}/>
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/blog' component={Blog} />
        <Route path='/contact' component={Contact} />
      </Route>
    </Router>
);