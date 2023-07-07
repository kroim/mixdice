import React, { PureComponent } from 'react';
import Modal from 'app/components/Modal';
import classNames from 'classnames';
import Settings from './Settings';
import SettingsIcon from 'assets/svg/settings.svg';
import { Redirect } from 'react-router-dom';
import { withSetUserInfo } from 'app/providers/Auth';

interface Props {
  email: string;
  username: string;
  setUserInfo: (object) => any;
}
type State = Readonly<{
  modalOpened: boolean;
}>;
@withSetUserInfo
class SettingsModal extends PureComponent<Props, State> {
  readonly state: State = {
    modalOpened: true
  };
  handleModalClose = () => this.setState({ modalOpened: false });
  handleSetInfo = async input => {
    console.log(this.props);
    this.props.setUserInfo({
      variables: {
        input
      }
    });
  };
  render() {
    const { modalOpened } = this.state;
    const { email } = this.props;
    if (!modalOpened) {
      return <Redirect to="/" />;
    }
    return (
      <Modal
        className={classNames('settings-modal modal--no-collapse')}
        icon={<SettingsIcon />}
        title="Settings"
        isOpened={modalOpened}
        onClose={this.handleModalClose}
      >
        <Settings email={email} onSetInfo={this.handleSetInfo} />
      </Modal>
    );
  }
}

export default SettingsModal;
