import React from 'react';
import PropTypes from 'prop-types';
import RollButtons from 'app/components/bet/RollButtons';
import BigNumber from 'bignumber.js';
import BetSlider from 'app/components/bet/BetSlider.jsx';
import BetStats from 'app/components/bet/BetStats.jsx';
import NarrowContainer from 'app/components/containers/NarrowContainer.jsx';
import BetsHistoryBar from 'app/components/bet/BetsHistoryBar.tsx';
import Seed from 'app/utils/Seed';
import { withPlaceBet } from 'app/providers/Bet';
import { withApollo } from 'react-apollo';
import {
  calculatePayoutFromWinChance,
  calculateWinChanceFromPayout,
  calculatePayoutFromProfit,
  calculateWinChance,
  calculateProfitOnWin
} from 'shared/math.js';
import { withServerSeed } from 'app/providers/Auth';
import _ from 'lodash';
import { myBtcAmount } from 'app/dummyData';

@withApollo
@withServerSeed
@withPlaceBet
class ManualMode extends React.Component {
  state = {
    isRolling: false,
    betSliderValue: 50,
    isReversed: false,
    winChance: 0,
    payout: 0,
    resultValue: null,
    profitOnWin: 0
  };
  static propTypes = {
    myBtcAmount: PropTypes.instanceOf(BigNumber).isRequired,
    betAmount: PropTypes.string.isRequired,
    onPlaceBet: PropTypes.func.isRequired,
    serverSeed: PropTypes.string
  };
  componentDidMount() {
    const { betAmount } = this.props;
    this.handleAmountChange(betAmount);
  }

  componentWillReceiveProps(nextProps) {
    const { betAmount, serverSeed } = nextProps;
    const { serverSeed: currentServerSeed } = this.props;
    if (serverSeed !== currentServerSeed) {
      console.log(`HASHED SERVER SEED IS "${serverSeed}"`);
    }
    this.handleAmountChange(betAmount);
  }
  setProfitOnWin = () => {
    this.setState(state => ({
      profitOnWin: calculateProfitOnWin(state.betAmount, state.payout)
    }));
  };
  handleWinChanceChange = winChance => {
    this.setState(
      state => ({
        winChance,
        betSliderValue: state.isReversed ? winChance : 100 - winChance,
        payout: calculatePayoutFromWinChance(winChance)
      }),
      this.setProfitOnWin
    );
  };
  handleAmountChange = betAmount =>
    this.setState({ betAmount }, () =>
      this.handleBetSliderChange(this.state.betSliderValue)
    );
  handleRollClick = async () => {
    const { betSliderValue, isReversed } = this.state;
    const { betAmount, refetchServerSeed } = this.props;
    this.setState({ isRolling: true });
    try {
      const bet = await this.props.onPlaceBet({
        variables: {
          input: {
            betAmount,
            clientSeed: Seed.get(),
            isUnder: isReversed,
            targetValue: betSliderValue
          }
        }
      });
      const data = bet.data.placeBet.bet;
      this.setState({ resultValue: data.result });
      await refetchServerSeed();
    } catch (e) {
      console.log(e);
      alert(e);
    }
    this.setState({ isRolling: false });
  };
  handleRollChange = isLow =>
    this.setState({
      isReversed: isLow
    });
  handleBetSliderChange = _.throttle(betSliderValue => {
    const { isReversed } = this.state;
    const winChance = calculateWinChance(betSliderValue, isReversed);
    this.setState(
      {
        betSliderValue,
        winChance,
        payout: calculatePayoutFromWinChance(winChance)
      },
      this.setProfitOnWin
    );
  }, 80);
  handlePayoutChange = payout => {
    const bigNumberPayout = BigNumber(payout).toNumber();
    const { isReversed } = this.state;
    const winChance = calculateWinChanceFromPayout(bigNumberPayout);
    const betSliderValue = isReversed ? winChance : 100 - winChance;
    this.setState({
      payout,
      winChance: calculateWinChanceFromPayout(bigNumberPayout),
      betSliderValue
    });
  };
  handleRolloverClick = () =>
    this.setState(state => ({
      isReversed: !state.isReversed
    }));
  handleProfitOnWinChange = profitOnWin => {
    const { betAmount } = this.state;

    const payout = calculatePayoutFromProfit(profitOnWin, BigNumber(betAmount));
    const winChance = calculateWinChanceFromPayout(payout);
    this.setState({ profitOnWin: String(profitOnWin), payout, winChance });
  };
  render() {
    const {
      betSliderValue,
      isReversed,
      winChance,
      payout,
      profitOnWin,
      isRolling,
      resultValue
    } = this.state;
    const { betAmount, myBtcAmount } = this.props;

    return (
      <NarrowContainer>
        <BetSlider
          min={2}
          max={98}
          isReversed={isReversed}
          value={betSliderValue}
          onChange={this.handleBetSliderChange}
          resultValue={resultValue}
        />
        <BetsHistoryBar isFromMe />
        <RollButtons
          isRolling={isRolling}
          isLow={isReversed}
          disabledRoll={
            new BigNumber(betAmount).isZero() ||
            BigNumber(myBtcAmount).lt(betAmount)
          }
          onRoll={this.handleRollClick}
          onChange={this.handleRollChange}
        />
        <BetStats
          onWinChanceChange={this.handleWinChanceChange}
          winChance={winChance}
          isRollOver={isReversed}
          rollValue={betSliderValue}
          onRolloverClick={this.handleRolloverClick}
          payout={payout}
          onPayoutChange={this.handlePayoutChange}
          profitOnWin={profitOnWin}
          onProfitOnWinChange={this.handleProfitOnWinChange}
        />
      </NarrowContainer>
    );
  }
}
export default ManualMode;
