import Cookies from 'js-cookie';

export default class Seed {
  static get = () => {
    let seed = Cookies.get('client-seed');
    if (!seed) seed = Seed.set(Seed.create());
    return seed;
  };
  static set = value => {
    Cookies.set('client-seed', value);
    return value;
  };
  static create = () =>
    Math.random()
      .toString(36)
      .substring(2);
}
