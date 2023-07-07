import React from 'react';

import PropTypes from 'prop-types';
import BigNumber from 'bignumber.js';
import moment from 'moment';
import Table from 'app/components/form/table/Table';
import BtcAmount from 'app/components/crypto/BtcAmount';
import { withAllDepositsHistory } from 'app/providers/Deposit';

const listOfColumns = [
  'ID',
  'Username',
  'Date',
  'Amount',
  'Currency',
  'Address',
  'TxID',
  'Confirmations'
];

@withAllDepositsHistory
class DepositsHistory extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    deposits: PropTypes.arrayOf(
      PropTypes.shape({
        hash: PropTypes.string.isRequired,
        amount: PropTypes.instanceOf(BigNumber).isRequired,
        confirmations: PropTypes.number.isRequired,
        time: PropTypes.instanceOf(Date).isRequired,
        username: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
      })
    )
  };
  static defaultProps = {
    isLoading: false
  };
  state = {
    deposits: []
  };
  componentDidMount() {
    const { subscribeToMore } = this.props;
    subscribeToMore();
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.deposits &&
      prevProps.deposits &&
      this.props.deposits.length !== prevProps.deposits.length
    ) {
      this.setState({ deposits: this.props.deposits });
    }
  }
  renderRow = e => [
    e.id,
    e.username,
    `${moment.unix(e.time / 1000).format('YYYY-MM-DD')}`,
    e.amount,
    e.currency,
    e.address,
    e.hash,
    e.confirmations
  ];
  render() {
    const { deposits } = this.props;
    return (
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box">
                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <a
                        href="javascript: void(0);"
                        onClick={() => this.props.history.push('/admin')}
                      >
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active">Transactions</li>
                  </ol>
                </div>
                <h4 className="page-title">Deposits</h4>
              </div>
            </div>
          </div>
          <Table
            animated
            columns={listOfColumns}
            data={deposits}
            noDataText="No Deposit."
            renderRow={this.renderRow}
          />
        </div>
      </div>
    );
  }
}

export default DepositsHistory;
