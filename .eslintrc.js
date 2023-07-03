module.exports = {
  plugins: [
    'react-perf',
    '@typescript-eslint',
    '@shopify',
    'import',
    'simple-import-sort',
    'sort-keys-fix',
    'prefer-arrow',
    'react-memo',
    'prettier',
    'typescript-sort-keys',
    'typescript-enum',
  ],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/no-floating-promises': 'error',
      },
    },
    {
      files: ['*.tsx'],
      rules: {
        'react-memo/require-memo': 'error',
      },
    },
    {
      files: ['*.json'],
      rules: { 'max-len': 'off' },
    },
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
    react: {
      version: 'detect',
    },
  },
  extends: [
    '@react-native-community',
    'plugin:react-perf/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:typescript-enum/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  ignorePatterns: ['node_modules/'],
  rules: {
    'react/jsx-no-literals': [
      'error',
      {
        ignoreProps: true,
        noStrings: true,
      },
    ],

    complexity: ['error', 25],
    'max-nested-callbacks': ['error', 4],
    'max-params': ['error', 5],
    'max-depth': ['error', 3],
    'max-len': ['error', 200],
    'max-lines': ['error', 300],
    'max-statements': ['error', 15],
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    'react/jsx-key': ['error', { checkFragmentShorthand: true, checkKeyMustBeforeSpread: true }],
    '@shopify/prefer-early-return': 'error',
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'react/jsx-boolean-value': ['error', 'never'],
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'object-shorthand': ['error', 'always'],
    '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
    'typescript-sort-keys/interface': ['error', 'asc', { natural: false, requiredFirst: true }],
    'no-useless-concat': 'error',
    'prefer-template': 'error',
    'no-loop-func': 'error',
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    'no-mixed-operators': [
      'error',
      {
        groups: [
          ['+', '-', '%', '&&', '||'],
          ['*', '/', '%', '&&', '||'],
        ],
      },
    ],

    'require-await': 'error',
    'no-void': ['error', { allowAsStatement: true }],

    'prettier/prettier': 'error',

    'react-hooks/exhaustive-deps': [
      'error',
      {
        additionalHooks: '(useStyle|useAnimatedStyle|useCode)',
      },
    ],

    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/prefer-optional-chain': 'error',

    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-cycle': ['error', { maxDepth: 4 }],
    '@shopify/no-ancestor-directory-import': 'error',

    'no-extra-boolean-cast': 'error',
    'no-negated-condition': 'error',
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsForRegex: ['.*[Rr]ef'] },
    ],

    'react-perf/jsx-no-new-function-as-prop': 'error',
    'react-perf/jsx-no-new-object-as-prop': 'error',
    'react-perf/jsx-no-new-array-as-prop': 'error',
    'react-memo/require-usememo': 'error',

    'no-shadow': 'error',
    'no-catch-shadow': 'error',
    'no-warning-comments': 'warn',
    radix: ['error', 'as-needed'],

    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000'],
          ['^react', '^@?\\w'],
          ['^'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ['^\\./styled'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',

    'react-native/no-inline-styles': 'off',

    'prefer-arrow/prefer-arrow-functions': [
      'error',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'func-style': ['error', 'expression', { allowArrowFunctions: true }],
  },
};