import React, { PureComponent } from 'react';
import Modal from 'app/components/Modal';
import WithdrawIcon from 'assets/svg/withdraw.svg';
import { Redirect } from 'react-router-dom';
import Withdraw from 'app/containers/witdraw/Withdraw';
import IBalance from 'interfaces/BalanceInterface';
interface Props {
  balance: IBalance[];
}
type State = Readonly<{
  modalOpened: boolean;
}>;
class DepositModal extends PureComponent<Props, State> {
  readonly state: State = {
    modalOpened: true
  };
  handleModalClose = () => this.setState({ modalOpened: false });

  render() {
    const { modalOpened } = this.state;
    const { balance } = this.props;
    if (!modalOpened) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Modal
          icon={<WithdrawIcon />}
          title="Withdraw"
          isOpened={modalOpened}
          onClose={this.handleModalClose}
        >
          <Withdraw balance={balance} />
        </Modal>
      </div>
    );
  }
}

export default DepositModal;
