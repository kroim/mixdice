import React from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import BigNumber from 'bignumber.js';

const AutoMode = () => {
  return <Container>Auto </Container>;
};

AutoMode.propTypes = {
  betAmount: PropTypes.instanceOf(BigNumber).isRequired
};

export default AutoMode;
