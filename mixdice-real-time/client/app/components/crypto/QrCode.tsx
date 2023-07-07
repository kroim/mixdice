import React, { useRef, useEffect } from 'react';
import Btc from 'assets/svg/crypto/btc.svg';
import classNames from 'classnames';
import QRCode from 'qrcode';

interface QrCodeProps {
  children: string;
}

const QrCode: React.FC<QrCodeProps> = ({ children }) => {
  const canvasEl = useRef(null);
  useEffect(() => {
    QRCode.toCanvas(canvasEl.current, children, {
      scale: 10,
      qzone: 0,
      width: 204
    });
  }, []);

  return (
    <div className={classNames('qr-code')}>
      <canvas ref={canvasEl} />
    </div>
  );
};

export default QrCode;
