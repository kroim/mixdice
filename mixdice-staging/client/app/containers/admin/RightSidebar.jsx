import React from 'react';

export default class RightSidebar extends React.Component {
  render() {
    return (
      <>
        <div className="right-bar">
          <div className="rightbar-title">
            <a
              href="javascript:void(0);"
              className="right-bar-toggle float-right"
            >
              <i className="dripicons-cross noti-icon"></i>
            </a>
            <h5 className="m-0 text-white">Settings</h5>
          </div>
          <div className="slimscroll-menu">
            <div className="user-box">
              <div className="user-img">
                <img
                  src="assets/images/users/user-1.jpg"
                  alt="user-img"
                  title="Mat Helme"
                  className="rounded-circle img-fluid"
                />
                <a href="javascript:void(0);" className="user-edit">
                  <i className="mdi mdi-pencil"></i>
                </a>
              </div>

              <h5>
                <a href="javascript: void(0);">Geneva Kennedy</a>{' '}
              </h5>
              <p className="text-muted mb-0">
                <small>Admin Head</small>
              </p>
            </div>

            <hr className="mt-0" />
            <h5 className="pl-3">Basic Settings</h5>
            <hr className="mb-0" />

            <div className="p-3">
              <div className="checkbox checkbox-primary mb-2">
                <input id="Rcheckbox1" type="checkbox" checked />
                <label for="Rcheckbox1">Notifications</label>
              </div>
              <div className="checkbox checkbox-primary mb-2">
                <input id="Rcheckbox2" type="checkbox" checked />
                <label for="Rcheckbox2">API Access</label>
              </div>
              <div className="checkbox checkbox-primary mb-2">
                <input id="Rcheckbox3" type="checkbox" />
                <label for="Rcheckbox3">Auto Updates</label>
              </div>
              <div className="checkbox checkbox-primary mb-2">
                <input id="Rcheckbox4" type="checkbox" checked />
                <label for="Rcheckbox4">Online Status</label>
              </div>
              <div className="checkbox checkbox-primary mb-0">
                <input id="Rcheckbox5" type="checkbox" checked />
                <label for="Rcheckbox5">Auto Payout</label>
              </div>
            </div>

            <hr className="mt-0" />
            <h5 className="pl-3 pr-3">
              Messages{' '}
              <span className="float-right badge badge-pill badge-danger">
                25
              </span>
            </h5>
            <hr className="mb-0" />
            <div className="p-3">
              <div className="inbox-widget">
                <div className="inbox-item">
                  <div className="inbox-item-img">
                    <img
                      src="assets/images/users/user-2.jpg"
                      className="rounded-circle"
                      alt=""
                    />
                  </div>
                  <p className="inbox-item-author">
                    <a href="javascript: void(0);" className="text-light">
                      Tomaslau
                    </a>
                  </p>
                  <p className="inbox-item-text">
                    I've finished it! See you so...
                  </p>
                </div>
                <div className="inbox-item">
                  <div className="inbox-item-img">
                    <img
                      src="assets/images/users/user-3.jpg"
                      className="rounded-circle"
                      alt=""
                    />
                  </div>
                  <p className="inbox-item-author">
                    <a href="javascript: void(0);" className="text-light">
                      Stillnotdavid
                    </a>
                  </p>
                  <p className="inbox-item-text">This theme is awesome!</p>
                </div>
                <div className="inbox-item">
                  <div className="inbox-item-img">
                    <img
                      src="assets/images/users/user-4.jpg"
                      className="rounded-circle"
                      alt=""
                    />
                  </div>
                  <p className="inbox-item-author">
                    <a href="javascript: void(0);" className="text-light">
                      Kurafire
                    </a>
                  </p>
                  <p className="inbox-item-text">Nice to meet you</p>
                </div>

                <div className="inbox-item">
                  <div className="inbox-item-img">
                    <img
                      src="assets/images/users/user-5.jpg"
                      className="rounded-circle"
                      alt=""
                    />
                  </div>
                  <p className="inbox-item-author">
                    <a href="javascript: void(0);" className="text-light">
                      Shahedk
                    </a>
                  </p>
                  <p className="inbox-item-text">Hey! there I'm available...</p>
                </div>
                <div className="inbox-item">
                  <div className="inbox-item-img">
                    <img
                      src="assets/images/users/user-6.jpg"
                      className="rounded-circle"
                      alt=""
                    />
                  </div>
                  <p className="inbox-item-author">
                    <a href="javascript: void(0);" className="text-light">
                      Adhamdannaway
                    </a>
                  </p>
                  <p className="inbox-item-text">This theme is awesome!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rightbar-overlay"></div>
      </>
    );
  }
}
