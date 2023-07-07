import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LeftSidebar from './LeftSidebar';
import Topbar from './Topbar';
import RightSidebar from './RightSidebar';
import Footer from './Footer';
import DashboardHome from './home';
import DepositsHistory from './transactions/DepositsHistory';
import './scss/app.scss';

export default class AdminPage extends React.Component {
  render() {
    console.log(this.props.match.path);
    return (
      <>
        <div id="wrapper">
          <Topbar />

          <LeftSidebar />

          <div className="content-page">
            <Switch>
              <Route
                path={`${this.props.match.path}/deposits`}
                component={DepositsHistory}
              />
              <Route
                path={`${this.props.match.path}/`}
                component={DashboardHome}
              />
            </Switch>
          </div>
          <Footer />
        </div>

        <RightSidebar />
      </>
    );
  }
}
