import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import BigNumber from 'bignumber.js';
import moment from 'moment';
import Table from 'app/components/form/table/Table';
import BtcAmount from 'app/components/crypto/BtcAmount';
import { withDepositHistory } from 'app/providers/Deposit';

const listOfColumns = ['Hash', 'Amount', 'Status', 'Time'];

@withDepositHistory
class DepositsHistory extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    deposits: PropTypes.arrayOf(
      PropTypes.shape({
        hash: PropTypes.string.isRequired,
        amount: PropTypes.instanceOf(BigNumber).isRequired,
        status: PropTypes.bool.isRequired,
        time: PropTypes.instanceOf(Date).isRequired
      })
    )
  };
  static defaultProps = {
    isLoading: false
  };
  componentDidMount() {
    const { subscribeToMore } = this.props;
    subscribeToMore();
  }
  renderRow = e => [
    e.hash,
    <BtcAmount size="small" amount={e.amount} />,
    `${e.status ? 'Confirmed' : 'Unconfirmed'}`,
    `${moment.unix(e.time / 1000).format('YYYY-MM-DD HH:MM:SS')}`
  ];
  render() {
    const { deposits } = this.props;
    return (
      <Table
        animated
        columns={listOfColumns}
        data={deposits}
        noDataText="No Deposit."
        renderRow={this.renderRow}
      />
    );
  }
}

export default DepositsHistory;
