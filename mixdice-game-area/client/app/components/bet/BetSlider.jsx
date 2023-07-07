import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BetSlider = ({ isReversed, onChange, min, max, value, resultValue }) => {
  const [inputValue, setInputValue] = useState(50);
  function handleOnChange(e) {
    let inputValue = parseInt(e.target.value);
    onChange(inputValue);
    setInputValue(inputValue);
  }
  useEffect(() => {
    onChange(100 - inputValue);
    setInputValue(100 - inputValue);
  }, [isReversed]);
  useEffect(() => {
    setInputValue(value);
  }, [value]);
  return (
    <div className={classNames('bet-slider')}>
      <div className={classNames('bet-slider__meter')}>
        <div
          className={classNames('bet-slider__meter-item', {
            'bet-slider__meter-item--active': inputValue < 25 / 2
          })}
        >
          <div className={classNames('bet-slider__meter-item__label')}>0</div>
          <div className={classNames('bet-slider__meter-item__indicator')} />
        </div>
        <div
          className={classNames('bet-slider__meter-item', {
            'bet-slider__meter-item--active':
              inputValue >= 25 / 2 && inputValue <= (50 + 25) / 2
          })}
        >
          <div className={classNames('bet-slider__meter-item__label')}>25</div>
          <div className={classNames('bet-slider__meter-item__indicator')} />
        </div>
        <div
          className={classNames('bet-slider__meter-item', {
            'bet-slider__meter-item--active':
              inputValue > (50 + 25) / 2 && inputValue <= (75 + 50) / 2
          })}
        >
          <div className={classNames('bet-slider__meter-item__label')}>50</div>
          <div className={classNames('bet-slider__meter-item__indicator')} />
        </div>
        <div
          className={classNames('bet-slider__meter-item', {
            'bet-slider__meter-item--active':
              inputValue > (75 + 50) / 2 && inputValue <= (100 + 75) / 2
          })}
        >
          <div className={classNames('bet-slider__meter-item__label')}>75</div>
          <div className={classNames('bet-slider__meter-item__indicator')} />
        </div>
        <div
          className={classNames('bet-slider__meter-item', {
            'bet-slider__meter-item--active':
              inputValue > (100 + 75) / 2 && inputValue <= 100
          })}
        >
          <div className={classNames('bet-slider__meter-item__label')}>100</div>
          <div className={classNames('bet-slider__meter-item__indicator')} />
        </div>
      </div>
      <div className={classNames('bet-slider__track-container')}>
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
          style={{ left: resultValue + '%' }}
          className={classNames('bet-slider__result-value')}
        >
          {resultValue}
        </div>
      </div>
      <input
        onChange={handleOnChange}
        className={classNames('bet-slider__input')}
        type="range"
        min={min}
        max={max}
        value={inputValue}
      />
    </div>
  );
};

BetSlider.defaultProps = {
  onChange: PropTypes.func.isRequired,
  isReversed: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  resultValue: PropTypes.number
};
BetSlider.defaultProps = {
  isReversed: false,
  min: 0,
  max: 100
};
export default BetSlider;
