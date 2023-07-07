# MERN-boilerplate

This is a boilerplate project using the following technologies:

- [React](https://facebook.github.io/react/) and [React Router](https://reacttraining.com/react-router/) for the frontend
- [Express](http://expressjs.com/) and [Mongoose](http://mongoosejs.com/) for the backend
- [Sass](http://sass-lang.com/) for styles (using the SCSS syntax)
- [Webpack](https://webpack.github.io/) for compilation

## Requirements

- [Node.js](https://nodejs.org/en/) 6+

```shell
npm install
```

## Running

Make sure to add a `config.js` file in the `config` folder. See the example there for more details.

Production mode:

```shell
npm start
```

Development (Webpack dev server) mode:

```shell
npm run start:dev
```

## Frontend coding standards

- we are using BEM methodology to create custom classes that overrides the default bootstrap behaviour
- typescript
- reactstrap
- scss

## Meta

Commands used to setup the server

```bash

sudo apt install nodejs -y
sudo apt install npm -y
sudo apt install mongodb -y
sudo npm i -g pm2

ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
cat ~/.ssh/id_rsa.pub

git clone git@gitlab.com:loopyfruits/mixdice.git
git clone git@gitlab.com:loopyfruits/mixdice.git staging
```

pm2 config

```js
module.exports = {
  apps: [
    {
      name: 'mixdice-prod',
      script: 'npm',
      args: 'start',
      cwd: '/root/mixdice/',
      env: {
        PORT: '80'
      }
    },
    {
      name: 'mixdice-staging',
      script: 'npm',
      args: 'start',
      cwd: '/root/staging/',
      env: {
        PORT: '81'
      }
    }
  ]
};
```
