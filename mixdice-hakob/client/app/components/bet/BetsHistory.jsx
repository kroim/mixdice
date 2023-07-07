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

const BetId = ({ children }) => (
  <div className={classNames('bets-history-table__bet-id')}>{children}</div>
);

BetId.propTypes = {
  children: PropTypes.node.isRequired
};

class BetsHistory extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <Table
          columns={listOfColumns}
          data={history}
          renderRow={e => [
            <BetId>{e.betId}</BetId>,
            formatDateToStandard(e.time),
            <BtcAmount size={'small'} amount={e.wagered} />,
            e.payout.toFixed(2) + 'x',
            '>' + e.game,
            e.roll,
            <BtcAmount size={'small'} amount={e.profit} isTypeProfit />
          ]}
        />
      </div>
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
  ).isRequired
};
export default BetsHistory;
