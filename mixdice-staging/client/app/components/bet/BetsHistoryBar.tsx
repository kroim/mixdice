import React, { useEffect } from 'react';
import classNames from 'classnames';
import uniqid from 'uniqid';
import { withBetHistory } from 'app/providers/Bet';
interface BetHistoryItem {
  id: string;
  value: number;
  hasWon: boolean;
}

interface BetsHistoryBarProps {
  maxBetsNumber?: number;
  history: any[];
  subscribeToMore: () => any;
}

const BetsHistoryBar: React.FC<BetsHistoryBarProps> = ({
  history = [],
  subscribeToMore
}) => {
  useEffect(() => {
    subscribeToMore();
  }, []);
  if (!history.length) return null;
  return (
    <div className={classNames('bets-history-bar')}>
      <div className={classNames('bets-history-bar__container')}>
        {history
          .map(bet => ({
            id: bet._id,
            value: bet.result,
            hasWon: bet.isUnder
              ? bet.result > bet.targetValue
              : bet.result < bet.targetValue
          }))
          .reverse()
          .map(e => (
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

export default withBetHistory(BetsHistoryBar);
