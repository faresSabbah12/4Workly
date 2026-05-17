import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    ignores: ['dist', 'node_modules'],
  },

  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      reactPlugin.configs.flat.recommended,
      prettier,
    ],

    plugins: {
      react: reactPlugin,
      'react-refresh': reactRefresh,
    },

    languageOptions: {
      globals: globals.browser,

      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',

        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    rules: {
      'react/react-in-jsx-scope': 'off',

      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      'react-refresh/only-export-components': [
        'warn',
        {
          allowConstantExport: true,
        },
      ],
    },

    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]);