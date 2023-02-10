module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  // extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  extends: [
    '@nuxtjs', 'plugin:prettier/recommended', 'nuxt'
  ], 
  plugins: [],
  // add your custom rules here
  rules: {},
}
