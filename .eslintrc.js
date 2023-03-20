module.exports = {
  env: {
    node: true,
    jest: true,
  },
  extends: ['plugin:import/recommended', 'airbnb', 'airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'import/extensions': ['off']
  }
}