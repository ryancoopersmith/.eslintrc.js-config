module.exports = {
    "extends": "standard",
    "plugins": [
        "standard",
        "promise",
        "react",
    ],
    "env": {
      "browser": "true",
      "node": "true",
      "commonjs": "true",
      "jasmine": "true",
      "jquery": "true",
      "es6": "true"
    },
    "parsers": "babel",
    "parserOptions": {
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": "true"
      },
      "ecmaVersion": 6
    },
    "rules": {
      "semi": [2, "always"]
    }
};

In package.json:

"devDependencies": {
  "eslint": "^3.15.0",
  "eslint-config-standard": "^6.2.1",
  "eslint-plugin-promise": "^3.4.1",
  "eslint-plugin-react": "^6.9.0",
  "eslint-plugin-standard": "^2.0.1",
  "eslint-config-standard": "^6.2.1"
}
