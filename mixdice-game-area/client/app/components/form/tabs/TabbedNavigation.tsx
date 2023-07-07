import React, { useState } from 'react';
import classNames from 'classnames';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';

interface TabHeaderItem {
  id: number | string;
  title: string;
  content: any;
}

interface TabbedNavigationProps {
  tabs: TabHeaderItem[];
  initialActiveId?: string | number;
  navClassName?: string;
  tabContentClassName?: string;
}

const TabbedNavigation: React.FC<TabbedNavigationProps> = ({
  initialActiveId,
  navClassName,
  tabContentClassName,

  tabs
}) => {
  const [activeTab, setActiveTab] = useState(initialActiveId || tabs[0].id);
  return (
    <>
      <Nav className={navClassName} tabs>
        {tabs.map(e => (
          <NavItem key={e.id}>
            <NavLink
              className={classNames({ active: activeTab === e.id })}
              onClick={() => {
                setActiveTab(e.id);
              }}
            >
              {e.title}
            </NavLink>
          </NavItem>
        ))}
      </Nav>

      <TabContent className={tabContentClassName} activeTab={activeTab}>
        {tabs.map(e => (
          <TabPane key={e.id} tabId={e.id}>
            {e.content}
          </TabPane>
        ))}
      </TabContent>
    </>
  );
};

export default TabbedNavigation;
