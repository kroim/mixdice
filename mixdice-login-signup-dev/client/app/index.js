import React from 'react';
import { render } from 'react-dom';
import classNames from 'classnames';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './screens/App/App';
import NotFound from './screens/App/NotFound';
import Home from './screens/Home/Home';
import './styles/styles.scss';

render(
  <Router>
    <div className={classNames('content-wrapper')}>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </App>
    </div>
  </Router>,
  document.getElementById('app')
);
