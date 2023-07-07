import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BtcProfit from 'app/components/crypto/BtcProfit';
import ModeSwitch from './components/ModeSwitch';
import AutoMode from './sections/AutoMode';
import ManualMode from './sections/ManualMode';
import BigNumber from 'bignumber.js';
import BetsHistory from 'app/components/bet/BetsHistory.jsx';
import Separator from 'app/components/Separator.jsx';
import BetsHistoryTabs from './sections/BetsHistoryTabs';
import WideContainer from 'app/components/containers/WideContainer.jsx';
import NarrowContainer from 'app/components/containers/NarrowContainer.jsx';
import classNames from 'classnames';
import BetAmount from 'app/components/bet/BetAmount';
import { Row, Col } from 'reactstrap';

const Home = ({
  myBetsHistory,
  allBetsHistory,
  highRollersHistory,
  myBtcAmount,
  children
}) => {
  const [isAuto, setIsAuto] = useState(false);
  const [betAmount, setBetAmount] = useState('0.0000001');
  return (
    <>
      {children}
      <NarrowContainer wider>
        <Row>
          <Col>
            <BtcProfit displayLabel amount={BigNumber('0.00000043')} />
          </Col>
          <Col>
            <ModeSwitch
              className={classNames('home-mode-switch')}
              onChange={setIsAuto}
              style={{ float: 'right' }}
            />
          </Col>
        </Row>

        <BetAmount
          errorText="You have insufficient balance. Please deposit first or use Faucet."
          maxAmount={myBtcAmount}
          amount={betAmount}
          onChange={v => {
            console.log(v);
            setBetAmount(v);
          }}
        />
      </NarrowContainer>

      {isAuto ? (
        <AutoMode betAmount={betAmount} myBtcAmount={myBtcAmount} />
      ) : (
        <ManualMode betAmount={betAmount} myBtcAmount={myBtcAmount} />
      )}

      <div className={classNames('bets-history-container')}>
        <Separator />
        <WideContainer>
          <BetsHistoryTabs
            myBetsHistory={myBetsHistory}
            allBetsHistory={allBetsHistory}
            highRollersHistory={highRollersHistory}
          />
        </WideContainer>
      </div>
    </>
  );
};

Home.propTypes = {
  myBetsHistory: BetsHistory.propTypes.history,
  allBetsHistory: BetsHistory.propTypes.history,
  highRollersHistory: BetsHistory.propTypes.history,
  myBtcAmount: PropTypes.instanceOf(BigNumber).isRequired,
  children: PropTypes.node
};
Home.defaultProps = {
  children: null
};
export default Home;
