const User = require('../../../models/user');
const Wallet = require('../../../models/wallet');
const jwt = require('jsonwebtoken');
const helper = require('../../../helper');
const startBTCWebhookHandler = require('../../../utils/startWebhookHandler');
const BetService = require('../../../objects/BetService');

require('dotenv').config();

async function getName(obj, args) {
  var username = helper.generateName();
  const existingUser = await User.findOne({ username });

  if (existingUser) {
    const currentSeconds = new Date().getTime() / 1000;
    username += currentSeconds.toString();
  }

  return username;
}

async function createUser(obj, args) {
  try {
    const { username } = args;

    if (username.length > 14)
      throw new Error('Username is too long. It must be 14 chars at maximum.');

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      throw new Error('User with the username already exists!');
    }

    const user = new User({ username }, err => {
      if (err) throw err;
    });

    user.save();

    const token = jwt.sign({ id: user._id }, process.env.SECRET);

    return { token, password: null, ...user._doc };
  } catch (err) {
    throw err;
  }
}

async function setUserInfo(obj, { input }, { user }) {
  try {
    console.log(input);
    user = await User.findOneAndUpdate({ _id: user._id }, input);
    console.log(user);
    return { password: user.password !== null, ...user._doc };
  } catch (err) {
    throw err;
  }
}

async function login(obj, args) {
  const { email, password } = args;
  try {
    let user;
    if (!validator.isEmail(email)) {
      user = await User.findOne({ username: email });
    } else {
      user = await User.findOne({ email: email.toLowerCase() });
    }

    if (!user) throw new Error('User does not exist.');

    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) throw new Error('Password incorrect.');

    const wallet = Wallet.findOne({ user });
    if (wallet.address) {
      startBTCWebhookHandler(wallet.address, 'unconfirmed-tx');
      startBTCWebhookHandler(wallet.address, 'confirmed-tx');
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET);

    return { token, password: null, ...user._doc };
  } catch (err) {
    throw err;
  }
}

async function verifyToken(obj, args) {
  const { token } = args;
  try {
    const user = await User.findByToken(token);
    return { ...user._doc, password: null };
  } catch (err) {
    throw err;
  }
}

async function me(_, __, { user }) {
  return user;
}
async function serverSeed(_, __, { user }) {
  return BetService.hashText(user.serverSeedPlain);
}
module.exports = {
  mutation: {
    createUser,
    login,
    setUserInfo
  },
  query: {
    verifyToken,
    getName,
    me,
    serverSeed
  }
};
