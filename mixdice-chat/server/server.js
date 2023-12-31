const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressGraphQL = require('express-graphql');
const cors = require('cors');
const historyApiFallback = require('connect-history-api-fallback');
const mongoose = require('mongoose');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const User = require('./models/user');
const graphQLSchema = require('./graphql/schema');
const graphQLResolvers = require('./graphql/resolvers');
const config = require('../config/config');
const webpackConfig = require('../webpack.config');

const isDev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 8000;

// Configuration
// ================================================================================================

// Set up Mongoose
mongoose.connect(isDev ? config.db_dev : config.db, {
  useFindAndModify: false
});
mongoose.Promise = global.Promise;

const app = express();
app.use(cookieParser());
app.use(cors(), bodyParser.json());

app.use(
  '/graphql',
  expressGraphQL(async request => ({
    schema: graphQLSchema,
    context: await (async () => {
      const { token } = request.cookies;
      return { user: await User.findByToken(token) };
    })(),
    graphiql: true
  }))
);

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// API routes
require('./routes')(app);

if (isDev) {
  const compiler = webpack(webpackConfig);

  app.use(
    historyApiFallback({
      verbose: false
    })
  );

  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      contentBase: path.resolve(__dirname, '../client/public'),
      stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false
      }
    })
  );

  app.use(webpackHotMiddleware(compiler));
  app.use(express.static(path.resolve(__dirname, '../dist')));
} else {
  app.use(express.static(path.resolve(__dirname, '../dist')));
  app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../dist/index.html'));
    res.end();
  });
}

app.listen(port, '0.0.0.0', err => {
  if (err) {
    console.log(err);
  }

  console.info('>>> 🌎 Open http://0.0.0.0:%s/ in your browser.', port);
});

module.exports = app;
