const User = require('../../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const helper = require('../../../helper');

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

async function setUserInfo(obj, args) {
  const { username, info } = args;
  try {
    switch (info.key) {
      case 'email':
        if (!validator.isEmail(info.value)) throw new Error('Invalid email.');
        info.value = info.value.toLowerCase();
        break;
      case 'password':
        info.value = await bcrypt.hash(info.value, 10);
        break;
    }

    const user = await User.findOneAndUpdate(
      { username },
      { [info.key]: info.value }
    );

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

module.exports = {
  mutation: {
    createUser,
    login,
    setUserInfo
  },
  query: {
    verifyToken,
    getName
  }
};
