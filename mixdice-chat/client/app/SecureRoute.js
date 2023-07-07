import React from 'react';
import { Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

export default function authorize() {
  return function (WrappedComponent) {
    const isPasswordSet = Cookies.get('password');

    return class extends React.Component {
      render() {
        if (isPasswordSet) {
          return <WrappedComponent {...this.props} />;
        } else {
          return <Redirect to={`/set-password?redirect=${encodeURIComponent(location.href)}`} />;
        }
      }
    }
  }
}
