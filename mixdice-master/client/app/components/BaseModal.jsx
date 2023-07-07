import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import NavbarBrand from 'app/components/header/NavbarBrand';
import BaseTab from './BaseTab';

class BaseModal extends React.Component {
  static propTypes = {
    className: PropTypes.string
  };

  state = {
    modal: true,
    centered: true,
    backdrop: 'static'
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  render() {
    const { modal, centered, backdrop } = this.state;
    const { className } = this.props;
    return (
      <div>
        <Modal
          isOpen={modal}
          centered={centered}
          fade={false}
          toggle={this.toggle}
          className={className}
          backdrop={backdrop}
        >
          <ModalHeader>
            <NavbarBrand />
          </ModalHeader>
          <ModalBody>
            <BaseTab />
          </ModalBody>
          <ModalFooter></ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default BaseModal;
