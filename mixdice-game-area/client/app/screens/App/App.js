import React from 'react';
import PropTypes from 'prop-types';
import Header from 'app/components/header/Header';
import Footer from 'app/components/footer/Footer';
import HelpButtons from 'app/components/footer/HelpButtons.tsx';
import { betsHistory, chatProps } from 'app/dummyData';
import classNames from 'classnames';
import ChatPanel from 'app/components/chat/ChatPanel.tsx';

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

class App extends React.Component {
  static propTypes = {
    children: PropTypes.node
  };
  state = {
    selectedLanguageId: 1,
    isChatOpened: false
  };
  handleOnLanguageSelect = selectedLanguageId =>
    this.setState({ selectedLanguageId });
  handleOnClickChat = () =>
    this.setState(({ isChatOpened }) => ({ isChatOpened: !isChatOpened }));
  render() {
    const { selectedLanguageId, isChatOpened } = this.state;
    const { children, balance, user } = this.props;
    return (
      <>
        <div
          className={classNames('content-wrapper', {
            'content-wrapper--chat': isChatOpened
          })}
        >
          <Header balance={balance} email={user.email} />
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
