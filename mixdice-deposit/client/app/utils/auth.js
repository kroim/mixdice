import Cookies from 'js-cookie';

const Auth = {
  setUser: (_id, name, token, email = null, password = false) => {
    Cookies.set('userId', _id);
    Cookies.set('name', name);
    Cookies.set('token', token);

    if (email) {
      Cookies.set('email', email);
    }

    Cookies.set('password', password);
  },
  getUser: () => {
    return {
      userId: Cookies.get('userId'),
      name: Cookies.get('name'),
      token: Cookies.get('token'),
      email: Cookies.get('email'),
      password: Cookies.get('password')
    };
  },
  getToken: () => {
    return Cookies.get('token');
  },
  logout: () => {
    Cookies.remove('userId');
    Cookies.remove('name');
    Cookies.remove('token');
    Cookies.remove('email');
    Cookies.remove('password');
  }
};

export default Auth;
