import React, { Component } from 'react';
import BitCoin from '../../../public/assets/svg/bitCoin.svg';
import '../../styles/components/modalWithdraw.scss';

class ModalWithdrawContent extends Component {
  state = {
    toggle: false
  };
  toggleFn = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };

  render() {
    return (
      <div className="rectangle">
        <span className="titlesTexts">Select Coin</span>

        <div className="border_wthdrw">
          <BitCoin className="imgBitCoin_wthdrw imgbitcoin_mobile" />
          <span>0.00030530</span>
        </div>
        {/* {this.state.toggle&&<div className="dropdown_wthdrw">
                    <div className="border_drpdw">ghaghg</div>
                    <div>dusush</div>
                    <div>jdshshj</div>
                </div>} */}

        {/* <select className="select">
                    <option>0.00030530</option>
                    <option>0.00030530</option>
                </select> */}
        <p className="titlesTexts">Bitcoin Address</p>
        <input
          type="text"
          placeholder="Enter address"
          className="input_wthdrw"
        ></input>
        <p className="titlesTexts">Enter Amount (min of 0.002 BTC)</p>
        <input
          type="text"
          placeholder="Enter amount"
          className="input_wthdrw"
        ></input>
        <p className="titlesTexts">Instructions:</p>
        <p>
          1. Please double check the external address before submission of the
          withdraw request.
        </p>
        <p>
          2. Your withdrawal will also have 0.000005 BTC subtracted to cover the
          transactoin fee.
        </p>
        <div className="footer_wthdrw">
          <button className="btn_wthdrw">Withdraw</button>
          <a href="#" className="a_wthdrw">
            Confirm your Email to Withdraw
          </a>
        </div>
      </div>
    );
  }
}

export default ModalWithdrawContent;
