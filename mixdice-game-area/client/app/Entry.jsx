import React, { Component } from 'react';
import classNames from 'classnames';
import App from 'app/screens/App/App';
import { Route, Switch } from 'react-router-dom';
import Home from 'app/screens/Home/Home.jsx';
import { betsHistory, myBtcAmount, balance, user } from 'app/dummyData';
import NotFound from 'app/screens/App/NotFound';
import AuthenticationPageModal from 'app/containers/authentication/AuthenticationPageModal.tsx';
import DepositModal from 'app/containers/deposit/DepositModal.tsx';
import WithdrawModal from 'app/containers/witdraw/WithdrawModal.tsx';
import SettingsModal from 'app/containers/settings/SettingsModal.tsx';

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
      <App user={user} balance={balance}>
        <Switch>
          <Route exact path="/" component={this.homeComponent()} />
          <Route
            exact
            path="/authenticate"
            component={this.homeComponent(<AuthenticationPageModal />)}
          />
          <Route
            exact
            path="/deposit"
            component={this.homeComponent(<DepositModal />)}
          />
          <Route
            exact
            path="/withdraw"
            component={this.homeComponent(<WithdrawModal balance={balance} />)}
          />
          <Route
            exact
            path="/settings"
            component={this.homeComponent(<SettingsModal email={user.email} />)}
          />
          <Route component={NotFound} />
        </Switch>
      </App>
    );
  }
}

export default Entry;
