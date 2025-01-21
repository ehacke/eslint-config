import sortKeysFix from 'eslint-plugin-sort-keys-fix';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  allConfig: js.configs.all,
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

export default [
  ...compat.extends('airbnb-base', 'plugin:prettier/recommended', 'plugin:unicorn/recommended', 'prettier'),
  {
    plugins: {
      'sort-keys-fix': sortKeysFix,
    },

    rules: {
      'no-underscore-dangle': 'off',
      'sort-keys-fix/sort-keys-fix': 'error',
    },
  },
];
