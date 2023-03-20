module.exports = {
  env: {
    node: true,
    jest: true,
  },
  extends: ['plugin:import/recommended', 'airbnb-typescript/base'],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  }
}