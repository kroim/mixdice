import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uniqid from 'uniqid';

const BetSlider = ({
  isReversed,
  onChange,
  min,
  max,
  value,
  resultValue,
  hasNumber,
  hasNumberIndicators,
  hasDotIndicators,
  decimals
}) => {
  const [inputValue, setInputValue] = useState(50);
  function handleOnChange(e) {
    let inputValue = parseInt(e.target.value);
    onChange(inputValue / Math.pow(10, decimals));
    setInputValue(inputValue / Math.pow(10, decimals));
  }
  useEffect(() => {
    onChange(100 - inputValue);
    setInputValue(100 - inputValue);
  }, [isReversed]);
  useEffect(() => {
    setInputValue(value);
  }, [value]);
  const numberIndicatorsValues = [
    {
      isActive: inputValue < 25 / 2,
      label: '0'
    },
    {
      isActive: inputValue >= 25 / 2 && inputValue <= (50 + 25) / 2,
      label: '25'
    },
    {
      isActive: inputValue > (50 + 25) / 2 && inputValue <= (75 + 50) / 2,
      label: '50'
    },
    {
      isActive: inputValue > (75 + 50) / 2 && inputValue <= (100 + 75) / 2,
      label: '75'
    },
    {
      isActive: inputValue > (100 + 75) / 2 && inputValue <= 100,
      label: '100'
    }
  ];
  const indicators = (
    <div className={classNames('bet-slider__meter')}>
      {numberIndicatorsValues.map(({ isActive, label }) => (
        <div
          key={uniqid()}
          className={classNames('bet-slider__meter-item', {
            'bet-slider__meter-item--active': isActive
          })}
        >
          <div
            className={classNames('bet-slider__meter-item__label', {
              'bet-slider__meter-item__label--hidden': !hasNumberIndicators
            })}
          >
            {label}
          </div>
          <div
            className={classNames('bet-slider__meter-item__indicator', {
              'bet-slider__meter-item__indicator--hidden': !hasDotIndicators
            })}
          />
        </div>
      ))}
    </div>
  );
  return (
    <div className={classNames('bet-slider')}>
      {indicators}
      <div className={classNames('bet-slider__track-container')}>
        {hasNumber && (
          <div
            style={{ left: `calc(15px + ${(inputValue / 1.08).toFixed(2)}%)` }}
            className={classNames('bet-slider__number')}
          >
            {inputValue}
          </div>
        )}
        <div
          className={classNames('bet-slider__track bet-slider__track--right', {
            'bet-slider__track--red': isReversed,
            'bet-slider__track--green': !isReversed
          })}
        />
        <div
          style={{ width: `calc(${inputValue - 1}% + 8px)` }}
          className={classNames('bet-slider__track bet-slider__track--left', {
            'bet-slider__track--red': !isReversed,
            'bet-slider__track--green': isReversed
          })}
        />
        <div
          style={{ left: `${resultValue / 1.08}%` }}
          className={classNames('bet-slider__result-value', {
            'bet-slider__result-value--under': !isReversed
              ? resultValue <= inputValue
              : resultValue > inputValue,
            'bet-slider__result-value--invisible': !resultValue
          })}
        >
          {resultValue}
        </div>
      </div>

      <input
        onChange={handleOnChange}
        className={classNames('bet-slider__input')}
        type="range"
        min={min * Math.pow(10, decimals)}
        max={max * Math.pow(10, decimals)}
        value={inputValue * Math.pow(10, decimals)}
      />
    </div>
  );
};

BetSlider.defaultProps = {
  onChange: PropTypes.func.isRequired,
  isReversed: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  resultValue: PropTypes.number,
  hasNumber: PropTypes.bool,
  hasNumberIndicators: PropTypes.bool,
  hasDotIndicators: PropTypes.bool,
  decimals: PropTypes.number
};

BetSlider.defaultProps = {
  isReversed: false,
  min: 0,
  max: 100,
  hasNumber: true,
  hasNumberIndicators: false,
  hasDotIndicators: true,
  decimals: 2
};
export default BetSlider;
