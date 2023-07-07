import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import BtcProfit from 'app/components/crypto/BtcProfit';
import ModeSwitch from './components/ModeSwitch';
import AutoMode from './sections/AutoMode';
import ManualMode from './sections/ManualMode';
import BigNumber from 'bignumber.js';
import Separator from 'app/components/Separator.jsx';
import BetsHistoryTabs from './sections/BetsHistoryTabs';
import WideContainer from 'app/components/containers/WideContainer.jsx';
import NarrowContainer from 'app/components/containers/NarrowContainer.jsx';
import classNames from 'classnames';
import BetAmount from 'app/components/bet/BetAmount';
import { Row, Col } from 'reactstrap';
import { withBalance } from 'app/providers/Balance';

const Home = ({ balance, children, subscribeToMore }) => {
  const [isAuto, setIsAuto] = useState(false);
  const [betAmount, setBetAmount] = useState(0);
  useEffect(() => {
    subscribeToMore();
  }, []);

  return (
    <>
      {children}
      <NarrowContainer wider>
        <Row>
          <Col>
            <BtcProfit displayLabel amount={balance} />
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
          maxAmount={balance}
          amount={betAmount}
          balance={balance}
          onChange={v => {
            setBetAmount(v);
          }}
        />
      </NarrowContainer>

      {isAuto ? (
        <AutoMode betAmount={betAmount} myBtcAmount={balance} />
      ) : (
        <ManualMode betAmount={betAmount} myBtcAmount={balance} />
      )}

      <div className={classNames('bets-history-container')}>
        <Separator />
        <WideContainer>
          <BetsHistoryTabs />
        </WideContainer>
      </div>
    </>
  );
};

Home.propTypes = {
  balance: PropTypes.instanceOf(BigNumber).isRequired,
  children: PropTypes.node
};
Home.defaultProps = {
  children: null
};
export default withBalance(Home);
