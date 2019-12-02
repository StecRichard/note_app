module.exports = {
    env: {
        browser: true,
        jest: true,
        es6: true,
    },
    plugins: ['import', 'react'],
    extends: 'eslint:recommended',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'no-console': 'warn',
        'no-eval': 'error',
        'import/first': 'error',
    },
};
