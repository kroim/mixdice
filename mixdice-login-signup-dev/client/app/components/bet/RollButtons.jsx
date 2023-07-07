import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import classNames from 'classnames';

const RollButtons = ({ onRoll, isLow, onChange }) => {
  function handleOnLow() {
    onChange && onChange(true);
  }
  function handleOnHigh() {
    onChange && onChange(false);
  }
  return (
    <div className={classNames('roll-buttons')}>
      <div className={classNames('roll-buttons__container')}>
        <Button
          color={isLow ? 'info' : 'primary'}
          onClick={handleOnLow}
          className={classNames(
            'roll-buttons__button roll-buttons__button--low-button'
          )}
        >
          Low
        </Button>
        <Button
          color="info"
          onClick={onRoll}
          className={classNames(
            'roll-buttons__button roll-buttons__button--roll-button'
          )}
        >
          Roll
        </Button>
        <Button
          color={isLow ? 'primary' : 'info'}
          onClick={handleOnHigh}
          className={classNames(
            'roll-buttons__button roll-buttons__button--high-button'
          )}
        >
          High
        </Button>
      </div>
    </div>
  );
};

RollButtons.propTypes = {
  isLow: PropTypes.bool,
  onChange: PropTypes.func,
  onRoll: PropTypes.func.isRequired
};
RollButtons.defaultProps = {
  isLow: false,
  onChange: null
};
export default RollButtons;
