import js from '@eslint/js'
import { includeIgnoreFile } from '@eslint/compat'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'
import pluginN from 'eslint-plugin-n'
import pluginSecurity from 'eslint-plugin-security'
import globals from 'globals'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const gitignorePath = path.resolve(__dirname, '.gitignore')

export default tseslint.config(
  includeIgnoreFile(gitignorePath),
  { ignores: ['examples/**'] },
  js.configs.recommended,
  {
    files: ['src/**/*.ts', '__tests__/**/*.ts'],
    extends: [tseslint.configs.base]
  },
  stylistic.configs['recommended'],
  pluginN.configs['flat/recommended-script'],
  pluginSecurity.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
      globals: {
        ...globals.es2022,
        ...globals.node
      }
    },
    rules: {
      'no-var': 'warn',
      'object-shorthand': ['warn', 'properties'],
      'prefer-const': ['error', { destructuring: 'all' }],
      'no-unused-vars': ['error', { args: 'none', caughtErrors: 'none', ignoreRestSiblings: true, vars: 'all' }],
      'n/no-process-exit': 'warn',
      'n/no-unsupported-features/es-syntax': 'off',
      'n/no-unpublished-require': 'off',
      'n/hashbang': 'off',
      'security/detect-non-literal-fs-filename': 'off',
      'security/detect-unsafe-regex': 'error',
      'security/detect-buffer-noassert': 'error',
      'security/detect-child-process': 'error',
      'security/detect-disable-mustache-escape': 'error',
      'security/detect-eval-with-expression': 'error',
      'security/detect-no-csrf-before-method-override': 'error',
      'security/detect-non-literal-regexp': 'error',
      'security/detect-object-injection': 'warn',
      'security/detect-possible-timing-attacks': 'error',
      'security/detect-pseudoRandomBytes': 'error',
      '@stylistic/space-before-function-paren': 'off',
      '@stylistic/object-curly-spacing': 'off',
      '@stylistic/comma-dangle': ['error', 'never'],
      '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      '@stylistic/quote-props': ['error', 'as-needed']
    }
  }
)
