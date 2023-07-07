const Bet = require('../../../models/bet');
const BetService = require('../../../objects/Bet');

const placeBet = async (obj, args, cx) => {
  const { user } = cx;
  const { betAmount, clientSeed, targetValue, isUnder } = args.input;
  const betService = new BetService(clientSeed, await Bet.countDocuments());
  const bet = await Bet.create({
    betAmount,
    targetValue,
    isUnder,
    clientSeed: betService.getClientSeed(),
    nonce: betService.getNonce(),
    serverSeedPlain: betService.getServerSeedPlain(),
    serverSeed: betService.getServerSeed(),
    result: betService.getResult(),
    user: user.id
  });
  return { bet };
};

const verifyBetResult = async (obj, args) => {
  const { clientSeed, serverSeed, nonce } = args.input;
  const betService = new BetService(clientSeed, nonce, serverSeed);
  return { result: betService.getResult() };
};

const betsHistory = async (obj, args, cx) => {
  const { limit } = args.input;
  const { user } = cx;
  let betsQuery = Bet.find({ user: user._id }).sort({ createdAt: -1 });
  if (limit) betsQuery = betsQuery.limit(limit);
  const bets = await betsQuery.exec();
  return { bet: bets };
};

module.exports = {
  query: { verifyBetResult, betsHistory },
  mutation: { placeBet }
};
