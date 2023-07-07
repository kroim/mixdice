import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import Signup from "../containers/signup/Signup";
import Login from "../containers/login/Login";

export default class BaseTab extends React.Component {
    state = {
      activeTab: '1'
    };

    toggle = (tab) => {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab
        });
      }
    }

    render() {
      const { activeTab } = this.state;
      return (
        <div>
          <Nav tabs>
            <NavItem>
              <NavLink 
                className={classnames({ active:activeTab === '1'})}
                onClick={() => this.toggle('1') }
              >
                Sign up
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink 
                className={classnames({ active: activeTab === '2'})}
                onClick={() => this.toggle('2') }
              >
                Log in
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Signup />
            </TabPane>
            <TabPane tabId="2">
              <Login />
            </TabPane>
          </TabContent>
        </div>
      );
    }
}
