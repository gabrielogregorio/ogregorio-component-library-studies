module.exports = {
  root: true,
  extends: ['plugin:prettier/recommended', 'plugin:react/recommended', 'prettier'],

  parser: '@typescript-eslint/parser',

  plugins: ['react-hooks', '@typescript-eslint', 'react', 'sonarjs', 'import'],

  rules: {
    'react-hooks/exhaustive-deps': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/extensions': 'off',
    'no-shadow': 'off',
    'react/jsx-filename-extension': [0],
    'react-hooks/rules-of-hooks': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/require-default-props': [2, { functions: 'defaultArguments' }],
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-shadow': ['error'],
    'max-params': ['error', { max: 5 }],
    'no-alert': 'error',
    'no-delete-var': 'error',
    'no-const-assign': 'error',
    'no-unreachable': 'error',
    '@typescript-eslint/no-redeclare': 'error',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'import/prefer-default-export': 'off',
    'import/no-unused-modules': [2, { unusedExports: true }],
    'no-underscore-dangle': ['error', { allow: ['_ignore'] }],
    'id-length': [2, { properties: 'never', min: 3, exceptions: ['id', 'H1', 'h1', 'h2', 'H2', 'h3', 'H3', 'P', 'p'] }],
  },

  env: {
    jest: true,
  },
};
