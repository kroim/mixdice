import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';

import Modal from 'app/components/Modal';
import Deposit from 'app/containers/deposit/Deposit';
import Wallet from 'assets/svg/wallet.svg';
import { withGetWallet } from 'app/providers/Deposit';
import { HomeConsumer } from 'app/contexts/home';

interface Props {
  onGetWallet: (object) => any;
}
type State = Readonly<{
  modalOpened: boolean;
}>;
@withGetWallet
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
      <HomeConsumer>
        {({ wallet }) => (
          <div>
            <Modal
              icon={<Wallet />}
              title="Deposit"
              isOpened={modalOpened}
              onClose={this.handleModalClose}
            >
              <Deposit address={wallet.address} />
            </Modal>
          </div>
        )}
      </HomeConsumer>
    );
  }
}

export default DepositModal;
