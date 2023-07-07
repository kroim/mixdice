import React from 'react';
import BetAmount from 'app/components/bet/BetAmount';
import RollButtons from 'app/components/bet/RollButtons';
import BigNumber from 'bignumber.js';
import BetSlider from 'app/components/bet/BetSlider.jsx';
import BetStats from 'app/components/bet/BetStats.jsx';
import NarrowContainer from 'app/components/containers/NarrowContainer.jsx';

const calculatePayoutFromWinChance = winChance => {
  return parseFloat((99 * (1 / winChance)).toFixed(2));
};

class ManualMode extends React.Component {
  state = {
    betAmount: BigNumber(0.0000001),
    isLow: true,
    betSliderValue: 50,
    isReversed: false,
    winChance: 0,
    payout: 0,
    profit: 0
  };
  calculateValues = () => {
    const { betSliderValue, winChance } = this.state;
    const payout = calculatePayoutFromWinChance(winChance);
    this.setState({ payout });
  };
  handleWinChanceChange = winChance => {
    this.setState(
      state => ({
        winChance,
        betSliderValue: state.isReversed ? winChance : 100 - winChance
      }),
      this.calculateValues
    );
  };
  handleAmountChange = betAmount => this.setState({ betAmount });
  handleRollClick = () => {
    alert('clicked');
  };
  handleRollChange = isLow => this.setState({ isLow });
  handleBetSliderChange = betSliderValue => {
    this.setState(
      state => ({
        betSliderValue,
        winChance: state.isReversed ? betSliderValue : 100 - betSliderValue
      }),
      this.calculateValues
    );
  };
  handlePayoutChange = payout => {
    console.log(payout);
    this.setState({ payout });
  };
  handleRolloverClick = () =>
    this.setState(state => ({
      isReversed: !state.isReversed
    }));
  render() {
    const {
      betAmount,
      isLow,
      betSliderValue,
      isReversed,
      winChance,
      payout,
      profit
    } = this.state;

    return (
      <NarrowContainer>
        <BetAmount amount={betAmount} onChange={this.handleAmountChange} />
        <BetSlider
          min={2}
          max={98}
          isReversed={isReversed}
          value={betSliderValue}
          onChange={this.handleBetSliderChange}
        />
        <RollButtons
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
          payout={payout}
          onPayoutChange={this.handlePayoutChange}
          profit={profit}
        />
      </NarrowContainer>
    );
  }
}

export default ManualMode;
