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

const wAddress =
  'KSJDKdksfj;asdifoaisdufoiasduiofuasdsdfasdfasdffgdghdfghuosdpfigu9123';

export default class ModalContent extends Component {
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
        <span className="Wallet-Address">Wallet Address</span>

        {this.state.showCopy && (
          <div className="copeToClipboardRectangle">
            <div className="parentTick">
              <Tick />

              <span className=" Copied-to-Clipboard">Copied to Clipboard</span>
            </div>
            <p className="Copied-to-Clipboard-buttom">{this.state.value}</p>
          </div>
        )}

        <div className="Rectangle-Copy-3">
          <BitCoin className="imgBitCoin imgbitcoin_mobile" />
          <span className="walletAdress">{this.state.value}</span>
          <CopyToClipboard
            text={this.state.value}
            onCopy={() => {
              this.setState({ copied: true });
              // this.setState({value:wAddress})
            }}
          >
            <div className="Rectangle-Copy-4" onClick={this.showCopyFn}>
              <div className="Copy"> Copy </div>
            </div>
          </CopyToClipboard>
        </div>

        <div className="parentminRectangle">
          <div className="minRectangle">
            <QRCode
              value={this.state.value}
              size={160}
              logo="assets/svg/qrlogo.svg"
              logoWidth={50}
              logoHeight={50}
            />
          </div>
        </div>
        <p className="Instructions">Instructions:</p>
        <p className="Deposits-are-credite">
          Deposits are credited with 0 confirmations. All deposits must have 3
          confirmations to make a withdraw.
        </p>
      </div>
    );
  }
}
