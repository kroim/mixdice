import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import classNames from 'classnames';
import EditableCard from 'app/components/EditableCard.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faPercent,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

const BetStats = ({
  onRolloverClick,
  isRollOver,
  rollValue,
  winChance,
  onWinChanceChange,
  payout,
  onPayoutChange,
  onProfitOnWinChange,
  profitOnWin
}) => {
  function winChanceValidation(value) {
    if (!value || value < 0.01) return 'The minimum chance is 0.01%';
    if (value > 98) {
      // onWinChanceChange(98);
      return 'The maximum chance is 98%';
    }
  }
  function payoutValidation(value) {
    if (!value || value < 1.01) return 'The minimum payout is 1.01x';
    if (value > 9900) return 'The maximum payout cannot exceed 9900x';
  }
  return (
    <Row className={classNames('bet-stats__row')}>
      <Col className={classNames('bet-stats__col')} md={3} xs={6}>
        <EditableCard
          onClick={onRolloverClick}
          value={rollValue}
          readonly={true}
          title={`Roll ${isRollOver ? 'under' : 'over'} to win`}
          icon={<FontAwesomeIcon icon={faExchangeAlt} />}
        />
      </Col>
      <Col className={classNames('bet-stats__col')} md={3} xs={6}>
        <EditableCard
          title="Win chance"
          onHasErrorCheck={winChanceValidation}
          max={98}
          value={winChance}
          onChange={onWinChanceChange}
          icon={<FontAwesomeIcon icon={faPercent} />}
        />
      </Col>
      <Col className={classNames('bet-stats__col')} md={3} xs={6}>
        <EditableCard
          title="Payout"
          value={payout}
          shouldParseFloat={false}
          onHasErrorCheck={payoutValidation}
          onChange={onPayoutChange}
          icon={<FontAwesomeIcon icon={faTimes} />}
        />
      </Col>
      <Col className={classNames('bet-stats__col')} md={3} xs={6}>
        <EditableCard
          readonly={true}
          shouldParseFloat={false}
          title="Profit on win"
          value={profitOnWin}
          onChange={onProfitOnWinChange}
        />
      </Col>
    </Row>
  );
};

BetStats.propTypes = {
  onRolloverClick: PropTypes.func.isRequired,
  rollValue: PropTypes.number.isRequired,
  winChance: PropTypes.number.isRequired,
  onWinChanceChange: PropTypes.func.isRequired,
  isRollOver: PropTypes.bool,
  payout: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onPayoutChange: PropTypes.func.isRequired,
  profitOnWin: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  onProfitOnWinChange: PropTypes.func.isRequired
};
BetStats.defaultProps = {
  isLow: false,
  onChange: null,
  isRollOver: true,
  payout: 0
};

export default BetStats;
