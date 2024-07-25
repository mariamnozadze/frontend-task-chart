module.exports = {
  parser: '@typescript-eslint/parser',
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  plugins: ['react', 'vitest', 'import'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:vitest/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['src/template/*', 'src/ui/components/template/*'],
  overrides: [
    {
      files: ['src/**/*.spec.ts', 'src/**/*.spec.tsx'],
      plugins: ['vitest'],
      extends: ['plugin:vitest/recommended'],
    },
    // Configuration for TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'unused-imports'],
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
        project: ['./tsconfig.json'],
        ecmaVersion: 'latest',
      },
      rules: {
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/space-before-function-paren': [
          'error',
          {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
          },
        ],
        '@typescript-eslint/semi': ['error', 'always'],

        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
      },
    },
  ],
  rules: {
    'import/named': 'off',
    'no-undef': 'off',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': ['off'],
    'no-unused-vars': 'off',
  },
  globals: {
    it: 'readonly',
    render: 'readonly',
    describe: 'readonly',
    before: 'readonly',
    beforeEach: 'readonly',
    after: 'readonly',
    afterEach: 'readonly',
    expect: 'readonly',
    beforeAll: 'readonly',
    test: 'readonly',
  },
};
