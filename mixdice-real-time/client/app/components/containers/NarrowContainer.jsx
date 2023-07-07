import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Container } from 'reactstrap';

const NarrowContainer = ({ children, wider }) => {
  return (
    <Container
      fluid
      className={classNames('narrow-container', {
        'narrow-container--wider': wider
      })}
    >
      {children}
    </Container>
  );
};

NarrowContainer.propTypes = {
  children: PropTypes.node.isRequired,
  wider: PropTypes.bool
};
NarrowContainer.defaultProps = {
  wider: false
};
export default NarrowContainer;
