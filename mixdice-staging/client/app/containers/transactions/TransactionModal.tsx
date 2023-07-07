import React, { PureComponent } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import classNames from 'classnames';
import TransactionTabs from 'app/containers/transactions/TransactionTabs';
import Modal from 'app/components/Modal';

interface Props {
  history: any;
  type: number;
}

type State = Readonly<{
  modalOpened: boolean;
}>;

class TransactionModal extends PureComponent<Props, State> {
  readonly state: State = {
    modalOpened: true
  };
  handleModalClose = () => this.setState({ modalOpened: false });
  render() {
    const { modalOpened } = this.state;
    const { type } = this.props;
    if (!modalOpened) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Modal
          className={classNames('transaction-modal modal--no-collapse')}
          isOpened={modalOpened}
          onClose={this.handleModalClose}
          title="Transactions"
        >
          <TransactionTabs selectedTab={type} />
        </Modal>
      </div>
    );
  }
}

export default TransactionModal;
