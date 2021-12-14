module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  extends: [
    'react-app',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
    'plugin:testing-library/react',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jxs: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [],
  root: true,
  rules: {
    'quotes': [2, 'single'],
    'semi': [2, 'never'],
    'no-duplicate-imports': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
