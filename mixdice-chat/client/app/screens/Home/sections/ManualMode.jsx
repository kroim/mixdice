import React from 'react';
import PropTypes from 'prop-types';
import BetAmount from 'app/components/bet/BetAmount';
import RollButtons from 'app/components/bet/RollButtons';
import BigNumber from 'bignumber.js';
import BetSlider from 'app/components/bet/BetSlider.jsx';
import BetStats from 'app/components/bet/BetStats.jsx';
import NarrowContainer from 'app/components/containers/NarrowContainer.jsx';
import BetsHistoryBar from 'app/components/bet/BetsHistoryBar.tsx';
import Seed from 'app/utils/Seed';
import { withPlaceBet } from 'app/providers/Bet';
import { withApollo } from 'react-apollo';
import { BET_HISTORY, VERIFY_BET_RESULT } from 'app/providers/gql/bet';

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

@withApollo
@withPlaceBet
class ManualMode extends React.Component {
  state = {
    isRolling: false,
    isLow: true,
    betSliderValue: 50,
    isReversed: false,
    winChance: 0,
    payout: 0,
    resultValue: null,
    profitOnWin: 0,
    betsHistory: []
  };
  static propTypes = {
    myBtcAmount: PropTypes.instanceOf(BigNumber).isRequired,
    betAmount: PropTypes.string.isRequired,
    onPlaceBet: PropTypes.func.isRequired
  };
  fetchBetHistory = async () => {
    const { client } = this.props;
    const { data } = await client.query({
      query: BET_HISTORY,
      variables: {
        input: {
          limit: 7
        }
      },
      fetchPolicy: 'network-only'
    });
    const betsHistory = data.betsHistory.bet
      .map(bet => ({
        id: bet._id,
        value: bet.result,
        hasWon: bet.isUnder
          ? bet.result > bet.targetValue
          : bet.result < bet.targetValue
      }))
      .reverse();
    this.setState({
      betsHistory
    });
  };
  async componentDidMount() {
    const { betAmount } = this.props;
    await this.fetchBetHistory();
    this.handleAmountChange(betAmount);
  }

  componentWillReceiveProps(nextProps) {
    const { betAmount } = nextProps;
    this.handleAmountChange(betAmount);
  }
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
  handleRollClick = async () => {
    const { betSliderValue, isLow } = this.state;
    const { betAmount } = this.props;
    this.setState({ isRolling: true });

    const bet = await this.props.onPlaceBet({
      variables: {
        input: {
          betAmount,
          clientSeed: Seed.get(),
          isUnder: !isLow,
          targetValue: betSliderValue
        }
      }
    });
    const data = bet.data.placeBet.bet;
    this.setState({ isRolling: false, resultValue: data.result }, async () => {
      await this.fetchBetHistory();
    });
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
      betsHistory,
      isLow,
      betSliderValue,
      isReversed,
      winChance,
      payout,
      profitOnWin,
      isRolling,
      resultValue
    } = this.state;
    const { betAmount } = this.props;
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
        {betsHistory.length > 0 ? (
          <BetsHistoryBar history={betsHistory} />
        ) : null}
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
