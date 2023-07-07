import React, { Component } from 'react';
import NavbarProfileMenu from './NavbarProfileMenu';
import Wallet from '../../../public/assets/svg/wallet.svg';
import Withdraw from '../../../public/assets/svg/withdraw.svg';
import classNames from 'classnames';
import Modal from '../modal/modal';
import { Button, Nav, NavItem } from 'reactstrap';
import ModalWithdraw from '../modal/ModalWithdraw';

export default class NavbarContent extends Component {
  state = {
    showModal: false,
    showWithdrawModal: false
  };

  showModalFn = () => {
    this.setState({
      showModal: true
    });
    document.body.style.overflow = 'hidden';
  };

  showWithdrawModalFn = () => {
    this.setState({
      showWithdrawModal: true
    });
    document.body.style.overflow = 'hidden';
  };

  // const NavbarContent = ({ className, email, ...props }) => (
  //   NavbarContent = ({ className, email, ...props }) => (

  // <>
  //     <Nav {...props} navbar className={classNames('ml-auto', props.className)}>
  //       <NavItem>
  //         <Button size="sm" color="primary">
  //           <Wallet />
  //           Deposit
  //         </Button>
  //       </NavItem>
  //       <NavItem>
  //         <Button size="sm" color="primary">
  //           <Withdraw />
  //           Withdraw
  //         </Button>
  //       </NavItem>
  //       <NavbarProfileMenu email={email} />
  //     </Nav>
  //   </>
  // );

  hideModalFn = () => {
    this.setState({
      showModal: false
    });
    document.body.style.overflow = '';
  };

  hideWithdrawModalFn = () => {
    this.setState({
      showWithdrawModal: false
    });
    document.body.style.overflow = '';
  };

  render() {
    return (
      <Nav
        {...this.props}
        navbar
        className={classNames('ml-auto', this.props.className)}
      >
        <NavItem>
          <Button onClick={this.showModalFn} color="primary">
            <Wallet />
            Deposit
          </Button>
        </NavItem>
        <NavItem>
          <Button onClick={this.showWithdrawModalFn} color="primary">
            <Withdraw />
            Withdraw
          </Button>
        </NavItem>
        <NavbarProfileMenu />
        {this.state.showModal && <Modal close={this.hideModalFn} />}
        {this.state.showWithdrawModal && (
          <ModalWithdraw cloSe={this.hideWithdrawModalFn} />
        )}
        {/* <ModalWithdraw/> */}
      </Nav>
    );
  }
}
