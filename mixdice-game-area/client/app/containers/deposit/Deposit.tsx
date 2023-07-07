import React from 'react';
import classNames from 'classnames';
import CryptoAddressInput from 'app/components/crypto/CryptoAddressInput';
import QrCode from 'app/components/crypto/QrCode';

interface DepositProps {
  address: string;
}

const Deposit: React.FC<DepositProps> = ({ address }) => {
  return (
    <>
      <CryptoAddressInput address={address} />
      <QrCode>{address}</QrCode>
      <h6 className={classNames('font-weight-bold')}>Instructions:</h6>
      <p className={classNames('text-center')}>
        Deposits are credited with 0 confirmations. All deposits must have 3
        confirmations to make a withdraw.
      </p>
    </>
  );
};

export default Deposit;
