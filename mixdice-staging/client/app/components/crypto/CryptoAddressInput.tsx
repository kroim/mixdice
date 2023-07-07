import React, { useState, useRef } from 'react';
import Btc from 'assets/svg/crypto/btc.svg';
import classNames from 'classnames';
import CopiedToClipboardMessage from 'app/components/crypto/CopiedToClipboardMessage';

interface CryptoAddressInputProps {
  address: string;
  label?: string;
}

const CryptoAddressInput: React.FC<CryptoAddressInputProps> = ({
  address,
  label = 'Wallet address'
}) => {
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
  const inputEl = useRef(null);
  function handleOnCopy() {
    setCopiedToClipboard(true);
    const input = inputEl.current;
    input.select();
    document.execCommand('copy');
    setTimeout(() => {
      setCopiedToClipboard(false);
    }, 3000);
  }
  return (
    <div className={classNames('crypto-address-input')}>
      <CopiedToClipboardMessage visible={copiedToClipboard}>
        {address}
      </CopiedToClipboardMessage>
      <div className={classNames('crypto-address-input__label')}>{label}</div>
      <div className={classNames('crypto-address-input__container')}>
        <div className={classNames('crypto-address-input__icon')}>
          <Btc />
        </div>
        <div className={classNames('crypto-address-input__input-container')}>
          <input
            ref={inputEl}
            value={address}
            readOnly
            className={classNames(
              'crypto-address-input__input-container__input'
            )}
          />
        </div>
        <div
          onClick={handleOnCopy}
          className={classNames('crypto-address-input__button')}
        >
          Copy
        </div>
      </div>
    </div>
  );
};

export default CryptoAddressInput;
