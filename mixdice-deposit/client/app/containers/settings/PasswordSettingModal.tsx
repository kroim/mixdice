import React, { PureComponent } from 'react';
import Modal from 'app/components/Modal';
import classNames from 'classnames';
import PasswordSetting from './tabs/PasswordSetting';
import SettingsIcon from 'assets/svg/settings.svg';
import { Redirect } from 'react-router-dom';
import { withSetUserInfo } from 'app/providers/Auth';

interface Props {
  username: string;
  setUserInfo: (object) => any;
}
type State = Readonly<{
  modalOpened: boolean;
}>;
@withSetUserInfo
class PasswordSettingModal extends PureComponent<Props, State> {
  readonly state: State = {
    modalOpened: true
  };
  handleModalClose = () => this.setState({ modalOpened: false });
  handleSetInfo = async info => {
    const { username } = this.props;
    console.log(this.props);
    this.props.setUserInfo({
      variables: {
        username,
        info
      }
    });
  };
  render() {
    const { modalOpened } = this.state;
    if (!modalOpened) {
      return <Redirect to="/" />;
    }
    return (
      <Modal
        className={classNames('settings-modal modal--no-collapse')}
        icon={<SettingsIcon />}
        title="Set Password"
        isOpened={modalOpened}
        onClose={this.handleModalClose}
      >
        <div className={classNames('settings')}>
          <PasswordSetting onSetInfo={this.props.setUserInfo} />
        </div>
      </Modal>
    );
  }
}

export default PasswordSettingModal;
