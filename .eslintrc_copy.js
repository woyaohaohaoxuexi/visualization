module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  // extends: ['plugin:vue/vue3-recommended', 'eslint:recommended', 'plugin:prettier/recommended'],
  // airbnb: 比 airbnb-base 多了对 react 和 jsx 语法的支持，
  extends: ['plugin:vue/vue3-recommended', 'airbnb-base',  'plugin:prettier/recommended'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 生产环境禁用consele
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // semi: 'error',
    // 'no-unused-vars': 'error',
    'vue/no-export-in-script-setup': 0,
    'prettier/prettier': 'error',
    'import/no-unresolved': 'off'
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src']
        ],
        extensions: ['.js', '.vue']
      }
    }
  }
};
