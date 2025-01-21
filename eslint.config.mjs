export default {
  plugins: ['sort-keys-fix'],
  extends: ['airbnb-base', 'plugin:prettier/recommended', 'plugin:unicorn/recommended', 'prettier', 'prettier/unicorn'],
  rules: {
    'sort-keys-fix/sort-keys-fix': 'error',
  },
};
