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
  onPayoutChange
}) => {
  return (
    <Row className={classNames('bet-stats__row')}>
      <Col className={classNames('bet-stats__col')} md={3} xs={6}>
        <EditableCard
          onClick={onRolloverClick}
          value={rollValue}
          editable={false}
          title={`Roll ${isRollOver ? 'under' : 'over'} to win`}
          icon={<FontAwesomeIcon icon={faExchangeAlt} />}
        />
      </Col>
      <Col className={classNames('bet-stats__col')} md={3} xs={6}>
        <EditableCard
          title="Win chance"
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
          onChange={onPayoutChange}
          icon={<FontAwesomeIcon icon={faTimes} />}
        />
      </Col>
      <Col className={classNames('bet-stats__col')} md={3} xs={6}>
        <EditableCard title="Profit on win" />
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
  payout: PropTypes.number.isRequired,
  onPayoutChange: PropTypes.func.isRequired
};
BetStats.defaultProps = {
  isLow: false,
  onChange: null,
  isRollOver: true,
  payout: null
};

export default BetStats;
