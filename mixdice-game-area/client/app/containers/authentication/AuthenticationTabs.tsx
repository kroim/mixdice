import React from 'react';
import classNames from 'classnames';
import TabbedNavigation from 'app/components/form/tabs/TabbedNavigation';
import Signup from 'app/containers/authentication/signup/Signup';
import Login from 'app/containers/authentication/login/Login';

interface AuthenticationTabsProps {
  onSignUp: (email: string, password: string) => any;
  onLogIn: (email: string, agreed: boolean) => any;
  signUpUsernameError?: string;
  signUpAgreedError?: string;
  signUpError?: string;
  loginEmailError?: string;
  loginPasswordError?: string;
  loginError?: string;
}

const AuthenticationTabs: React.FC<AuthenticationTabsProps> = ({
  onSignUp,
  onLogIn
}) => {
  const tabs = [
    {
      id: 1,
      title: 'Sign up',
      content: <Signup onSubmit={onSignUp} />
    },
    {
      id: 2,
      title: 'Log in',
      content: <Login onSubmit={onLogIn} />
    }
  ];
  return <TabbedNavigation tabs={tabs} />;
};

export default AuthenticationTabs;
