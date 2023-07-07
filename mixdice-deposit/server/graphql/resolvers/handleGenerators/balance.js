const { withFilter } = require('graphql-subscriptions');
const { BALANCE_CHANGED } = require('../../../enums/subscriptionMessageEnum');
const pubSub = require('../../pubSub');

const balanceChanged = {
  subscribe: withFilter(
    () => pubSub.asyncIterator(BALANCE_CHANGED),
    (payload, { input }) => {
      return true;
    }
  )
};
module.exports = {
  query: {},
  mutation: {},
  subscription: { balanceChanged }
};
