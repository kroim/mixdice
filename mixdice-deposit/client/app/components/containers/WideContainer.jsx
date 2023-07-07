import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Container, Col } from 'reactstrap';

const WideContainer = ({ children }) => {
  return (
    <Container className={classNames('wide-container')} fluid>
      <Col md={{ size: 10, offset: 1 }}>{children}</Col>
    </Container>
  );
};

WideContainer.propTypes = {
  children: PropTypes.node.isRequired
};
export default WideContainer;
