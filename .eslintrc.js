module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'generator-star-spacing': 'off',
    // allow paren-less arrow functions
    'arrow-parens': 'off',
    'one-var': 'off',
    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prefer-promise-reject-errors': 'off',
    "space-before-blocks": "off",
    "quotes": "off",
    "no-extra-semi": "off",
    "indent": "off",
    "semi": "off",
    "comma-dangle": "off",
    "spaced-comment": "off",
    "space-before-function-paren": "off",
    "no-trailing-spaces": "off",
    "no-multiple-empty-lines": "off",
    "no-template-curly-in-string": "off",
    "no-prototype-builtins": "off",
  }
}
