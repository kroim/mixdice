import React, { Component } from 'react';
import Wallet from '../../../public/assets/svg/wallet.svg';
import Tick from '../../../public/assets/svg/tick.svg';
import BitCoin from '../../../public/assets/svg/bitCoin.svg';
import Close from '../../../public/assets/svg/close.svg';
import '../../styles/components/modal.scss';
import ReactDOM from 'react-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import QRCode from 'qrcode-react';
import Logo from '../../../public/assets/svg/logo.svg';
import ModalContent from './modalContent';

const wAddress =
  'KSJDKdksfj;asdifoaisdufoiasduiofuasdsdfasdfasdffgdghdfghuosdpfigu9123';

export default class Modal extends Component {
  state = {
    showCopy: false,
    value: wAddress,
    copied: false
  };
  showCopyFn = () => {
    this.setState({
      showCopy: true
    });
    setTimeout(() => {
      this.setState({
        showCopy: false
      });
    }, 2000);
  };

  render() {
    return (
      <div>
        <div className="backRectangle"> </div>
        <div className="parentRectangle">
          <div className="Rectangle">
            <div className="submenu">
              <Wallet className="imgWallet" />
              <span className="Deposit">Deposit</span>
              <Close className="close" onClick={() => this.props.close()} />
            </div>
            <ModalContent />
          </div>
        </div>
      </div>
    );
  }
}
