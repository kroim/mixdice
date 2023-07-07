import React from 'react';
import { withRouter } from 'react-router-dom';

@withRouter
class LeftsideBar extends React.Component {
  render() {
    return (
      <div className="left-side-menu">
        <div className="slimscroll-menu">
          <div id="sidebar-menu">
            <ul className="metismenu" id="side-menu">
              <li className="menu-title">Transactions</li>

              <li>
                <a
                  href="javascript: void(0);"
                  onClick={() => this.props.history.push('/admin/deposits')}
                >
                  <i className="fe-airplay"></i>
                  <span className="badge badge-success badge-pill float-right">
                    245
                  </span>
                  <span> Deposits </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="clearfix"></div>
        </div>
      </div>
    );
  }
}

export default LeftsideBar;
