module.exports = {
    root: true,
    env: {
        node: true,
        'vue/setup-compiler-macros': true
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/typescript/recommended',
        'plugin:prettier/recommended'
    ],
    parserOptions: { ecmaVersion: 2020 },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        semi: 0,
        'comma-dangle': 0,
        quotes: 0,
        indent: 0,
        'space-before-function-paren': 0,
        'vue/script-indent': [2, 4, { baseIndent: 1 }],
        'max-len': 0,
        'vue/multi-word-component-names': 0,
        'linebreak-style': 0,
        'prettier/prettier': [
            'error',
            {
                printWidth: 120,
                // bracketSpacing: true,
                // arrowParens: 'always',
                singleQuote: true,
                semi: false,
                tabWidth: 4,
                trailingComma: 'none',
                vueIndentScriptAndStyle: true,
                endOfLIne: 'Lf'
            },
            { usePrettierrc: false }
        ]
    }
}
