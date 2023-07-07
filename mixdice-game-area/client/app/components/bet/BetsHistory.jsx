import React from 'react';
import PropTypes from 'prop-types';
import BigNumber from 'bignumber.js';
import Table from 'app/components/form/table/Table';
import BtcAmount from 'app/components/crypto/BtcAmount';
import { formatDateToStandard } from 'app/utils/date';
import classNames from 'classnames';

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

class BetsHistory extends React.Component {
  renderNormal = e => [
    <BetId>{e.betId}</BetId>,
    formatDateToStandard(e.time),
    <BtcAmount size={'small'} amount={e.wagered} />,
    e.payout.toFixed(2) + 'x',
    '>' + e.game,
    e.roll,
    <BtcAmount size={'small'} amount={e.profit} isTypeProfit />
  ];
  renderSmall = e => [
    e.betId,
    e.payout.toFixed(2) + 'x',
    <BtcAmount size={'small'} amount={e.profit} isTypeProfit />
  ];
  render() {
    const { history, isSmall } = this.props;
    return (
      <Table
        className={classNames({ 'table--no-head-bg': isSmall })}
        columns={isSmall ? listOfColumnsSmall : listOfColumns}
        data={history}
        renderRow={isSmall ? this.renderSmall : this.renderNormal}
      />
    );
  }
}

BetsHistory.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      betId: PropTypes.string.isRequired,
      time: PropTypes.instanceOf(Date).isRequired,
      wagered: PropTypes.instanceOf(BigNumber).isRequired,
      payout: PropTypes.number.isRequired,
      game: PropTypes.number.isRequired,
      roll: PropTypes.number.isRequired,
      profit: PropTypes.instanceOf(BigNumber).isRequired
    })
  ).isRequired,
  isSmall: PropTypes.bool
};

BetsHistory.defaultProps = {
  isSmall: false
};
export default BetsHistory;
