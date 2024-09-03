const { resolve } = require("node:path");

const project = resolve(__dirname, "tsconfig.json");

const CI = process.env.CI === "true";

module.exports = {
  root: true,
  extends: [
    require.resolve("@vercel/style-guide/eslint/node"),
    require.resolve("@vercel/style-guide/eslint/browser"),
    require.resolve("@vercel/style-guide/eslint/typescript"),
    require.resolve("@vercel/style-guide/eslint/react"),
    require.resolve("@vercel/style-guide/eslint/next"),
    "plugin:sonarjs/recommended",
    "prettier",
  ],
  plugins: ["prettier"],
  parserOptions: {
    project,
  },
  settings: {},
  rules: {
    "prettier/prettier": CI ? "error" : "off",
    "no-console": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
  },
  overrides: [
    {
      files: ["page.tsx", "layout.tsx"],
      rules: {
        // page and layout must be default export
        "import/no-default-export": "off",
      },
    },
    {
      files: ["environment.d.ts"],
      rules: {
        // environment.d.ts must be a module
        "@typescript-eslint/no-unused-vars": "off",
      },
    },
    {
      files: ["**/?(*.)+(spec|test).[jt]s?(x)"],
      plugins: ["testing-library", "vitest"],
      extends: [
        "plugin:vitest/all",
        "plugin:vitest/recommended",
        "plugin:testing-library/react",
      ],
      rules: {
        "sonarjs/no-duplicate-string": "off",
        "vitest/prefer-expect-assertions": "off",
        "vitest/no-hooks": [
          "warn",
          {
            allow: ["beforeEach", "afterEach"],
          },
        ],
      },
    },
  ],
};
