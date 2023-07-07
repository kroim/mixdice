import React from 'react';
import Settings from 'assets/svg/settings.svg';
import { Link } from 'react-router-dom';
import { DropdownItem } from 'reactstrap';

interface DropdownLinkItemProps {
  to: string;
  children: any;
}

const DropdownLinkItem: React.FC<DropdownLinkItemProps> = ({
  to,
  children
}) => (
  <DropdownItem
    tag={({ children, ...props }) => (
      <Link {...props} to={to}>
        {children}
      </Link>
    )}
  >
    {children}
  </DropdownItem>
);

export default DropdownLinkItem;
