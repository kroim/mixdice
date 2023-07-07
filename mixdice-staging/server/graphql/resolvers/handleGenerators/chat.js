const {
  CHAT_MESSAGE_POSTED
} = require('../../../enums/subscriptionMessageEnum');

const messagePosted = {
  subscribe: (_, __, { pubsub }) => {
    pubsub.asyncIterator(CHAT_MESSAGE_POSTED);
  }
};
const sendChatMessage = async (_, { input }, { pubsub }) => {
  const { message } = input;
  pubsub.publish(CHAT_MESSAGE_POSTED, { message });
  return { success: true };
};
module.exports = {
  mutation: {
    sendChatMessage
  },
  subscription: {
    messagePosted
  }
};
