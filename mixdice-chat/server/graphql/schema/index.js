const {
  query,
  mutation,
  directive,
  subscription
} = require('../../graphql/resolvers/index');
const User = require('../../models/user');
const path = require('path');
const fs = require('fs');
const { mergeStrings } = require('gql-merge');
const { makeExecutableSchema } = require('graphql-tools');

const readData = dir => {
  const filesDir = path.resolve(__dirname, dir);
  const stats = fs.lstatSync(filesDir);
  if (stats.isFile()) {
    return fs.readFileSync(filesDir, 'utf-8');
  }
  const data = fs
    .readdirSync(filesDir)
    .map(file => fs.readFileSync(path.join(filesDir, file), 'utf-8'));
  return mergeStrings(data);
};

const schema = `
  ${readData('types')}
  ${readData('payloads')}
  ${readData('inputs')}
  ${readData('directives')}
  ${readData('query.graphql')}
  ${readData('mutation.graphql')}  
`;
//  ${readData('subscription.graphql')}
module.exports = makeExecutableSchema({
  typeDefs: schema,
  schemaDirectives: directive,
  resolvers: {
    Query: query,
    Mutation: mutation,
    // Subscription: subscription,
    // todo move these in separate files
    Bet: {
      async user(obj) {
        const { user: user_id } = obj;
        return User.findOne(user_id);
      }
    }
  }
});
