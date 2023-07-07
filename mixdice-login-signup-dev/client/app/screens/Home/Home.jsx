import React, { useState } from 'react';
import BtcProfit from 'app/components/crypto/BtcProfit';
import ModeSwitch from './components/ModeSwitch';
import { Container } from 'reactstrap';
import AutoMode from './sections/AutoMode';
import ManualMode from './sections/ManualMode';
import BigNumber from 'bignumber.js';

export default () => {
  const [isAuto, setIsAuto] = useState(false);
  return (
    <Container>
      <ModeSwitch onChange={setIsAuto} />
      <BtcProfit displayLabel amount={BigNumber('0.00000043')} />
      {isAuto ? <AutoMode /> : <ManualMode />}
    </Container>
  );
};
