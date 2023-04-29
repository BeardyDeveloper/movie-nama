const { init } = require('@fullstacksjs/eslint-config/init');

module.exports = init({
  modules: {
    auto: true,
    react: 'next',
    esm: true,
    graphql: true,
    import: true,
    typescript: {
      resolverProject: ['./tsconfig.json'],
    },
  },
  // configurations
  root: true,
  extends: ['@fullstacksjs'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'max-lines-per-function': 'off',
    'import/no-cycle': 'off',
    'fp/no-let': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: ['tsconfig.json'],
      },
    },
  },
});
