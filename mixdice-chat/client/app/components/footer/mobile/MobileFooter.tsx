import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import BetsIcon from 'assets/svg/bets.svg';
import CashierIcon from 'assets/svg/cashier.svg';
import ChatIcon from 'assets/svg/chat.svg';
import SupportIcon from 'assets/svg/support.svg';
import MobileFooterMenu from './MobileFooterMenu';
import MobilePopup from 'app/components/containers/MobilePopup';
import Bets from 'app/components/footer/mobile-screens/bets/Bets';
import Cashier from 'app/components/footer/mobile-screens/cashier/Cashier';
import Chat from 'app/components/footer/mobile-screens/chat/Chat';
import Support from 'app/components/footer/mobile-screens/support/Support';

const items = [
  {
    id: '1',
    icon: <BetsIcon />,
    label: 'Bets'
  },
  {
    id: '2',
    icon: <CashierIcon />,
    label: 'Cashier'
  },
  {
    id: '3',
    icon: <ChatIcon />,
    label: 'Chat'
  },
  {
    id: '4',
    icon: <SupportIcon />,
    label: 'Support'
  }
];
interface MobileFooterItem {
  id: string | number;
  icon: React.ReactElement;
  label: string;
}
interface MobileFooterProps {
  items: MobileFooterItem[];
}

const MobileFooter: React.FC<MobileFooterProps> = ({ items, ...props }) => {
  const [activeItem, setActiveItem] = useState(null);
  useEffect(() => {
    if (activeItem) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
  }, [activeItem]);
  function handlePopupClose() {
    setActiveItem(null);
  }
  return (
    <>
      <MobilePopup
        closeIconSpacing={activeItem === '3' ? 'small' : null}
        isVisible={!!activeItem}
        onClose={handlePopupClose}
      >
        {activeItem === '1' && <Bets {...props} />}
        {activeItem === '2' && <Cashier {...props} />}
        {activeItem === '3' && <Chat {...props} />}
        {activeItem === '4' && <Support {...props} />}
      </MobilePopup>
      <MobileFooterMenu
        onChange={setActiveItem}
        activeId={activeItem}
        items={items}
      />
    </>
  );
};
MobileFooter.defaultProps = {
  items
};
export default MobileFooter;
