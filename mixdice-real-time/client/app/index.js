import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/styles.scss';
import 'rc-tooltip/assets/bootstrap.css';
import Entry from 'app/Entry.jsx';
import apolloClient from './config/createApolloClient';

render(
  <ApolloProvider client={apolloClient}>
    <Router>
      <Entry />
    </Router>
  </ApolloProvider>,
  document.getElementById('app')
);
