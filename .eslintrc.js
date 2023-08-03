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
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    'spaced-comment': ['error', 'always', { exceptions: ['-', '+'] }],
    'vue/no-v-html': 'off',
    'js/new-cap': 'off',
    'no-console': 'off',
    'vue/attribute-hyphenation': 'off',
  },
};
