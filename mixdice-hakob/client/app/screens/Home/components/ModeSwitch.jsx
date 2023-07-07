import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ButtonGroup, Button } from 'reactstrap';
import Manual from 'assets/svg/manual.svg';
import Auto from 'assets/svg/auto.svg';

const ModeSwitch = ({ onChange, ...props }) => {
  const [isAuto, setIsAuto] = useState(false);
  function handleManualClick() {
    setIsAuto(false);
    onChange && onChange(false);
  }
  function handleAutoClick() {
    setIsAuto(true);
    onChange && onChange(true);
  }
  return (
    <ButtonGroup {...props} style={{ float: 'right', ...props.style }}>
      <Button
        onClick={handleManualClick}
        size="lg"
        color={isAuto ? 'primary' : 'info'}
      >
        <span className={classNames('btn-text-not-sm')}>Manual</span>
        <span className={classNames('btn-icon-sm')}>
          <Manual />
        </span>
      </Button>
      <Button
        onClick={handleAutoClick}
        color={!isAuto ? 'primary' : 'info'}
        size="lg"
      >
        <span className={classNames('btn-text-not-sm')}>Auto</span>
        <span className={classNames('btn-icon-sm')}>
          <Auto />
        </span>
      </Button>
    </ButtonGroup>
  );
};

ModeSwitch.propTypes = {
  onChange: PropTypes.func
};
ModeSwitch.defaultProps = {
  onChange: null
};
export default ModeSwitch;
