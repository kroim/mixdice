import React from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from 'reactstrap';
import classnames from 'classnames';
import BetsHistory from 'app/components/bet/BetsHistory.jsx';
import Home from 'app/screens/Home/Home.jsx';

class BetsHistoryTabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    const { activeTab } = this.state;
    const { myBetsHistory, allBetsHistory, highRollersHistory } = this.props;
    return (
      <>
        <Nav tabs className={classnames('bets-history__nav-tabs')}>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => {
                this.toggle('1');
              }}
            >
              My Bets
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '2' })}
              onClick={() => {
                this.toggle('2');
              }}
            >
              All Bets
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '3' })}
              onClick={() => {
                this.toggle('3');
              }}
            >
              High Rollers
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <BetsHistory history={myBetsHistory} />
          </TabPane>
          <TabPane tabId="2">
            <BetsHistory history={allBetsHistory} />
          </TabPane>
          <TabPane tabId="3">
            <BetsHistory history={highRollersHistory} />
          </TabPane>
        </TabContent>
      </>
    );
  }
}
BetsHistoryTabs.propTypes = {
  myBetsHistory: BetsHistory.propTypes.history,
  allBetsHistory: BetsHistory.propTypes.history,
  highRollersHistory: BetsHistory.propTypes.history
};
export default BetsHistoryTabs;
