import * as React from 'react';
import classNames from 'classnames';
import Bets from 'assets/svg/bets.svg';

interface MobileFooterProps {}

export const MobileFooter: React.FC<MobileFooterProps> = ({}) => {
  return (
    <div className={classNames('mobile-footer')}>
      <div className={classNames('mobile-footer__section')}>
        <span className={classNames('mobile-footer__section__label')}>
          Bets
        </span>
        <span className={classNames('mobile-footer__section__icon')}>
          <Bets />
        </span>
      </div>
      <div className={classNames('mobile-footer__section')}>
        <span className={classNames('mobile-footer__section__label')}>
          Cashier
        </span>
        <span className={classNames('mobile-footer__section__icon')}>Bets</span>
      </div>
      <div className={classNames('mobile-footer__section')}>
        <span className={classNames('mobile-footer__section__label')}>
          Chat
        </span>
        <span className={classNames('mobile-footer__section__icon')}>Bets</span>
      </div>
      <div className={classNames('mobile-footer__section')}>
        <span className={classNames('mobile-footer__section__label')}>
          Support
        </span>
        <span className={classNames('mobile-footer__section__icon')}>Bets</span>
      </div>
    </div>
  );
};

export default MobileFooter;
