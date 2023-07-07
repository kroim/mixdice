import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const NarrowContainer = ({ children }) => {
  return <div className={classNames('narrow-container')}>{children}</div>;
};

NarrowContainer.propTypes = {
  children: PropTypes.node.isRequired
};
export default NarrowContainer;
