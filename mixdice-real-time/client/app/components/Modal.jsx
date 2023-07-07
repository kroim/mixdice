import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Modal as BootstrapModal, ModalBody } from 'reactstrap';
import NavbarBrand from 'app/components/header/NavbarBrand';
import Close from 'assets/svg/close.svg';

class Modal extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    isOpened: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
    icon: PropTypes.node
  };
  static defaultProps = {
    className: '',
    isOpened: false,
    title: '',
    icon: null
  };

  state = {
    modal: true
  };

  render() {
    const { className, isOpened, onClose, children, title, icon } = this.props;
    const modalTitle = (
      <div className={classNames('modal-header__container')}>
        <div className={classNames('modal-header__content')}>
          {icon && (
            <div className={classNames('modal-header__icon')}>{icon}</div>
          )}
          <div className={classNames('modal-header__title')}>{title}</div>
        </div>
        <div onClick={onClose} className={classNames('modal-header__close')}>
          <Close />
        </div>
      </div>
    );
    return (
      <BootstrapModal
        isOpen={isOpened}
        centered
        fade={false}
        toggle={onClose}
        className={className}
        backdrop={'static'}
      >
        <div
          className={classNames('modal-header', {
            'modal-header--text': !!title
          })}
        >
          {title ? modalTitle : <NavbarBrand />}
        </div>
        <ModalBody>{children}</ModalBody>
      </BootstrapModal>
    );
  }
}

export default Modal;
