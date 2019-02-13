module.exports = {
    root: true,
    env: {
        node: true,
        jest: true,
    },
    extends: [
        'plugin:vue/essential',
        'eslint:recommended',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'comma-dangle': ['error', 'always-multiline'],
        'semi': ['error', 'never'],
        'no-extra-semi': 'error',
        'indent': ['error', 4],
        'quotes': ['error', 'single', { 'avoidEscape': true }],
        'object-curly-spacing': ['error', 'always'],
        'array-bracket-spacing': ['error', 'never'],
        'computed-property-spacing': ['error', 'never'],
        'no-trailing-spaces': 'error',
        'key-spacing': [
            'error',
            {
                'beforeColon': false,
                'afterColon': true,
            },
        ],
        'max-len': [
            'warn',
            {
                'code': 120,
                'ignoreComments': true,
                'ignoreTrailingComments': true,
                'ignoreUrls': true,
                'ignorePattern': '<.+',
            },
        ],
        'curly': 'error',
        'brace-style': 'error',
        'no-mixed-spaces-and-tabs': 'error',
        'no-multiple-empty-lines': 'error',
        'no-var': 'error',
        'no-with': 'error',
        'one-var': ['error', 'never'],
        'no-empty': 'error',
        'no-cond-assign': ['error', 'always'],
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
}
