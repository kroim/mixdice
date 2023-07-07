import React, { PureComponent } from 'react';
import Modal from 'app/components/Modal';
import classNames from 'classnames';
import EmailSetting from './tabs/EmailSetting';
import SettingsIcon from 'assets/svg/settings.svg';
import { Redirect } from 'react-router-dom';
import { withSetUserInfo } from 'app/providers/Auth';

interface Props {
  username: string;
  email: string;
  setUserInfo: (object) => any;
}
type State = Readonly<{
  modalOpened: boolean;
}>;
@withSetUserInfo
class EmailSettingModal extends PureComponent<Props, State> {
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
    const { email, setUserInfo } = this.props;
    if (!modalOpened) {
      return <Redirect to="/" />;
    }
    return (
      <Modal
        className={classNames('settings-modal modal--no-collapse')}
        icon={<SettingsIcon />}
        title="Set Email"
        isOpened={modalOpened}
        onClose={this.handleModalClose}
      >
        <div className={classNames('settings')}>
          <EmailSetting email={email} onSetInfo={setUserInfo} />
        </div>
      </Modal>
    );
  }
}

export default EmailSettingModal;
