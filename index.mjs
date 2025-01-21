import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import sonarjs from 'eslint-plugin-sonarjs';
import mocha from 'eslint-plugin-mocha';
import lodash from 'eslint-plugin-lodash';
import noSecrets from 'eslint-plugin-no-secrets';
import sortKeysFix from 'eslint-plugin-sort-keys-fix';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...fixupConfigRules(
    compat.extends(
      'airbnb-base',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:eslint-comments/recommended',
      'plugin:sonarjs/recommended',
      'plugin:promise/recommended',
      'plugin:prettier/recommended',
      'plugin:lodash/recommended',
      'plugin:mocha/recommended',
      'plugin:unicorn/recommended',
      'plugin:jsdoc/recommended',
      'prettier'
    )
  ),
  {
    plugins: {
      sonarjs: fixupPluginRules(sonarjs),
      mocha: fixupPluginRules(mocha),
      lodash: fixupPluginRules(lodash),
      'no-secrets': noSecrets,
      'sort-keys-fix': sortKeysFix,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.jquery,
        ...globals.mocha,
        ...globals.node,
      },

      ecmaVersion: 9,
      sourceType: 'commonjs',
    },

    rules: {
      'arrow-parens': ['error', 'always'],
      'callback-return': 'error',
      camelcase: 'warn',
      'capitalized-comments': 'error',
      'eslint-comments/no-unused-disable': 'error',
      'handle-callback-err': 'error',
      'import/extensions': 'off',

      'import/no-extraneous-dependencies': [
        'warn',
        {
          devDependencies: ['**/*.test.{js,ts}', '**/*.spec.{js,ts}', '**/*.unit.{js,ts}', '**/*.it.{js,ts}', 'tests/**/*', 'test/**/*'],
        },
      ],

      'import/prefer-default-export': 'off',
      'jsdoc/no-undefined-types': 'off',
      'jsdoc/require-param-description': 'off',
      'jsdoc/require-returns-description': 'off',
      'lodash/import-scope': ['error', 'member'],
      'lodash/prefer-constant': 'off',
      'lodash/prefer-includes': 'off',
      'lodash/prefer-lodash-chain': 'off',
      'lodash/prefer-lodash-method': 'off',
      'lodash/prefer-some': 'off',
      'lodash/prefer-startsWith': 'off',
      'lodash/preferred-alias': 'off',
      'max-classes-per-file': 'off',
      'max-depth': ['error', 3],

      'max-len': [
        'error',
        {
          code: 150,
          ignoreRegExpLiterals: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreUrls: true,
        },
      ],

      'max-nested-callbacks': ['error', 5],
      'max-params': ['error', 5],
      'mocha/handle-done-callback': 'error',
      'mocha/max-top-level-suites': 'off',
      'mocha/no-exclusive-tests': 'error',
      'mocha/no-global-tests': 'error',
      'mocha/no-hooks-for-single-case': 'off',
      'mocha/no-identical-title': 'error',
      'mocha/no-mocha-arrows': 'off',
      'mocha/no-nested-tests': 'error',
      'mocha/no-pending-tests': 'error',
      'mocha/no-return-and-callback': 'error',
      'mocha/no-sibling-hooks': 'error',
      'no-console': 'error',
      'no-continue': 'off',

      'no-magic-numbers': [
        'error',
        {
          enforceConst: true,
          ignore: [0, 1],
        },
      ],

      'no-param-reassign': 'off',
      'no-plusplus': 'off',
      'no-process-env': 'error',
      'no-process-exit': 'error',
      'no-secrets/no-secrets': 'error',
      'no-underscore-dangle': 'off',
      'no-useless-call': 'error',
      'promise/always-return': 'off',
      'promise/catch-or-return': 'off',
      'quote-props': ['error', 'as-needed'],
      quotes: ['warn', 'single'],

      'require-jsdoc': [
        'error',
        {
          require: {
            ClassDeclaration: true,
            MethodDefinition: true,
          },
        },
      ],

      'sonarjs/no-duplicate-string': 'off',
      strict: ['error', 'global'],
      'unicorn/consistent-function-scoping': 'off',

      'unicorn/filename-case': [
        'error',
        {
          cases: {
            camelCase: true,
            pascalCase: true,
          },
        },
      ],

      'unicorn/no-fn-reference-in-iterator': 'off',
      'unicorn/no-null': 'off',
      'unicorn/no-reduce': 'off',
      'unicorn/no-useless-undefined': 'off',
      'unicorn/prefer-ternary': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'valid-jsdoc': 'off',
    },
  },
  {
    files: ['**/tsconfig.*', '**/.eslintrc.*'],

    rules: {
      'sort-keys-fix/sort-keys-fix': 'error',
    },
  },
];
