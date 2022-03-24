module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true
    },
    extends: [
        'standard'
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    rules: {
        semi: ['error', 'always'],
        indent: ['error', 4]
    },
    env: { node: true, mocha: true }
};
