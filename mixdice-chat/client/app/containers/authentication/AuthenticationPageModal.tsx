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
      const res = await this.props.createUser({
        variables: {
          username
        }
      });

      Auth.setUser(username, res.data.createUser.token);
      this.props.setUser({
        name: username,
        token: res.data.createUser.token
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
  _signinUser = async (email: string, password: string): Promise<any> => {
    try {
      const res = await this.props.login({
        variables: {
          email,
          password
        }
      });

      Auth.setUser(
        res.data.login.username,
        res.data.login.token,
        res.data.login.email,
        res.data.login.password
      );
      this.props.setUser({
        name: res.data.login.username,
        token: res.data.login.token,
        email: res.data.login.email,
        password: res.data.login.password
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
