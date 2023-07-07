import React, { PureComponent } from 'react';
import Modal from 'app/components/Modal';
import Deposit from 'app/containers/deposit/Deposit';
import Wallet from 'assets/svg/wallet.svg';
import { Redirect } from 'react-router-dom';
interface Props {}
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
    if (!modalOpened) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Modal
          icon={<Wallet />}
          title="Deposit"
          isOpened={modalOpened}
          onClose={this.handleModalClose}
        >
          <Deposit address={'KSJDKdksfj;asdifoaisdufoiasduiofuasd'} />
        </Modal>
      </div>
    );
  }
}

export default DepositModal;
