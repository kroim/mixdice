import React from 'react';
import TabbedNavigation from 'app/components/form/tabs/TabbedNavigation';
import Signup from 'app/containers/authentication/signup/Signup';
import Login from 'app/containers/authentication/login/Login';

interface AuthenticationTabsProps {
  onSignUp: (email: string, agreed: boolean) => any;
  onLogIn: (email: string, password: string) => any;
  errorMsg: string;
  proceeding?: boolean;
  selectedTab: number;
}

const AuthenticationTabs: React.FC<AuthenticationTabsProps> = ({
  onSignUp,
  onLogIn,
  errorMsg,
  proceeding,
  selectedTab
}) => {
  const tabs = [
    {
      id: 1,
      title: 'Sign up',
      url: '/sign-up',
      content: (
        <Signup
          onSubmit={onSignUp}
          errorMsg={errorMsg}
          proceeding={proceeding}
        />
      )
    },
    {
      id: 2,
      title: 'Login',
      url: '/login',
      content: (
        <Login onSubmit={onLogIn} errorMsg={errorMsg} proceeding={proceeding} />
      )
    }
  ];
  return <TabbedNavigation tabs={tabs} initialActiveId={selectedTab} />;
};

export default AuthenticationTabs;
