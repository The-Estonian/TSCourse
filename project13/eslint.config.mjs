import { defineConfig } from 'eslint/config';
import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';


export default defineConfig([
    { files: ['**/*.{js,mjs,cjs,ts}'] },
    { files: ['**/*.{js,mjs,cjs,ts}'], languageOptions: { globals: globals.browser } },
  { files: ['**/*.{js,mjs,cjs,ts}'], extends: ['js/recommended'] },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            'indent': ['error', 4],
            'quotes': ['error', 'single'],
            'semi': ['error', 'always'],
            'no-trailing-spaces': 'error'
        }
    }
]);