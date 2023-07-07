import React from 'react';
import PropTypes from 'prop-types';
import BetAmount from 'app/components/bet/BetAmount';
import RollButtons from 'app/components/bet/RollButtons';
import BigNumber from 'bignumber.js';
import BetSlider from 'app/components/bet/BetSlider.jsx';
import BetStats from 'app/components/bet/BetStats.jsx';
import NarrowContainer from 'app/components/containers/NarrowContainer.jsx';
import classnames from 'classnames';

const calculatePayoutFromWinChance = winChance => {
  return parseFloat((99 * (1 / winChance)).toFixed(2));
};
const calculateWinChanceFromPayout = payout => {
  return parseFloat((100 / payout).toFixed(2));
};
const calculatePayoutFromProfit = (profit, betAmount) => {
  return BigNumber(profit)
    .dividedBy(betAmount)
    .minus(betAmount);
};
class ManualMode extends React.Component {
  state = {
    isRolling: false,
    betAmount: '0.0000001',
    isLow: true,
    betSliderValue: 50,
    isReversed: false,
    winChance: 0,
    payout: 0,
    profitOnWin: 0
  };
  static propTypes = {
    myBtcAmount: PropTypes.instanceOf(BigNumber).isRequired
  };
  setProfitOnWin = () => {
    this.setState(state => ({
      profitOnWin: BigNumber(state.betAmount)
        .multipliedBy(state.payout - 1)
        .toFixed(7)
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
  handleRollClick = () => {
    this.setState({ isRolling: true });
    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  };
  handleRollChange = isLow => this.setState({ isLow });
  handleBetSliderChange = betSliderValue => {
    const { isReversed } = this.state;
    const winChance = isReversed ? betSliderValue : 100 - betSliderValue;
    this.setState(
      {
        betSliderValue,
        winChance,
        payout: calculatePayoutFromWinChance(winChance)
      },
      this.setProfitOnWin
    );
  };
  handlePayoutChange = payout => {
    const bigNumberPayout = BigNumber(payout).toNumber();
    const { isReversed } = this.state;
    const winChance = calculateWinChanceFromPayout(bigNumberPayout);
    const betSliderValue = isReversed ? winChance : 100 - winChance;
    this.setState({
      payout: bigNumberPayout,
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
      betAmount,
      isLow,
      betSliderValue,
      isReversed,
      winChance,
      payout,
      profitOnWin,
      isRolling
    } = this.state;
    const { myBtcAmount } = this.props;
    return (
      <NarrowContainer>
        <BetAmount
          errorText="You have insufficient balance. Please deposit first or use Faucet."
          maxAmount={myBtcAmount}
          amount={betAmount}
          onChange={this.handleAmountChange}
        />
        <BetSlider
          min={2}
          max={98}
          isReversed={isReversed}
          value={betSliderValue}
          onChange={this.handleBetSliderChange}
        />
        <RollButtons
          isRolling={isRolling}
          isLow={isLow}
          onRoll={this.handleRollClick}
          onChange={this.handleRollChange}
        />
        <BetStats
          onWinChanceChange={this.handleWinChanceChange}
          winChance={winChance}
          isRollOver={isReversed}
          rollValue={betSliderValue}
          onRolloverClick={this.handleRolloverClick}
          payout={payout.toFixed(2)}
          onPayoutChange={this.handlePayoutChange}
          profitOnWin={profitOnWin}
          onProfitOnWinChange={this.handleProfitOnWinChange}
        />
      </NarrowContainer>
    );
  }
}

export default ManualMode;
