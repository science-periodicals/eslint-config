module.exports = {
  plugins: ['react', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'no-console': ['warn', { allow: ['error', 'warn', 'trace'] }],
    'no-unused-vars': ['error', { args: 'none', ignoreRestSiblings: true }],
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-bitwise': ['error', { allow: ['~'] }],
    'no-cond-assign': ['error', 'except-parens'],
    'no-restricted-syntax': ['error', 'WithStatement'],
    'react/no-find-dom-node': 'off'
  }
};
