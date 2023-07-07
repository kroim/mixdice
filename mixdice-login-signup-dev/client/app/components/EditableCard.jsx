import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const EditableCard = ({
  title,
  icon,
  onChange,
  editable,
  onClick,
  inputType,
  max,
  ...props
}) => {
  function handleCardClick() {
    onClick && onClick();
  }
  function handleChange(e) {
    const value = parseInt(e.target.value);
    if (max && value <= max) {
      onChange && onChange(value);
    }
  }
  return (
    <div
      onClick={handleCardClick}
      className={classNames('editable-card', {
        'editable-card--clickable': !editable
      })}
    >
      <span className={classNames('editable-card__title')}>{title}</span>
      <div className={classNames('editable-card__content')}>
        <input
          {...props}
          max={max}
          type={inputType}
          className={classNames(
            'editable-card__content__input input--no-spin-buttons'
          )}
          onChange={handleChange}
          readOnly={!editable}
        />
        {icon && (
          <div className={classNames('editable-card__content__icon-container')}>
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

EditableCard.propTypes = {
  title: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  icon: PropTypes.node,
  editable: PropTypes.bool,
  onClick: PropTypes.func,
  inputType: PropTypes.string,
  max: PropTypes.number
};
EditableCard.defaultProps = {
  icon: null,
  editable: true,
  onChange: null,
  onClick: null,
  inputType: 'number',
  max: null
};
export default EditableCard;
