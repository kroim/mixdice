import React, { PureComponent } from 'react';
import { Alert, Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import Modal from 'app/components/Modal';
import classNames from 'classnames';
import SettingsIcon from 'assets/svg/settings.svg';
import { Redirect } from 'react-router-dom';
import { messages } from 'app/utils/misc';

interface Props {
  action: string;
  history: any;
}
type State = Readonly<{
  modalOpened: boolean;
}>;
@withRouter
class NoPasswordModal extends PureComponent<Props, State> {
  readonly state: State = {
    modalOpened: true
  };
  handleModalClose = () => this.setState({ modalOpened: false });

  render() {
    const { modalOpened } = this.state;
    const { action, history } = this.props;
    const message = messages[action].noPassword;
    if (!modalOpened) {
      return <Redirect to="/" />;
    }
    return (
      <Modal
        className={classNames('settings-modal modal--no-collapse')}
        icon={<SettingsIcon />}
        title="Security Warning"
        isOpened={modalOpened}
        onClose={this.handleModalClose}
      >
        <div className={classNames('settings')}>
          <Alert color="primary">{message}</Alert>
          <Button
            onClick={() => history.push(`/${action}`)}
            className={classNames('settings__confirm-button')}
          >
            Confirm
          </Button>
          <Button
            onClick={() => history.push('/set-password')}
            className={classNames('settings__confirm-button')}
          >
            Set Password
          </Button>
        </div>
      </Modal>
    );
  }
}

export default NoPasswordModal;
