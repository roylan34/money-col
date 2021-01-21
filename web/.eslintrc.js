module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true },
    ],
    'eslint-comments/no-unlimited-disable': 'off',
    // 'object-curly-spacing': 'always',
  },
  overrides: [
    {
      files: ['**/src/**/*.ts'],
      excludedFiles: '*.spec.ts',
      rules: {
        '@typescript-eslint/explicit-function-return-type': 2,
        // '@typescript-eslint/no-explicit-any': 2,
        '@typescript-eslint/no-non-null-assertion': 2,
      },
    },
  ],
};
