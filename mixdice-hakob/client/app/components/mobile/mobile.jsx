import React, { Component } from 'react';
import Modal from '../modal/modal';
import Bets from '../../../public/assets/svg/bets.svg';
import Cashier from '../../../public/assets/svg/cashier.svg';
import Chat from '../../../public/assets/svg/chat.svg';
import Support from '../../../public/assets/svg/support.svg';
import Close from '../../../public/assets/svg/close.svg';
import '../../styles/components/mobile.scss';

import ModalWithdrawContent from '../modal/ModalWithdrawContent';
import ModalContent from '../modal/modalContent';
import { styles } from 'ansi-colors';

class Mobile extends Component {
  state = {
    showDeposit: true,
    showWithdraw: false
  };

  showDeposit = () => {
    this.setState({
      showDeposit: true,
      showWithdraw: false
    });
  };

  showWithdraw = () => {
    this.setState({
      showDeposit: false,
      showWithdraw: true
    });
  };

  render() {
    return (
      <div className="mobile">
        <div className="header">
          <Cashier className="image_Cashier" />
          <span className="span_Cashier">Cashier</span>
          <Close
            onClick={() => this.props.close(false)}
            className="button_Close"
          />
        </div>
        <div className="depWith">
          <p
            className="deposit"
            className={this.state.showDeposit ? 'depWithBlue' : 'depWithGrey'}
            onClick={this.showDeposit}
          >
            Deposit
          </p>
          <p
            className="withdraw"
            className={this.state.showWithdraw ? 'depWithBlue' : 'depWithGrey'}
            onClick={this.showWithdraw}
          >
            Withdraw
          </p>
        </div>
        <div className="mainCont">
          {this.state.showDeposit ? <ModalContent /> : <ModalWithdrawContent />}
        </div>
      </div>
    );
  }
}

export default Mobile;
