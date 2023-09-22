module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:prettier/recommended"
  ],
  "overrides": [
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "react-hooks",
    "unused-imports"
  ],
  "rules": {
    "strict": 0,
    "react/jsx-uses-react": "error",
    "react/prop-types": "off",
    "react/display-name": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": ["warn", { "additionalHooks": "use(CustomCompare(Callback|Effect)|Cancelable(Layout)?Effect)" }],
    "unused-imports/no-unused-imports": "error",
    "import/order": ["error", { "newlines-between": "never" }],
    "import/no-unassigned-import": ["error", { "allow": ["**/*.css"] }],
  },
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/resolver": {
      "node": {
        "moduleDirectory": ["node_modules", "src"]
      },
      alias: true
    }
  },
  "ignorePatterns": [ "node_modules/*", "public/*", "*.css" ]
}
