const { BET_PLACED } = require('../../../enums/subscriptionMessageEnum');
const Bet = require('../../../models/bet');
const BetService = require('../../../objects/BetService');
const pubSub = require('../../pubSub');
const { withFilter } = require('graphql-subscriptions');
const { AVAILABLE_CURRENCIES } = require('../../../../constants');
const Bignumber = require('bignumber.js');

const placeBet = async (obj, args, { user, pubsub }) => {
  const { betAmount, clientSeed, targetValue, isUnder } = args.input;

  const currentAmount = new Bignumber(
    (await user.getBalance(AVAILABLE_CURRENCIES.BTC)).amount
  );
  if (currentAmount.lt(new Bignumber(betAmount)))
    throw new Error(`Not enough credits!`);

  const betService = new BetService(
    clientSeed,
    await Bet.countDocuments(),
    user.serverSeedPlain
  );

  const bet = await Bet.create({
    betAmount,
    targetValue,
    isUnder,
    clientSeed: betService.getClientSeed(),
    nonce: betService.getNonce(),
    serverSeedPlain: betService.getServerSeedPlain(),
    serverSeed: betService.getServerSeed(),
    result: betService.getResult(),
    transactionAmount: betService.getTransactionAmount(
      betAmount,
      targetValue,
      isUnder
    ),
    user: user.id
  });
  user.serverSeedPlain = BetService.generateServerSeed();
  await user.save();
  await user.updateBalance(bet.currency, bet.transactionAmount);
  pubsub.publish(BET_PLACED, { betPlaced: bet, userId: user.id });
  return { bet };
};

const verifyBetResult = async (obj, args) => {
  const { clientSeed, serverSeed, nonce } = args.input;
  const betService = new BetService(clientSeed, nonce, serverSeed);
  return { result: betService.getResult() };
};

const betsHistory = async (obj, { input }) => {
  const { limit, userId } = input;
  let betsQuery = Bet;
  if (userId) {
    betsQuery = betsQuery.find({ user: userId });
  } else {
    betsQuery = betsQuery.find();
  }
  betsQuery = betsQuery.sort({ createdAt: -1 });
  if (limit) betsQuery = betsQuery.limit(limit);
  const bets = await betsQuery.exec();
  return { bet: bets };
};

const betPlaced = {
  subscribe: withFilter(
    () => pubSub.asyncIterator(BET_PLACED),
    (payload, { input }) => {
      const { userId } = input;
      if (!userId) return true;
      return payload.betPlaced.user.toString() === userId;
    }
  )
};

module.exports = {
  query: { verifyBetResult, betsHistory },
  mutation: { placeBet },
  subscription: { betPlaced }
};
