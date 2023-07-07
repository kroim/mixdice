import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Separator = ({ size, error, ...props }) => (
  <div
    {...props}
    className={classNames(
      'separator',
      {
        'separator--big': size === 'big',
        'separator--small': size === 'small',
        'separator--error': error
      },
      props.className
    )}
  />
);

Separator.propTypes = {
  size: PropTypes.oneOf(['small', 'big']),
  error: PropTypes.bool,
  className: PropTypes.string
};

Separator.defaultProps = { size: null, error: false, className: '' };
export default Separator;
