import React, { PureComponent } from 'react';
import AuthenticationTabs from 'app/containers/authentication/AuthenticationTabs';
import Modal from 'app/components/Modal';
interface Props {
  onSuccessLogin?: () => any;
  onSuccessRegister?: () => any;
}
type State = Readonly<{
  errors: string[];
  modalOpened: boolean;
}>;
class AuthenticationPageModal extends PureComponent<Props, State> {
  readonly state: State = {
    errors: [],
    modalOpened: true
  };
  handleModalClose = () => this.setState({ modalOpened: false });
  handleSignUp = (username, agreed) => {
    alert(username + ' ' + agreed);
  };
  handleLogIn = (email, password) => {
    alert(email + ' ' + password);
  };
  render() {
    const { modalOpened } = this.state;
    return (
      <div>
        <Modal isOpened={modalOpened} onClose={this.handleModalClose}>
          <AuthenticationTabs
            onSignUp={this.handleSignUp}
            onLogIn={this.handleLogIn}
          />
        </Modal>
      </div>
    );
  }
}

export default AuthenticationPageModal;
