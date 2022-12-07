module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['react-app'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/extensions': 'off',
    'linebreak-style': ['warn', 'unix'],
    // 'comma-dangle': 'off',
    'arrow-parens': 'off',
    semi: 'warn',
    quotes: ['warn', 'single'],
    'quote-props': ['warn', 'as-needed'],
    camelcase: 'off',
    'max-len': ['warn', { code: 100, ignoreStrings: true, ignoreUrls: true }],
    'operator-linebreak': [
      'warn',
      'after',
      {
        overrides: { '?': 'before', ':': 'before' },
      },
    ],
    'object-curly-newline': [
      'warn',
      {
        ObjectExpression: { consistent: true },
        ObjectPattern: { multiline: true },
        ImportDeclaration: { multiline: true, minProperties: 6 },
        ExportDeclaration: { multiline: true, minProperties: 3 },
      },
    ],
    'implicit-arrow-linebreak': ['warn', 'beside'],
    'array-element-newline': 'off',
    'no-trailing-spaces': 'warn',
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {},
    },
  ],
};
