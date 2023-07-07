import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ErrorTooltip from 'app/components/form/ErrorTooltip.tsx';

const EditableCard = ({
  title,
  icon,
  onChange,
  readonly,
  onClick,
  inputType,
  shouldParseFloat,
  max,
  onHasErrorCheck,
  value,
  ...props
}) => {
  const [error, setError] = useState('');
  function handleCardClick() {
    onClick && onClick();
  }
  function handleChange(e) {
    let value = e.target.value;
    if (shouldParseFloat) value = parseFloat(value);
    onChange && onChange(value);
  }
  useEffect(() => {
    if (onHasErrorCheck && onHasErrorCheck(value))
      setError(onHasErrorCheck(value));
    else setError('');
  }, [value]);

  return (
    <div className={classNames('editable-card-container')}>
      <ErrorTooltip
        style={{ marginTop: 100 }}
        errorText={error}
        placement={'top'}
      >
        <div
          onClick={handleCardClick}
          className={classNames('editable-card', {
            'editable-card--clickable': onClick,
            'editable-card--readonly': readonly,
            'editable-card--error': error
          })}
        >
          <span className={classNames('editable-card__title')}>{title}</span>
          <div className={classNames('editable-card__content')}>
            {icon && (
              <div
                className={classNames('editable-card__content__icon-container')}
              />
            )}
            <input
              {...props}
              value={value}
              max={max}
              type={inputType}
              className={classNames(
                'editable-card__content__input input--no-spin-buttons'
              )}
              onChange={handleChange}
              readOnly={readonly}
            />
            {icon && (
              <div
                className={classNames('editable-card__content__icon-container')}
              >
                {icon}
              </div>
            )}
          </div>
        </div>
      </ErrorTooltip>
      {/*{error && (*/}
      {/*  <div className={classNames('editable-card--error-text')}>{error}</div>*/}
      {/*)}*/}
    </div>
  );
};

EditableCard.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  icon: PropTypes.node,
  readonly: PropTypes.bool,
  onClick: PropTypes.func,
  inputType: PropTypes.string,
  max: PropTypes.number,
  shouldParseFloat: PropTypes.bool,
  onHasErrorCheck: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
EditableCard.defaultProps = {
  icon: null,
  readonly: false,
  onChange: null,
  onClick: null,
  inputType: 'number',
  max: null,
  shouldParseFloat: true,
  value: ''
};
export default EditableCard;
