import React from 'react';
import PropTypes from 'prop-types';
import BigNumber from 'bignumber.js';
import Table from 'app/components/form/table/Table';
import BtcAmount from 'app/components/crypto/BtcAmount';
import { formatDateToStandard } from 'app/utils/date';
import classNames from 'classnames';
import { withBetHistory } from 'app/providers/Bet';

const listOfColumns = [
  'Bet ID',
  'Time',
  'Wagered',
  'Payout',
  'Game',
  'Roll',
  'Profit'
];

const listOfColumnsSmall = ['Bet ID', 'Payout', 'Profit'];
const BetId = ({ children }) => (
  <div className={classNames('bets-history-table__bet-id')}>{children}</div>
);

BetId.propTypes = {
  children: PropTypes.node.isRequired
};
@withBetHistory
class BetsHistory extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        createdAt: PropTypes.instanceOf(Date).isRequired,
        wagered: PropTypes.instanceOf(BigNumber).isRequired,
        isUnder: PropTypes.bool.isRequired,
        payout: PropTypes.number.isRequired,
        game: PropTypes.number.isRequired,
        roll: PropTypes.number.isRequired,
        profit: PropTypes.instanceOf(BigNumber).isRequired
      })
    ),
    isSmall: PropTypes.bool
  };
  static defaultProps = {
    isSmall: false,
    isLoading: false
  };
  componentDidMount() {
    const { subscribeToMore } = this.props;
    subscribeToMore();
  }

  renderNormal = e => [
    <BetId>{e._id}</BetId>,
    formatDateToStandard(e.time),
    <BtcAmount size={'small'} amount={e.wagered} />,
    e.payout.toFixed(2) + 'x',
    `${e.isUnder ? '<' : '>'} ${e.game}`,
    e.roll,
    <BtcAmount size={'small'} amount={e.profit} isTypeProfit />
  ];
  renderSmall = e => [
    e._id,
    e.payout.toFixed(2) + 'x',
    <BtcAmount size={'small'} amount={e.profit} isTypeProfit />
  ];
  render() {
    const { history, isSmall } = this.props;
    return (
      <Table
        animated
        className={classNames('bets-history-table', {
          'table--no-head-bg': isSmall
        })}
        columns={isSmall ? listOfColumnsSmall : listOfColumns}
        data={history}
        noDataText="Place a bet to start winning!"
        renderRow={isSmall ? this.renderSmall : this.renderNormal}
      />
    );
  }
}
export default BetsHistory;
