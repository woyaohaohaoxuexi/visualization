// import { resolve } from 'path'

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  // extends: ['plugin:vue/vue3-recommended', 'airbnb-base', 'plugin:prettier/recommended'],
  extends: ['plugin:vue/vue3-recommended', 'airbnb-base', 'prettier'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 生产环境禁用consele
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-unused-vars': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-export-in-script-setup': 0
    // 'prettier/prettier': 'error'
    // 'import/no-unresolved': 'off'
  },
  settings: {
    'import/resolver': {
      alias: [['@', './src']]
    }
  }
};
