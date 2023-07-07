import BigNumber from 'bignumber.js';
import moment from 'moment';
import uniqid from 'uniqid';
import currencyEnum from 'enums/currencyEnum';

export const user = {
  email: 'email@email.com',
  username: 'gamemaster',
  profileImageUrl: 'https://i.imgur.com/xnj8qJ9.png'
};
export const balance = [
  { currency: currencyEnum.BTC, amount: BigNumber('0.00030530') },
  { currency: currencyEnum.ETH, amount: BigNumber('0.00000546') },
  { currency: currencyEnum.LTC, amount: BigNumber('0.00043654') },
  { currency: currencyEnum.XRP, amount: BigNumber('0.00000054') },
  { currency: currencyEnum.NEO, amount: BigNumber('0.00000023') }
];
export const myBtcAmount = BigNumber('0.00030530');
export const betsHistory = [
  {
    betId: '29,432,234,456',
    time: new Date(),
    wagered: BigNumber('0.00005432'),
    payout: 0.0,
    game: 50.49,
    roll: 47.84,
    profit: BigNumber('-0.00005432')
  },
  {
    betId: '29,432,234,456',
    time: new Date(),
    wagered: BigNumber('0.00005432'),
    payout: 0.0,
    game: 50.49,
    roll: 47.84,
    profit: BigNumber('+0.00005432')
  },
  {
    betId: '29,432,234,456',
    time: new Date(),
    wagered: BigNumber('0.00005432'),
    payout: 0.0,
    game: 50.49,
    roll: 47.84,
    profit: BigNumber('+0.00005432')
  }
];
const fannyUser = {
  username: 'fannybennett',
  profileImageUrl:
    'https://freeiconshop.com/wp-content/uploads/edd/person-girl-flat.png'
};
const dogemamaUser = {
  username: 'dogemama',
  profileImageUrl: 'http://lorempixel.com/200/200/city/'
};
export const chatProps = {
  onlineUsers: 239,
  conversation: [
    {
      id: 1,
      email: 'email@email.com',
      message:
        'I can’t wait to discuess it with someone, but I don’t want to spoiler it…',
      date: moment().toDate(),
      user: fannyUser,
      isMe: false
    },
    {
      id: 2,
      email: 'email@email.com',
      message:
        'I can’t wait to discuess it with someone, but I don’t want to spoiler it…',
      date: moment().toDate(),
      user: dogemamaUser,
      isMe: false
    },
    {
      id: 3,
      email: 'email@email.com',
      message:
        'I can’t wait to discuess it with someone, but I don’t want to spoiler it…',
      date: moment().toDate(),
      user: user,
      isMe: true
    },
    {
      id: 4,
      message: 'yea, Anyway, good night and see you tomorrow at the office :)',
      date: moment().toDate(),
      user: user,
      isMe: true
    },
    {
      id: 5,
      message:
        'I can’t wait to discuess it with someone, but I don’t want to spoiler it…',
      date: moment().toDate(),
      user: dogemamaUser,
      isMe: false
    },
    {
      id: 6,
      message: 'yea, Anyway, good night and see you tomorrow at the office :)',
      date: moment().toDate(),
      user: user,
      isMe: true
    }
  ]
};
