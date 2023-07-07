import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup, Button } from 'reactstrap';

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
        Manual
      </Button>
      <Button
        onClick={handleAutoClick}
        color={!isAuto ? 'primary' : 'info'}
        size="lg"
      >
        Auto
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
