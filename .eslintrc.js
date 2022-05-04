module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:vue/vue3-recommended'
  ],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  rules: {
    'no-console': 'off',
    // 'comma-dangle': [2, 'never'], //禁止使用拖尾逗号
    'vue/max-attributes-per-line': 0,
    'vue/multi-word-component-names': 0,
    'vue/singleline-html-element-content-newline':0,
    'vue/html-self-closing': 0
    // 'vue/first-attribute-linebreak': 0
  }
};
