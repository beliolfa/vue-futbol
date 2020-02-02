module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },

  parserOptions: {
    ecmaVersion: 2017,
    parser: 'babel-eslint',
  },

  extends: [
    '@nuxtjs',
    'eslint:recommended',
    'prettier',
    'plugin:nuxt/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
    ],
    // Force this rules for auto fix
    quotes: [2, 'single', 'avoid-escape'],
    semi: [2, 'never'],
    'comma-dangle': ['error', 'always-multiline'],
  }
}
