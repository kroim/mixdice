import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from 'app/screens/App/App';
import Home from 'app/screens/Home/Home.jsx';
import { betsHistory, myBtcAmount, balance, clientSeed } from './dummyData';
import AdminPage from 'app/containers/admin';
import NotFound from 'app/screens/App/NotFound';
import AuthenticationPageModal from 'app/containers/authentication/AuthenticationPageModal.tsx';
import DepositModal from 'app/containers/deposit/DepositModal.tsx';
import WithdrawModal from 'app/containers/witdraw/WithdrawModal.tsx';
import SettingsModal from 'app/containers/settings/SettingsModal.tsx';
import TransactionsModal from 'app/containers/transactions/TransactionModal.tsx';
// import PasswordSettingModal from 'app/containers/settings/PasswordSettingModal.tsx';
// import EmailSettingModal from 'app/containers/settings/EmailSettingModal.tsx';
import { HomeProvider } from 'app/contexts/home';
import uniqid from 'uniqid';
import ProvablyFairModal from 'app/containers/provablyFair/ProvablyFairModal';
import Seed from 'app/utils/Seed';
import secureRoute from './SecureRoute';
import { withGetWallet } from 'app/providers/Deposit';
import Auth from 'app/utils/auth';

@withGetWallet
class Entry extends React.Component {
  state = {
    user: {},
    wallet: {
      balance: 0,
      address: ''
    }
  };
  componentDidMount() {}
  homeComponent = children => () => <Home>{children}</Home>;
  setUser = user => {
    this.setState({ user });
    if (!Auth.getToken()) {
      return;
    }
    this.props
      .onGetWallet({
        variables: {
          username: user.name
        }
      })
      .then(res => this.setState({ wallet: res.data.getWallet }));
  };
  getRoutes = user => {
    return [
      {
        path: '/login',
        component: this.homeComponent(
          <AuthenticationPageModal setUser={this.setUser} type={2} />
        )
      },
      {
        path: '/sign-up',
        component: this.homeComponent(
          <AuthenticationPageModal setUser={this.setUser} type={1} />
        )
      },
      {
        path: '/deposit',
        component: this.homeComponent(<DepositModal username={user.name} />)
      },
      {
        path: '/withdraw',
        component: this.homeComponent(<WithdrawModal balance={balance} />)
      },
      {
        path: '/settings',
        component: this.homeComponent(
          <SettingsModal email={user.email} username={user.name} />
        )
      },
      {
        path: '/transactions/bets',
        component: this.homeComponent(<TransactionsModal type={1} />)
      },
      {
        path: '/transactions/deposits',
        component: this.homeComponent(<TransactionsModal type={2} />)
      },
      {
        path: '/transactions/withdrawals',
        component: this.homeComponent(<TransactionsModal type={3} />)
      },
      // {
      //   path: '/set-password',
      //   component: this.homeComponent(
      //     <PasswordSettingModal username={user.name} />
      //   )
      // },
      // {
      //   path: '/set-email',
      //   component: this.homeComponent(
      //     <EmailSettingModal email={user.email} username={user.name} />
      //   )
      // },
      {
        path: '/provably-fair',
        component: this.homeComponent(
          <ProvablyFairModal clientSeed={Seed.get()} />
        )
      }
    ];
  };
  render() {
    const { user, wallet } = this.state;
    console.log(user);
    return (
      <HomeProvider
        value={{
          user,
          wallet,
          setUser: this.setUser
        }}
      >
        <App setUser={this.setUser}>
          <Switch>
            <Route exact path="/" component={this.homeComponent()} />
            {user.isAdmin && <Route path="/admin" component={AdminPage} />}
            {this.getRoutes(user).map(({ exact, path, component }) => (
              <Route
                key={uniqid()}
                exact={exact === undefined ? true : exact}
                path={path}
                component={component}
              />
            ))}
            <Route component={NotFound} />
          </Switch>
        </App>
      </HomeProvider>
    );
  }
}

export default Entry;
