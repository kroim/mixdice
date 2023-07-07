import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import BetsHistory from 'app/components/bet/BetsHistory.jsx';
import TabbedNavigation from 'app/components/form/tabs/TabbedNavigation';
import { withMyBetPlaced, withBetHistory } from 'app/providers/Bet';
import { withApollo, subs, Query, Subscription } from 'react-apollo';
import { BET_HISTORY, MY_BETS_SUBSCRIPTION } from 'app/providers/gql/bet';
import normalizeBet from 'app/utils/normalizeBet';

class BetsHistoryTabs extends React.Component {
  state = {
    loading: false
  };
  static propTypes = {
    loading: PropTypes.bool
  };
  static defaultProps = {
    loading: false
  };
  render() {
    const { loading } = this.props;
    if (loading) return null;
    return (
      <TabbedNavigation
        navClassName={classnames('bets-history__nav-tabs')}
        tabs={[
          {
            id: 0,
            title: 'My Bets',
            content: <BetsHistory isFromMe />
          },
          {
            id: 1,
            title: 'All Bets',
            content: <BetsHistory />
          },
          {
            id: 2,
            title: 'High Rollers',
            content: <BetsHistory />
          }
        ]}
      />
    );
  }
}

export default BetsHistoryTabs;
