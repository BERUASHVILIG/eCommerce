module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    ".eslintrc.cjs",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "max-len": ["error", { code: 150 }],
    "react/jsx-no-constructed-context-values": "off",
    "eslint no-case-declarations": "off",
  },
};
