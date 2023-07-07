import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router';
import './styles/styles.scss';
import Entry from 'app/Entry.jsx';
import App from './../app/components/App/App';

render(
  <Router>
    <>
      {/* <App>
      <Switch> */}
      {/* <Route exact path="/" component={Home}/>
        <Route path="/helloworld" component={HelloWorld}/> }
       <Route component={NotFound}/> */}
      {/* </Switch>
    </App> */}

      <Entry />
    </>
  </Router>,
  document.getElementById('app')
);
