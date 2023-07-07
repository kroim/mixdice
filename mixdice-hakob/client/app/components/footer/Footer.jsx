import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import LanguageSelector from './LanguageSelector';
import Logo from 'assets/svg/logo-full.svg';
import FacebookLogo from 'assets/svg/facebook.svg';
import TwitterLogo from 'assets/svg/twitter.svg';
import MobileFooter from 'app/components/footer/MobileFooter.tsx';

const Footer = props => {
  console.log(props.show);
  return (
    <>
      <MobileFooter show={props.show} />
      <footer className={classNames('footer')}>
        <Logo className={classNames('footer__logo')} />
        <div className={classNames('footer__bottom-content')}>
          <Row>
            <Col lg={4}>
              <ul className={classNames('footer__bottom-content__menu-list')}>
                <li
                  className={classNames(
                    'footer__bottom-content__menu-list__list-item'
                  )}
                >
                  <Link to="#">Terms of use</Link>
                </li>
                <li
                  className={classNames(
                    'footer__bottom-content__menu-list__list-item'
                  )}
                >
                  <Link to="#">Privacy Policy</Link>
                </li>
                <li
                  className={classNames(
                    'footer__bottom-content__menu-list__list-item'
                  )}
                >
                  <Link to="#">About</Link>
                </li>
                <li
                  className={classNames(
                    'footer__bottom-content__menu-list__list-item'
                  )}
                >
                  <Link to="#">FAQ</Link>
                </li>
                <li
                  className={classNames(
                    'footer__bottom-content__menu-list__list-item'
                  )}
                >
                  <LanguageSelector />
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
                <li
                  className={classNames(
                    'footer__bottom-content__menu-list__list-item'
                  )}
                >
                  <Link to="#">Follow us</Link>
                </li>
                <li
                  className={classNames(
                    'footer__bottom-content__menu-list__list-item'
                  )}
                >
                  <Link to="#">
                    <FacebookLogo />
                  </Link>
                </li>
                <li
                  className={classNames(
                    'footer__bottom-content__menu-list__list-item'
                  )}
                >
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
};

export default Footer;
