module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['warn', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'multiline-const' },
      { blankLine: 'always', prev: 'const', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'export' },
      { blankLine: 'any', prev: 'export', next: 'export' },
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'never', prev: 'import', next: 'import' },
      { blankLine: 'always', prev: '*', next: 'multiline-expression' },
    ],
    'key-spacing': ['error', { afterColon: true }],
    'comma-spacing': ['error', { before: false, after: true }],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['warn', 'always'],
    'no-trailing-spaces': ['error', { ignoreComments: true }],
    'react/jsx-max-props-per-line': ['error', { when: 'multiline' }],
    'arrow-body-style': ['error', 'as-needed'],
    'multiline-ternary': ['error', 'always-multiline'],
    'space-infix-ops': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
