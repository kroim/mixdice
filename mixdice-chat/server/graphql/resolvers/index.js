const authHandlers = require('./handleGenerators/auth');
const betHandlers = require('./handleGenerators/bet');
const chatHandlers = require('./handleGenerators/chat');
const authDirectivesHandlers = require('./directives/auth');
const depositHandlers = require('./handleGenerators/deposit');

const query = {
  ...authHandlers.query,
  ...betHandlers.query
};

const mutation = {
  ...authHandlers.mutation,
  ...betHandlers.mutation,
  ...depositHandlers.mutation
};

const directive = {
  ...authDirectivesHandlers
};

const subscription = {
  ...betHandlers.subscription,
  ...chatHandlers.subscription
};

module.exports = {
  query,
  mutation,
  directive,
  subscription
};
