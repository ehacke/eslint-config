import sortKeysFix from 'eslint-plugin-sort-keys-fix';

export default {
  plugins: { 'sort-keys-fix': sortKeysFix },
  extends: ['airbnb-base', 'plugin:prettier/recommended', 'plugin:unicorn/recommended', 'prettier', 'prettier/unicorn'],
  rules: {
    'sort-keys-fix/sort-keys-fix': 'error',
  },
};
