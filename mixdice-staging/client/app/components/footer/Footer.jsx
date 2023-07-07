import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import LanguageDropdown from './LanguageDropdown';
import Logo from 'assets/svg/logo-full.svg';
import FacebookLogo from 'assets/svg/facebook.svg';
import TwitterLogo from 'assets/svg/twitter.svg';
import MobileFooter from 'app/components/footer/mobile/MobileFooter.tsx';

const Footer = ({
  mobileFooterProps,
  languages,
  onLanguageSelect,
  selectedLanguageId
}) => (
  <>
    <MobileFooter {...mobileFooterProps} />
    <footer className={classNames('footer')}>
      {/*<Logo className={classNames('footer__logo')} />*/}
      <div className={classNames('footer__bottom-content')}>
        <Row>
          <Col lg={4}>
            <ul className={classNames('footer__bottom-content__menu-list')}>
              <li className={classNames('footer__bottom-content__list-item')}>
                <Link to="#">Terms of use</Link>
              </li>
              <li className={classNames('footer__bottom-content__list-item')}>
                <Link to="#">Privacy Policy</Link>
              </li>
              <li className={classNames('footer__bottom-content__list-item')}>
                <Link to="#">About</Link>
              </li>
              <li className={classNames('footer__bottom-content__list-item')}>
                <Link to="#">FAQ</Link>
              </li>
              <li className={classNames('footer__bottom-content__list-item')}>
                <LanguageDropdown
                  onClick={onLanguageSelect}
                  selectedLanguageId={selectedLanguageId}
                  languages={languages}
                />
              </li>
            </ul>
          </Col>
          <Col lg={4}>
            <div className={classNames('footer__bottom-content__copyright')}>
              © 2019 MixDice. All Rights Reserved.
            </div>
          </Col>
          <Col lg={4}>
            <ul
              className={classNames(
                'footer__bottom-content__menu-list footer__bottom-content__menu-list--align-right'
              )}
            >
              <li className={classNames('footer__bottom-content__list-item')}>
                <Link to="#">Follow us</Link>
              </li>
              <li className={classNames('footer__bottom-content__list-item')}>
                <Link to="#">
                  <FacebookLogo />
                </Link>
              </li>
              <li className={classNames('footer__bottom-content__list-item')}>
                <Link to="#">
                  <TwitterLogo />
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </footer>
  </>
);
Footer.propTypes = {
  mobileFooterProps: PropTypes.object,
  languages: LanguageDropdown.propTypes.languages,
  onLanguageSelect: LanguageDropdown.propTypes.onClick,
  selectedLanguageId: LanguageDropdown.propTypes.selectedLanguageId
};

Footer.defaultProps = {
  mobileFooterProps: {}
};
export default Footer;
