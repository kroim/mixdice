import * as React from 'react';
import classNames from 'classnames';
import Bets from 'assets/svg/bets.svg';
import Mobile from '../mobile/mobile';
import { useState } from 'react';

//////
import '../../styles/components/mobile.scss';
import Cashier from '../../../public/assets/svg/cashier.svg';
import Chat from '../../../public/assets/svg/chat.svg';
import Support from '../../../public/assets/svg/support.svg';
//////////
interface MobileFooterProps {
  show: Function;
}

export const MobileFooter: React.FC<MobileFooterProps> = props => {
  // const [showMobile, setMobile] = useState(false);
  console.log('aaaaa', props);

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
      <div
        className={classNames('mobile-footer__section')}
        onClick={() => props.show()}
      >
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
      {/* {showMobile && <Mobile close={(value: boolean) => setMobile(value)} />} */}
    </div>
  );
};

export default MobileFooter;
