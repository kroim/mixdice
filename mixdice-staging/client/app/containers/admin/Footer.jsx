import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              2019 &copy; MixDice by <a href="">Devs</a>
            </div>
            <div className="col-md-6">
              <div className="text-md-right footer-links d-none d-sm-block">
                <a href="javascript:void(0);">About Us</a>
                <a href="javascript:void(0);">Help</a>
                <a href="javascript:void(0);">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
