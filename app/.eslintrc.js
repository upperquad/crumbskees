const path = require('path');

module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": ["airbnb"],
  "parserOptions": {
    "ecmaVersion": 2015,
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": ["cumul8", "react-hooks", "import"],
  "rules": {
    "arrow-parens": ["error", "as-needed"],
    "no-param-reassign": [
      0,
      {
        "props": false
      }
    ],
    "no-plusplus": [
      2,
      {
        "allowForLoopAfterthoughts": true
      }
    ],
    "no-use-before-define": [
      "error",
      {
        "functions": false
      }
    ],
    "operator-linebreak": ["error", "after"],
    "semi": ["error", "never"],
    "no-new": [0],
    "max-len": [
      1,
      {
        "code": 120,
        "ignoreComments": true
      }
    ],
    "class-methods-use-this": [0],
    "no-underscore-dangle": [0],
    "react/prefer-stateless-function": [
      2,
      {
        "ignorePureComponents": false
      }
    ],
    "cumul8/alphabetical-destructuring": [1],
    "object-curly-newline": ["off"],
    "jsx-curly-newline": 0,
    "react/prop-types": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/accessible-emoji": 0,
    "react/no-unescaped-entities": 0,
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    "react/jsx-fragments": 0,
    "react/jsx-props-no-spreading": 0,
    "no-console":  [
      "warn",
      { allow: ["warn", "error"] },
    ],
  },
  "settings": {
    "import/resolver": {
      "alias": {
        "map": [
          ["~assets", path.resolve(__dirname, 'src/assets/')],
          ["~components", path.resolve(__dirname, 'src/components/')],
          ["~managers", path.resolve(__dirname, 'src/managers/')],
          ["~utils", path.resolve(__dirname, 'src/utils/')],
          ["~constants", path.resolve(__dirname, 'src/constants.js')],
          ["~styles", path.resolve(__dirname, 'src/styles/')],
        ],
        "extensions": [".js", ".jsx"]
      }
    }
  }
}
