/*
 * http://eslint.org/docs/rules/
 * https://github.com/yannickcr/eslint-plugin-react
 */
module.exports = {
    parser: 'babel-eslint',
    extends: [
        'airbnb',
        'prettier',
        'prettier/react',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:jsx-control-statements/recommended',
    ],
    plugins: ['react', 'prettier', 'jsx-control-statements'],
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    rules: {
        indent: ['error', 4, { VariableDeclarator: 4, SwitchCase: 1 }],
        'no-unused-vars': ['warn'],
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        eqeqeq: ['warn', 'always'],
        'max-len': ['warn', 120],
        semi: ['error', 'always'],
        'semi-spacing': [2, { before: false, after: true }],
        'dot-notation': [2, { allowKeywords: true }],

        'comma-style': ['error', 'last'],
        'comma-spacing': [2, { before: false, after: true }],

        //不允许重复使用分隔空格
        'no-multi-spaces': 2,
        //不允许多个空行
        'no-multiple-empty-lines': 2,
        //禁止在代码后使用内联注释
        'no-inline-comments': 0,
        //要求 return 语句要么总是指定返回的值，要么不指定
        //'consistent-return': 'error',
        // js中使用单引号
        quotes: [2, 'single'],
        // jsx中使用双引号
        'jsx-quotes': ['error', 'prefer-double'],
        'no-sparse-arrays': 0,

        // React相关校验规则
        'react/sort-comp': 0,
        'react/jsx-indent': [2, 4],
        'react/display-name': 'warn',
        'react/no-children-prop': 0,
        'react/prop-types': ['warn', { ignore: ['className', 'children', 'style', 't'] }],
        'react/jsx-no-undef': ['warn', { allowGlobals: true }],
        'react/no-deprecated': 'warn',
        'react/no-string-refs': 'warn',
        'react/forbid-prop-types': 0,
        'react/jsx-filename-extension': 0,
        'react/jsx-indent-props': 0,
        'react/jsx-closing-bracket-location': 0,
        'react/jsx-first-prop-new-line': 0,
        'react/jsx-boolean-value': ['warn', 'always'],
        'react/no-array-index-key': 0,
        'react/no-multi-comp': 0,
        'react/prefer-stateless-function': 0,
        'react/no-find-dom-node': 'warn',
        'import/extensions': 0,
        'import/no-unresolved': 0,
        'import/no-extraneous-dependencies': 0,
        'import/no-dynamic-require': 0,

        'prettier/prettier': 'error',
    },
};
