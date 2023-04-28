const { init } = require('@fullstacksjs/eslint-config/init');

module.exports = init({
  modules: {
    auto: true,
    esm: true,
    graphql: true,
    typescript: {
      parserProject: ['./tsconfig.eslint.json'],
      resolverProject: ['./tsconfig.json'],
    },
  },
  // configurations
  root: true,
  extends: ['@fullstacksjs'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'max-lines-per-function': 'off',
  },
});
