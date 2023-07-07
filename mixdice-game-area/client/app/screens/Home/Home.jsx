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

const Home = ({
  myBetsHistory,
  allBetsHistory,
  highRollersHistory,
  myBtcAmount,
  children
}) => {
  const [isAuto, setIsAuto] = useState(false);
  return (
    <>
      {children}
      <NarrowContainer>
        <ModeSwitch
          className={classNames('home-mode-switch')}
          onChange={setIsAuto}
        />
        <BtcProfit displayLabel amount={BigNumber('0.00000043')} />
        {isAuto ? (
          <AutoMode myBtcAmount={myBtcAmount} />
        ) : (
          <ManualMode myBtcAmount={myBtcAmount} />
        )}
      </NarrowContainer>
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
