import React, { Component } from 'react';
import classNames from 'classnames';
import App from 'app/screens/App/App';
import { Route, Switch } from 'react-router-dom';
import Home from 'app/screens/Home/Home.jsx';
import { betsHistory, myBtcAmount } from 'app/dummyData';
import NotFound from 'app/screens/App/NotFound';
import BaseModal from 'app/components/BaseModal.jsx';

class Entry extends Component {
  homeComponent = children => () => (
    <Home
      myBtcAmount={myBtcAmount}
      myBetsHistory={betsHistory}
      allBetsHistory={betsHistory}
      highRollersHistory={betsHistory}
    >
      {children}
    </Home>
  );
  render() {
    return (
      <div className={classNames('content-wrapper')}>
        <App>
          <Switch>
            <Route exact path="/" component={this.homeComponent()} />
            <Route
              exact
              path="/authenticate"
              component={this.homeComponent(
                <BaseModal className="base-modal" />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </App>
      </div>
    );
  }
}

export default Entry;
