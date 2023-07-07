import React, { useRef, useEffect } from 'react';
import classNames from 'classnames';
import Tooltip from 'rc-tooltip';

interface InputProps {
  errorText: string;
  placement: string;
  children: React.ReactNode;
  style: object;
}

const ErrorTooltip: React.FC<InputProps> = ({
  errorText,
  children,
  placement,
  style
}) => {
  const contentElRef = useRef(null);
  const width = contentElRef.current && contentElRef.current.offsetWidth;
  // useEffect(() => {
  //   console.log(!!errorText);
  // }, [errorText]);
  return (
    <Tooltip
      overlayStyle={{ width: `${width}px`, ...style }}
      visible={!!errorText}
      placement={placement}
      animation="zoom"
      // onVisibleChange={this.onVisibleChange}
      trigger="click"
      overlay={<span className={classNames('text-danger')}>{errorText}</span>}
    >
      <div ref={contentElRef}>{children}</div>
    </Tooltip>
  );
};

ErrorTooltip.defaultProps = {
  placement: 'bottom'
};

export default ErrorTooltip;
