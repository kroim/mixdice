import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/styles.scss';
import 'rc-tooltip/assets/bootstrap.css';
import Entry from 'app/Entry.jsx';
render(
  <Router>
    <Entry />
  </Router>,
  document.getElementById('app')
);
