import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';

import AuthenticationTabs from 'app/containers/authentication/AuthenticationTabs';
import Modal from 'app/components/Modal';
import { withCreateUser, withLogin } from 'app/providers/Auth';
import { Messages, Auth } from 'app/utils';

interface Props {
  history: any;
  type: number;
  onSuccessLogin?: () => any;
  onSuccessRegister?: () => any;
  createUser: (object) => any;
  setUser: (object) => any;
  login: (object) => any;
}
type State = Readonly<{
  errors: string[];
  modalOpened: boolean;
  errorMsg: string;
  proceeding: boolean;
}>;
@withCreateUser
@withLogin
@withRouter
class AuthenticationPageModal extends PureComponent<Props, State> {
  readonly state: State = {
    errors: [],
    modalOpened: true,
    errorMsg: '',
    proceeding: false
  };
  handleModalClose = () => this.setState({ modalOpened: false });
  handleSignUp = (username, agreed) => {
    this.setState({ proceeding: true });
    if (!agreed) {
      this.setState({
        errorMsg: Messages.signup.noAgreement,
        proceeding: false
      });
      return;
    }

    this._signupUser(username);
  };
  _signupUser = async (username: string): Promise<any> => {
    try {
      const { data } = await this.props.createUser({
        variables: {
          username
        }
      });
      const { token, _id } = data.createUser;

      Auth.setUser(_id, username, token);
      this.props.setUser({
        name: username,
        token: token
      });
      this.props.history.push('/');
    } catch (err) {
      console.log(err);
      this.setState({ errorMsg: err.message, proceeding: false });
    }
  };
  handleLogIn = (username, password) => {
    this._signinUser(username, password);
  };
  _signinUser = async (
    inputEmail: string,
    inputPassword: string
  ): Promise<any> => {
    try {
      const { data } = await this.props.login({
        variables: {
          email: inputEmail,
          password: inputPassword
        }
      });
      const {
        login: { _id, username, token, email, password }
      } = data;
      const isAdmin = email === 'ppk7@pm.me';
      Auth.setUser(_id, username, token, email, password, isAdmin);
      this.props.setUser({
        name: username,
        token,
        email,
        password,
        isAdmin
      });
      this.props.history.push('/');
    } catch (err) {
      console.log(err);
      this.setState({ errorMsg: err.message, proceeding: false });
    }
  };
  render() {
    const { modalOpened, errorMsg, proceeding } = this.state;
    const { type } = this.props;
    return (
      <div>
        <Modal isOpened={modalOpened} onClose={this.handleModalClose}>
          <AuthenticationTabs
            onSignUp={this.handleSignUp}
            onLogIn={this.handleLogIn}
            errorMsg={errorMsg}
            proceeding={proceeding}
            selectedTab={type}
          />
        </Modal>
      </div>
    );
  }
}

export default AuthenticationPageModal;
