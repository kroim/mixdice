import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Header from 'app/components/header/Header';
import Footer from 'app/components/footer/Footer';
import HelpButtons from 'app/components/footer/HelpButtons.tsx';
import { betsHistory, chatProps } from 'app/dummyData';
import classNames from 'classnames';
import ChatPanel from 'app/components/chat/ChatPanel.tsx';
import { Auth } from 'app/utils';
import { HomeConsumer } from 'app/contexts/home';
import { isLg, isXLg } from 'app/utils/responsive';

const AUTH_URL = ['/login', '/sign-up'];

const languages = [
  {
    id: 1,
    flag: require('assets/svg/flags/united-kingdom.svg').default,
    label: 'EN'
  },
  {
    id: 2,
    flag: require('assets/svg/flags/poland.svg').default,
    label: 'PL'
  },
  {
    id: 3,
    flag: require('assets/svg/flags/china.svg').default,
    label: 'CN'
  },
  {
    id: 4,
    flag: require('assets/svg/flags/thailand.svg').default,
    label: 'TH'
  },
  {
    id: 5,
    flag: require('assets/svg/flags/thailand.svg').default,
    label: 'TH'
  },
  {
    id: 6,
    flag: require('assets/svg/flags/thailand.svg').default,
    label: 'TH'
  }
];
@withRouter
class App extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };
  state = {
    selectedLanguageId: 1,
    isChatOpened: isLg() || isXLg()
  };
  componentDidMount() {
    const auth = Auth.getToken();
    const { location } = this.props.history;
    if (!auth && !AUTH_URL.includes(location.pathname)) {
      this.props.history.push(AUTH_URL[0]);
    }

    this.props.setUser(Auth.getUser());
  }
  handleOnLanguageSelect = selectedLanguageId =>
    this.setState({ selectedLanguageId });
  handleOnClickChat = () =>
    this.setState(({ isChatOpened }) => ({ isChatOpened: !isChatOpened }));
  render() {
    const { selectedLanguageId, isChatOpened } = this.state;
    const { children } = this.props;
    return (
      <HomeConsumer>
        {({ user, wallet }) => (
          <>
            <div
              className={classNames('content-wrapper', {
                'content-wrapper--chat': isChatOpened
              })}
            >
              <Header
                balance={wallet.balance}
                email={user.email || user.name}
              />
              <HelpButtons
                isChatOpened={isChatOpened}
                onClickChat={this.handleOnClickChat}
              />
              <main>{children}</main>

              <Footer
                selectedLanguageId={selectedLanguageId}
                languages={languages}
                onLanguageSelect={this.handleOnLanguageSelect}
                mobileFooterProps={{
                  myBetsHistory: betsHistory,
                  allBetsHistory: betsHistory,
                  highRollersHistory: betsHistory
                }}
              />
            </div>
            <ChatPanel isVisible={isChatOpened} {...chatProps} />
          </>
        )}
      </HomeConsumer>
    );
  }
}

App.propTypes = {
  children: PropTypes.node.isRequired,
  balance: Header.propTypes.balance,
  user: PropTypes.shape({
    email: PropTypes.string.isRequired
  })
};

export default App;
