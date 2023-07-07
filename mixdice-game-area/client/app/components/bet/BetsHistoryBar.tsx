import React from 'react';
import classNames from 'classnames';
import uniqid from 'uniqid';
interface BetHistoryItem {
  value: number;
  hasWon: boolean;
}

interface BetsHistoryBarProps {
  maxBetsNumber: number;
  history: BetHistoryItem[];
}

const BetsHistoryBar: React.FC<BetsHistoryBarProps> = ({
  history = [],
  maxBetsNumber = 7
}) => {
  history =
    history.length > maxBetsNumber
      ? history.splice(history.length - maxBetsNumber, history.length)
      : history;
  return (
    <div className={classNames('bets-history-bar')}>
      <div className={classNames('bets-history-bar__container')}>
        {history.map(e => (
          <div
            key={uniqid()}
            className={classNames('bets-history-bar__item', {
              'bets-history-bar__item--won': e.hasWon
            })}
          >
            {e.value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BetsHistoryBar;
