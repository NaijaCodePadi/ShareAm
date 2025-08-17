module.exports = {
    plugins: ['simple-import-sort', 'unused-imports'],
    rules: {
        'simple-import-sort/exports': 'warn',
        'simple-import-sort/imports': [
            'warn',
            {
                groups: [
                    ['^@?\\w', '^\\u0000'],
                    ['^.+\\.s?css$'],
                    ['^@pages', '^@public'],
                    ['^@utils', '^@services'],
                    ['^@hooks'],
                    ['^@components', '^@layouts'],
                    ['^@fonts', '^@assets'],
                    ['^@validation'],
                    ['^@store'],
                    [
                        '^\\./?$',
                        '^\\.(?!/?$)',
                        '^\\.\\./?$',
                        '^\\.\\.(?!/?$)',
                        '^\\.\\./\\.\\./?$',
                        '^\\.\\./\\.\\.(?!/?$)',
                        '^\\.\\./\\.\\./\\.\\./?$',
                        '^\\.\\./\\.\\./\\.\\.(?!/?$)',
                    ],
                    ['^@types'],
                    ['^'],
                ],
            },
        ],
        'no-unused-vars': 'off',
        'no-console': 'warn',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
    },
    extends: ['eslint:recommended', 'prettier'],
};
