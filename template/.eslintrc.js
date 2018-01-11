module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  plugins: [
    'html'
  ],
  settings: {
    "import/resolver": {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  rules: {
    "import/extensions": ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    "no-debugger": process.env.NODE_ENV === 'production' ? 2 : 0,
    "indent": [2, 4],
    "eol-last": 1,
    "semi": [2, "never"],
    "no-restricted-syntax": 0,
    "no-param-reassign": 0,
    "max-len": 0,
    "no-labels": 0,
    "no-continue": 0,
    "global-require": 0,
    "import/no-dynamic-require": 0,
    "no-shadow": 0,
    "no-underscore-dangle": 0,
    "linebreak-style": 0,
    "linebreak-style": 0,
    "import/extensions": 0,
    "import/no-duplicates": 0,
    "import/no-unresolved": 0,
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-absolute-path": 0,
    "no-alert": 0
  }
}
