import React, { Component } from 'react';
import Cashier from '../../../public/assets/svg/cashier.svg';
import Close from '../../../public/assets/svg/close.svg';
import '../../styles/components/modalWithdraw.scss';
import ModalWithdrawContent from './ModalWithdrawContent';

class ModalWithdraw extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="backRectangle"> </div>
        <div className="main_rectangle">
          <div className="rectangle_wthdrw">
            <div className="header_withdraw">
              <Cashier className="image_WithdrawCashier" />
              <span className="header_span">Withdraw</span>
              <Close className="close" onClick={() => this.props.cloSe()} />
            </div>
            <ModalWithdrawContent />
          </div>
        </div>
      </>
    );
  }
}

export default ModalWithdraw;
