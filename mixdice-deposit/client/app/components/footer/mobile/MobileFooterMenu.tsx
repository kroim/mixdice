import React from 'react';
import classNames from 'classnames';

interface MenuItem {
  id: string | number;
  icon: React.ReactElement;
  label: string;
}

interface MobileFooterMenuProps {
  items: MenuItem[];
  activeId?: string | number;
  onChange(number): any;
}

const MobileFooterMenu: React.FC<MobileFooterMenuProps> = ({
  items,
  activeId,
  onChange
}) => {
  return (
    <div className={classNames('mobile-footer-menu')}>
      {items.map(({ id, icon, label }) => (
        <div
          key={id}
          onClick={() => onChange(id)}
          className={classNames('mobile-footer-menu__section', {
            'mobile-footer-menu__section--active': activeId === id
          })}
        >
          <span className={classNames('mobile-footer-menu__section__icon')}>
            {icon}
          </span>
          <span className={classNames('mobile-footer-menu__section__label')}>
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};
export default MobileFooterMenu;
