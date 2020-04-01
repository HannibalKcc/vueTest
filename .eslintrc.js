module.exports = {
  'root': true,
  'env': {
    'node': true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  'parserOptions': {
    'parser': 'babel-eslint'
  },
  'rules': {
    'object-curly-spacing': 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // my：分号结尾 无
    'semi': ['error', 'always'],
    // my：声明未使用 警告
    'no-unused-vars': 1,
    // my：缩进 无
    'indent': 0,
    'space-before-function-paren': 0,
    'prefer-const': 0,
    'no-prototype-builtins': 0
  },
  'overrides': [
    {
      'files': [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      'env': {
        'mocha': true
      }
    }
  ],
  'globals': {
    'Swiper': true
  }
};
