module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': 0,
    'no-trailing-spaces': 0,
    'eol-last': 0,
    indent: 0, // 2 spaces – for indentation
    'max-len': 0,
    'no-console': 'off',
    'space-before-function-paren': 0,
    curly: ['error', 'multi-line'],
    semi: 0,
    quotes: 0,
    "comma-dangle": 0,
    "arrow-parens": 0,
    "space-before-blocks": 0,
    camelcase: [2, { properties: "never" }],
    "no-unused-expressions": 0,
    "no-extra-parens": 0,
    "missing-whitespace-between-attributes": 0,
    "unexpected-character-in-attribute-name": 0,
    whitespace: 0
  }
}
