module.exports = {
  env: {
    node: true
  },
  parser: 'babel-eslint',
  extends: 'prettier',
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error'
  }
};
